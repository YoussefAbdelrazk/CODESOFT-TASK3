import { useLoaderData } from "react-router-dom";
import { customFetch, generateAmount } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useCartGlobalContext } from "../context/cartContext";
import { toast } from "react-toastify";
import { useWishList } from "../context/wishListContext";
const url = "/api/v1/products";
export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await customFetch.get(`${url}/${id}`);
  const product = data.data;
  return { product };
};

export default function SingleProduct() {
  const [Loading1, setLoading1] = useState(false)
  const [Loading2, setLoading2] = useState(false)
  const [productid, setProductid] = useState(0)
  const { AddProduct } = useCartGlobalContext();
  const {AddWishlist} = useWishList()




  const { product } = useLoaderData();


  const { id, title, imageCover, price, description, category, images ,ratingsAverage} =
    product;

  const handAddProduct = async (id) => {
    setProductid(id)
    setLoading1(true)
    let response = await AddProduct(id);

    if (response) {
      setLoading1(false)
      toast.success(response.message);
    } else {
      toast.error("can not add product ");
    }
  };

  const handleAddWishlist = async(id) => {
    setLoading2(true)
    let response = await AddWishlist(id)
      if(response) {
        setLoading2(false)
        toast.success(response.message);
      }else{
        toast.error("can not add wishlist ");
      }
    console.log(response)
  }
  

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </div>
      {/* product */}
      <div className=" mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* images Slider */}

        <div className=" carousel h-[28rem] carousel-center p-4 space-x-4 bg-neutral rounded-box">
          {images.map((image) => {
            return (
              <div key={image} className=" carousel-item">
                <img
                  className=" w-96  object-cover rounded-box lg:w-full "
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        {/* product Details */}
        <div>
          <h1 className="text-3xl font-bold capitalize"> {title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {category.name}
          </h4>
          <p className="mt-3 text-xl">{price} EG</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="flex items-center my-5 ">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {ratingsAverage}
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div>
          <div className="form-control w-full max-w-xs">
            {/* <label className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              value={amount}
              onChange={handleAmount}
            >
              {generateAmount(10)}
            </select> */}

            <>
              {/* Input Number */}
              {/* <div
    className="py-3 my-6 px-3 rounded-lg bg-neutral-700"
    data-hs-input-number=""
  >
    <div className="w-full flex justify-between items-center gap-x-5">
      <div className="grow">
        <input
          className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
          style={{ MozAppearance: "textfield" }}
          type="number"
          aria-roledescription="Number field"
          defaultValue={1}
          data-hs-input-number-input=""
        />
      </div>
      <div className="flex justify-end items-center gap-x-1.5">
        <button
          type="button"
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          tabIndex={-1}
          aria-label="Decrease"
          data-hs-input-number-decrement=""
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        </button>
        <button
          type="button"
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          tabIndex={-1}
          aria-label="Increase"
          data-hs-input-number-increment=""
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      </div>
    </div>
  </div> */}
              {/* End Input Number */}
            </>
          </div>
          <div className="mt-10 flex space-x-10 ">
            <button
              onClick={() => handAddProduct(id)}
              className="btn btn-secondary btn-md"
            >
              { Loading1 && <span className=" loading loading-spinner"></span>}
              Add to Cart
            </button>
            <button
              onClick={() => handleAddWishlist(id)}
              className="btn btn-primary btn-md"
            >
                  { Loading2 && <span className=" loading loading-spinner"></span>}
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
