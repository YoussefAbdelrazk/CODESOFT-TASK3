import { Form, Link, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { customFetch } from "../utils";

import { Helmet } from "react-helmet-async";

const url = "/api/v1/auth/verifyResetCode";
export default function CodeVerify() {
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  // const[ErrorMessage,setErrorMessage] =useState('')

  let validate = Yup.object().shape({
    resetCode: Yup.string().required(),
  });

  function Verify(values) {
    setloading(true);
    customFetch
      .post(url, values)
      .then((response) => {
        console.log(response);
        if (response.data.status == "Success") {
          setloading(false);
          navigate("/resetpassword");
        }
      })
      .catch((err) => {
        setloading(false);
        toast.error(" cant verify this code please try again");
      });
  }

  const { values, touched, handleChange, handleSubmit, handleBlur, errors } =
    useFormik({
      initialValues: {
        resetCode: "",
      },
      onSubmit: Verify,
      validationSchema: validate,
    });

  return (
    <section className=" grid h-screen place-items-center">
      <Helmet>
        <title>VerifyCode</title>
      </Helmet>
      <Form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col p-8 gap-y-4 card w-96 bg-base-100 shadow-lg"
      >
        <FormInput
          type="text"
          name="resetCode"
          label="Code"
          value={values.resetCode}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />
        {errors.resetCode && touched.resetCode && (
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
            <span>{errors.resetCode}</span>
          </div>
        )}

        <div className="mt-5">
          <SubmitBtn isloading={loading} text="Verify Code" />
        </div>
      </Form>
    </section>
  );
}
