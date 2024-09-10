import { Form, Link, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { useCartGlobalContext } from "../context/cartContext";
import { userGlobal } from "../context/userContext";
import { Helmet } from "react-helmet-async";

const url = "/api/v1/auth/resetPassword";
export default function ResetPassword() {
  const { GetUserCart } = useCartGlobalContext();
  const { setName, setUser } = userGlobal();
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  // const[ErrorMessage,setErrorMessage] =useState('')

  let validate = Yup.object().shape({
    email: Yup.string().email("email is invalid").required("email is invalid"),

    newPassword: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password must be uppercase")
      .required(),
  });

  function ResetPassword(values) {
    setloading(true);
    customFetch
      .put(url, values)
      .then((response) => {
        console.log(response);

        setloading(false);
        localStorage.setItem("token", response?.data.token);
        setUser(response?.data.token);
        // localStorage.setItem("name",response?.data.user.name)
        // setName(response?.data.user.name)
        toast.success(`Welcome Back`);
        GetUserCart();
        navigate("/");
      })
      .catch((err) => {
        setloading(false);
        toast.error("An was error please try again");
      });
  }

  const { values, touched, handleChange, handleSubmit, handleBlur, errors } =
    useFormik({
      initialValues: {
        email: "",
        newPassword: "",
      },
      onSubmit: ResetPassword,
      validationSchema: validate,
    });

  return (
    <section className=" grid h-screen place-items-center">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col p-8 gap-y-4 card w-96 bg-base-100 shadow-lg"
      >
        <h4 className=" text-center font-bold text-3xl">
          {" "}
          Create New Password{" "}
        </h4>

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

        <FormInput
          type="password"
          name="newPassword"
          label="New Password"
          value={values.newPassword}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />
        {errors.newPassword && touched.newPassword && (
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
            <span>{errors.newPassword}</span>
          </div>
        )}

        <div className="mt-5">
          <SubmitBtn isloading={loading} text="Login" />
        </div>
      </Form>
    </section>
  );
}
