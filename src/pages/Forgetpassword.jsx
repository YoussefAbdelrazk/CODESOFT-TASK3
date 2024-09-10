import { Form, Link, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { customFetch } from "../utils";

import { useCartGlobalContext } from "../context/cartContext";
import { userGlobal } from "../context/userContext";
import { Helmet } from "react-helmet-async";

export default function Forgetpassword() {
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  // const[ErrorMessage,setErrorMessage] =useState('')

  let validate = Yup.object().shape({
    email: Yup.string().email("email is invalid").required("email is invalid"),
  });

  function Forget(values) {
    setloading(true);
    customFetch
      .post("/api/v1/auth/forgotPasswords", values)
      .then((response) => {
        if (response.data.statusMsg == "success") {
          setloading(false);
          toast.success(response.data.message);
          navigate("/codeverify");
        }
      })
      .catch((err) => {
        setloading(false);
        toast.error(" cant send code to this email");
      });
  }

  const { values, touched, handleChange, handleSubmit, handleBlur, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: Forget,
      validationSchema: validate,
    });

  return (
    <section className=" grid h-screen place-items-center">
      <Helmet>
        <title>ForgetPassword</title>
      </Helmet>
      <Form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col p-8 gap-y-4 card w-96 bg-base-100 shadow-lg"
      >
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />
        {errors.email && touched.email && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errors.email}</span>
          </div>
        )}

        <div className="mt-5">
          <SubmitBtn isloading={loading} text="Send Code" />
        </div>
      </Form>
    </section>
  );
}
