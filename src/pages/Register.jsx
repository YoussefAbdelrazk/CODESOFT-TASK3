import { Form,Link, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { customFetch } from "../utils";
import { useState } from "react";
import { toast } from "react-toastify";
import { userGlobal } from "../context/userContext";
import { Helmet } from 'react-helmet-async';

const url = '/api/v1/auth/signup'
export default function Register() {
  const [loading, setloading] = useState(false)
    const[ErrorMessage,setErrorMessage] =useState('')
    const navigate = useNavigate()
    const{setName,setUser}= userGlobal()


  let validate = Yup.object().shape({
    name: Yup.string()
      .min(3, "name is minLength 3")
      .max(10, "name is maxLength 10")
      .required("name is required"),
    email: Yup.string().email("email is invalid").required("email is invalid"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "phone is invalid")
      .required(),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password must be uppercase")
      .required(),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "password and rePassword not match")
      .required(),
  });

          function Register(values){
            setloading(true)
                customFetch.post(url,values).then((response)=>{

                  if(response?.data.message === "success"){
                    setloading(false);
                    localStorage.setItem("token", response?.data.token)
                    setUser(response?.data.token)
                    localStorage.setItem("name",response?.data.user.name)
                    setName(response?.data.user.name)
                    toast.success(" Account successfully registered")
                    navigate('/')
                  }
                }).catch((err)=>{
                  setloading(false);

                  setErrorMessage(err.response.data.message)
                  toast.error(err.response.data.message)
                })
          }

        const {values,touched,handleChange,handleSubmit,handleBlur ,errors} = useFormik({
          initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
          },
          onSubmit :Register,
          validationSchema:validate
        })



  return (
    <section className=" grid h-screen place-items-center">
        <Helmet>
        <title>Register</title>
      </Helmet>

      <Form onSubmit={handleSubmit}  className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 ">
        <h4 className=" font-bold text-3xl text-center">Register</h4>
        <FormInput  type='text' name='name' label='UserName' value={values.name} handleChange={handleChange} handleBlur={handleBlur} touched={touched}    />
                {errors.name && touched.name &&         <div role="alert" className="alert alert-error">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{errors.name}</span>
          </div>}

        <FormInput type='email' name='email' label='Email' value={values.email} handleChange={handleChange} handleBlur={handleBlur} touched={touched}   />
        {errors.email && touched.email &&         <div role="alert" className="alert alert-error">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{errors.email}</span>
          </div>}

        <FormInput type='password' name='password' label='Password' value={values.password} handleChange={handleChange} handleBlur={handleBlur} touched={touched}  />
        {errors.password && touched.password &&         <div role="alert" className="alert alert-error">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{errors.password}</span>
          </div>}

        <FormInput type='password' name='rePassword' label='Confirm Password'value={values.rePassword} handleChange={handleChange} handleBlur={handleBlur} touched={touched}   />
        {errors.rePassword && touched.rePassword &&         <div role="alert" className="alert alert-error">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{errors.rePassword}</span>
          </div>}

        <FormInput type='tel' name='phone' label='Phone Number'value={values.phone} handleChange={handleChange} handleBlur={handleBlur} touched={touched}   />

        {errors.phone && touched.phone &&         <div role="alert" className="alert alert-error">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{errors.phone}</span>
          </div>}


          <div className="mt-4">
            <SubmitBtn isloading={loading} text='Register'/>
          </div>

          <p className="text-center">Already a member ? <Link className=" ml-2 link link-hover capitalize link-primary " to='/login'>login</Link></p>
      </Form>

    </section>
  )
}