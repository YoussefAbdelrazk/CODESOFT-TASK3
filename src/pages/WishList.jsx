import { toast } from "react-toastify";
import { Loading, SectionTitle } from "../components";
import { useCartGlobalContext } from "../context/cartContext";
import { useWishList } from "../context/wishListContext";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Helmet } from 'react-helmet-async';

export const loader = async()=>{
  const {data} = await customFetch.get('/api/v1/wishlist',{
    headers :{
      token : localStorage.getItem('token'),
    }
  })
  return{ products : data.data}
}
export default function WishList() {
  const [Loading1, setLoading1] = useState(false)
  const [Loading2, setLoading2] = useState(false)
  const [ProductID, setProductID] = useState(0)

  const {Allproducts,DeleteProductWishlist} = useWishList()
  const { AddProduct } = useCartGlobalContext();
  const {products} = useLoaderData()
  
  const handAddProduct = async (id) => {
    
    setLoading1(true)
    let response = await AddProduct(id);

    if (response) {
      setLoading1(false)
      toast.success(response.message);
    } else {
      toast.error("can not add product ");
    }
  };

  const handleDeletproduct = async(id) => {
    setProductID(id)
    setLoading2(true)

    const response = await DeleteProductWishlist(id)
    
    if (response) {
      setLoading2(false)
      toast.success(response.message);
    } else {
      toast.error("can not delete product ");
    }
  }
  


  return (
    <section>
        <Helmet>
        <title>WishList</title>
      </Helmet>

      <SectionTitle text='Fav Products' />
      <div className="grid pt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Allproducts?.map((product)=>{
          const { id , imageCover , price , title , ratingsAverage ,images } =product
          
          return   <div
          key={id}
          
          className="card w-full shadow-xl hover:shadow-2xl transition duration-300 relative"
        >
          <figure className="px-4 pt-4">
            <img
              src={imageCover}
              alt={title}
              className="rounded-xl h-64 md:h-48 w-full object-contain "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" card-title tracking-wider capitalize">
              {" "}
              {title}
            </h2>
            <span className="text-secondary">{`$${price}`}</span>
            <div className="flex items-center ">
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
            <div className="mt-5 flex items-center space-x-8">
              <button  onClick={()=>handAddProduct(id)} className=" btn btn-primary">
                {  Loading1 && <span className=" loading loading-spinner"></span>}
                Add to Cart</button>
              <button  onClick={()=>handleDeletproduct(id)} className=" btn btn-circle hover:bg-red-600 duration-500">
              { ProductID == id &&  Loading2 ? <span className=" loading loading-spinner"></span> :<MdDelete/>}
                </button>
            </div>
          </div>
          
        </div>
        })}

      </div>
    </section>
  )
}