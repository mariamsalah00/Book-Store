import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authService } from "../store/services/apiCall";
import { forgetPasswordValidationSchema } from "../schema/index";

const schema = forgetPasswordValidationSchema;

export default function ForgetPasswordPage() {
    const navigate = useNavigate();
    const forgetPassword = authService.forgetPassword;

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            await forgetPassword(values.email);
            localStorage.setItem("reset_email", values.email);
            toast.success("Code sent to your email");
            navigate("/add-code");
        } catch (err) {
            toast.error(err?.response?.data?.message || "Failed to send code");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-[1em]">
            <div className="w-full max-w-90 text-center">
                {/* Title */}
                <h2 className="text-[1.25rem] font-semibold text-[#D9176C] mb-[0.4em]">Forget Password?</h2>

                <p className="text-[0.8125rem] text-[#22222280] mb-[2em]">Enter your email to reset your password</p>

                <Formik initialValues={{ email: "" }} validationSchema={schema} onSubmit={onSubmit}>
                    {({ isSubmitting }) => (
                        <Form className="space-y-[1.5em] text-left">
                            {/* Email */}
                            <div className="form-control w-full">
                                <label className="label mb-[0.3em]">
                                    <span className="label-text text-[0.875rem] font-medium text-black">Email</span>
                                </label>

                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="
                    input input-bordered w-full
                    h-[3em]
                    text-[0.875rem]
                    rounded-[0.6em]
                    focus:border-[#D9176C]
                    focus:outline-none
                  "
                                />

                                <ErrorMessage name="email" component="div" className="text-[0.75rem] text-red-500 mt-[0.4em]" />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`
                  w-full h-[3em]
                  rounded-[0.6em]
                  text-white text-[0.875rem] font-medium
                  bg-[#D9176C]
                  hover:bg-[#c0155f]
                  transition
                  flex items-center justify-center gap-[0.5em]
                  ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
                `}>
                                {isSubmitting && <span className="loading loading-spinner loading-xs text-white"></span>}
                                {isSubmitting ? "Sending..." : "Send reset code"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
