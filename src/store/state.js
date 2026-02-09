import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "./services/apiCall";

export const useAuthstore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const { data } = await authService.login(credentials);
          const { token, user } = data;
          set({
            token,
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return { success: true };
        } catch (error) {
          const message =
            error.response?.data?.message || "Invalid email or password";
          const formattedError = message.includes("email")
            ? "Email is invalid or not registered"
            : message;
          set({ isLoading: false, error: formattedError });
          return { success: false, error: formattedError };
        }
      },

      signup: async (values) => {
        set({ isLoading: true, error: null });

        try {
          const { data } = await authService.signup(values);
          if (data.token) {
            set({
              token: data.token,
              user: data.user,
              isAuthenticated: true,
            });
          }

          set({ isLoading: false, error: null });
          return { success: true };
        } catch (error) {
          const message =
            error.response?.data?.message || "Registration failed";

          set({
            isLoading: false,
            error: message,
          });

          return { success: false, error: message };
        }
      },

      logout: () =>
        set({
          token: null,
          user: null,
          isAuthenticated: false,
          error: null,
        }),

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
