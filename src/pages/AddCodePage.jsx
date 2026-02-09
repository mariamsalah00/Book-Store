import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addCodeValidationSchema } from "../schema/index";
export default function AddCodePage() {
    const navigate = useNavigate();
    const inputsRef = useRef([]);
    const schema = addCodeValidationSchema;
    useEffect(() => {
        const email = localStorage.getItem("reset_email");
        if (!email) navigate("/forget-password", { replace: true });
    }, [navigate]);

    const handleChange = (e, index, values, setFieldValue) => {
        const value = e.target.value;
        if (!/^[0-9]?$/.test(value)) return;

        const codeArr = values.code.split("");
        codeArr[index] = value;
        setFieldValue("code", codeArr.join(""));

        if (value && index < 3) {
            inputsRef.current[index + 1].focus();
        }
    };

    const onSubmit = (values, { setSubmitting }) => {
        localStorage.setItem("reset_code", values.code.trim());
        toast.success("Code verified");
        navigate("/reset-password");
        setSubmitting(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-90 text-center">
                {/* Title */}
                <h2 className="text-[1.25rem] font-semibold text-[#D9176C] mb-[0.25em]">Reset your password!</h2>

                <p className="text-[0.8125rem] text-[#22222280] mb-[2em] leading-relaxed">Enter the 4 digits code that you received on your email</p>

                <Formik initialValues={{ code: "" }} validationSchema={schema} onSubmit={onSubmit}>
                    {({ values, setFieldValue, isSubmitting }) => (
                        <Form>
                            {/* OTP Inputs */}
                            <div className="flex justify-center gap-[0.75em] mb-[1.25em]">
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (inputsRef.current[index] = el)}
                                        type="text"
                                        maxLength="1"
                                        value={values.code[index] || ""}
                                        onChange={(e) => handleChange(e, index, values, setFieldValue)}
                                        className="
                      w-[3em] h-[3em]
                      text-center text-[1rem] font-medium
                      border border-[#E5E5E5]
                      rounded-[0.6em]
                      focus:outline-none
                      focus:border-[#D9176C]
                    "
                                    />
                                ))}
                            </div>

                            {/* Error */}
                            <ErrorMessage name="code" component="div" className="text-[0.75rem] text-red-500 mb-[1.2em]" />

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
                                {isSubmitting ? "Verifying..." : "Reset password"}
                            </button>

                            {/* Resend */}
                            <p className="mt-[1.8em] text-[0.8125rem] text-[#222]">
                                Didn’t receive a code?{" "}
                                <button type="button" onClick={() => toast.success("Code resent")} className="text-[#D9176C] font-medium">
                                    Send again
                                </button>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
