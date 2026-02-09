import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authService } from "../store/services/apiCall";
import { resetPasswordValidationSchema } from "../schema/index";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const schema = resetPasswordValidationSchema;
    useEffect(() => {
        const email = localStorage.getItem("reset_email");
        const otp = localStorage.getItem("reset_code");
        if (!email || !otp) navigate("/forget-password", { replace: true });
    }, [navigate]);

    const onSubmit = async (values, { setSubmitting }) => {
        const email = localStorage.getItem("reset_email");
        const otp = localStorage.getItem("reset_code");

        try {
            await authService.resetPassword({
                email,
                otp,
                password: values.password,
                password_confirmation: values.confirm,
            });

            toast.success("Password reset successful");
            localStorage.removeItem("reset_email");
            localStorage.removeItem("reset_code");
            navigate("/login");
        } catch (err) {
            toast.error(err?.response?.data?.message || "Reset failed");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-[1em]">
            <div className="w-full max-w-90 text-center">
                {/* Title */}
                <h2 className="text-[1.25rem] font-semibold text-[#D9176C] mb-[0.4em]">Create new password!</h2>

                <p className="text-[0.8125rem] text-[#22222280] mb-[0.3em]">Create a strong password</p>
                <p className="text-[0.75rem] text-[#22222280] mb-[2em]">Your new password must be different from previous one</p>

                <Formik initialValues={{ password: "", confirm: "" }} validationSchema={schema} onSubmit={onSubmit}>
                    {({ isSubmitting }) => (
                        <Form className="text-left space-y-[1.4em]">
                            {/* Password */}
                            <div className="form-control w-full">
                                <label className="mb-[0.4em] block">
                                    <span className="text-[0.875rem] font-medium text-black">Password</span>
                                </label>

                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Enter password"
                                    className="
                    w-full h-[3em]
                    rounded-[0.6em]
                    border border-[#E5E5E5]
                    px-[1em]
                    text-[0.875rem]
                    focus:outline-none
                    focus:border-[#D9176C]
                  "
                                />

                                <p className="text-[0.75rem] text-[#22222280] mt-[0.4em]">Must be at least 8 characters</p>

                                <ErrorMessage name="password" component="div" className="text-[0.75rem] text-red-500 mt-[0.3em]" />
                            </div>

                            {/* Confirm Password */}
                            <div className="form-control w-full">
                                <label className="mb-[0.4em] block">
                                    <span className="text-[0.875rem] font-medium text-black">Confirm password</span>
                                </label>

                                <Field
                                    name="confirm"
                                    type="password"
                                    placeholder="Confirm password"
                                    className="
                    w-full h-[3em]
                    rounded-[0.6em]
                    border border-[#E5E5E5]
                    px-[1em]
                    text-[0.875rem]
                    focus:outline-none
                    focus:border-[#D9176C]
                  "
                                />

                                <ErrorMessage name="confirm" component="div" className="text-[0.75rem] text-red-500 mt-[0.3em]" />
                            </div>

                            {/* Remember me */}
                            <label className="flex items-center gap-[0.5em] text-[0.75rem] text-[#222]">
                                <input type="checkbox" className="checkbox checkbox-sm" />
                                Remember me
                            </label>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                  w-full h-[3em]
                  rounded-[0.6em]
                  bg-[#D9176C]
                  text-white text-[0.875rem] font-medium
                  hover:bg-[#c0155f]
                  transition
                  flex items-center justify-center gap-[0.5em]
                  disabled:opacity-70
                ">
                                {isSubmitting && <span className="loading loading-spinner loading-xs"></span>}
                                {isSubmitting ? "Resetting..." : "Reset password"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
