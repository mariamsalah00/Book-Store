// import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddCodePage from "../pages/AddCodePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import About from "../pages/About";
import BooksPage from "../pages/BooksPage";
import NotFoundPage from "../pages/NotFoundPage";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// use v6.30 createBrowserRouter and dont forget to take look for v7 its more easier like nextjs routing system (app router)
// this way clean and more readable
// i kept the old way commented for you to see the difference

const router = createBrowserRouter([
  // Protected Routes - requires authentication
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "books",
        element: <BooksPage />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "add-code",
        element: <AddCodePage />,
      },
    ],
  },
  // Auth Routes - public pages with different layout
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "forget-password",
        element: <ForgetPasswordPage />,
      },
    ],
  },
  // Catch-all route for 404 Not Found
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function RouterApp() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          auth Pages
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="add-code" element={<AddCodePage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="forget-password" element={<ForgetPasswordPage />} />
        </Route>
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
}
