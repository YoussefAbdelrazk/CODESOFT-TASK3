
import { Form, Link, useNavigate, useParams } from "react-router-dom";
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


export default function CashOrder() {
  const navigate = useNavigate()
  const{Updateui} = useCartGlobalContext()
  
  const { id } = useParams();


  const [loading, setloading] = useState(false);

  let validate = Yup.object().shape({
    phone: Yup.string().required("phone is invalid"),
    details: Yup.string().required("details is invalid"),
    city: Yup.string().required("city is invalid"),
  });

  function Shipping(values) {
    setloading(true);
    customFetch
      .post(
        `/api/v1/orders/${id}`,
        { shippingAddress: values },
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((response) => {
          setloading(false);
        Updateui()
        toast.success("orders added successfully")
        navigate('/products')
        
        
      
        
        
      })
      .catch((err) => {
        toast.error("can not order this products")
        console.log(err)
        setloading(false);

      });
  }

  const { values, touched, handleChange, handleSubmit, handleBlur, errors } =
    useFormik({
      initialValues: {
        city: "",
        phone: "",
        details: "",
      },
      onSubmit: Shipping,
      validationSchema: validate,
    });

  return (
    <section className=" grid  place-items-center">
      <Helmet>
        <title>CashOrder</title>
      </Helmet>
      <Form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col p-8 gap-y-4 card w-96 bg-base-100 shadow-lg"
      >
        <h4 className=" text-center font-bold text-3xl"> Shipping</h4>

        <FormInput
          type="text"
          name="city"
          label="city"
          value={values.city}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />
          {errors.city && touched.city && (
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
            <span>{errors.city}</span>
          </div>
        )}

        <FormInput
          type="tel"
          name="phone"
          label="Phone"
          value={values.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />
          {errors.phone && touched.phone && (
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
            <span>{errors.phone}</span>
          </div>
        )}

        <FormInput
          type="text"
          name="details"
          label="Details"
          value={values.details}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />
          {errors.details && touched.details && (
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
            <span>{errors.details}</span>
          </div>
        )}

        <div className="mt-5">
          <SubmitBtn isloading={loading} text="Checkout" />
        </div>
      </Form>
    </section>
  );
}