import { toast } from "react-toastify";
import { SectionTitle } from "../components";
import { useCartGlobalContext } from "../context/cartContext";
import {Link} from 'react-router-dom'

import { useState } from "react";
import { Helmet } from 'react-helmet-async';


export default function Cart() {
  
  const [Loading1, setLoading1] = useState(false)
  const [Loading2, setLoading2] = useState(false)
  const [Loading3, setLoading3] = useState(false)


  
  const [Productid, setProductid] = useState(0)  


  const { allProducts,TotalCartPrice,UpdateCartCount,DeleteProduct ,GetUserCart,CartID,ClearCart} = useCartGlobalContext()


  
  
  const clearCart = async() => {
    setLoading1(true)
    const res = await ClearCart()
    if(res){
      setLoading1(false)
      toast.success("Your cart has been cleared")
    }else{
      toast.error("some error for clearing your cart")
      setLoading1(false)
    }
  }
  

  

  const handleUpdateProduct = async(id,newcount) => {
    setProductid(id)
    setLoading2(true)
    const res = await UpdateCartCount(id,newcount)
    if (res) {
      setLoading2(false)
    }else{
      toast.error("can not update product")
    }
  }
  
  const HandleDeleteProduct = async(id) => {
    setProductid(id)
    setLoading3(true)

  const res = await DeleteProduct(id)

    if(res){
      setLoading3(false)
      toast.success('Product deleted successfully')
    }else{
      setLoading3(false)
      toast.error('Product not deleted')
    }
  }

  if(allProducts?.length < 1 ){
    
    return <section className="flex items-center justify-center ">
      <h2 className=" text-primary font-bold capitalize text-4xl"> no products in cart </h2>
    </section>
  }

  
  return (
    <section>
        <Helmet>
        <title>Cart</title>
        </Helmet>
      
      <SectionTitle text=' shopping cart'/>

      <div className="py-24 relative">
        <div className=" flex justify-end mb-12"> 
          <button onClick={clearCart} className=" btn btn-primary">
          { Loading1 ? <span className=" loading loading-spinner"></span>:  "ClearCart"}
              
          
            </button>
        </div>
  <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">  

    {allProducts?.map((productParent)=>{
      const {count , price , product , }= productParent
      
    

      const { id , imageCover, title, } = product


          if(count === 0 ){
            DeleteProduct(id)
          }

      return <div key={id} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
      <div className="col-span-12 lg:col-span-2 img box">
        <img
          src={imageCover}
          alt="speaker image"
          className="max-lg:w-full lg:w-[180px] rounded-lg"
        />
      </div>
      <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
        <div className="flex items-center justify-between w-full mb-4">
          <h5 className="font-manrope font-bold text-2xl leading-9 text-primary">
            {title}
          </h5>
          <button  onClick={()=>HandleDeleteProduct(id)} className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
          { Productid==id && Loading3 ? <span className=" loading loading-spinner"></span> :<svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                cx={17}
                cy={17}
                r={17}
                fill=""
              />
              <path
                className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                stroke="#EF4444"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>}
            
          </button>
        </div>
      
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={()=>handleUpdateProduct(id,count -1)} className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
            
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                width={18}
                height={19}
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 9.5H13.5"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              type="text"
              id="number"
              className="border  border-gray-200 rounded-full w-12 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
              placeholder={count}
            />
            <button onClick={()=>handleUpdateProduct(id,count +1)} className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                width={18}
                height={19}
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 9.5H14.25M9 14.75V4.25"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <h6 className="font-manrope font-bold text-2xl leading-9 text-right text-primary">
            {`$${price}`}
          </h6>
          
        </div>
        <div className="  ml-16 mt-10 ">
        { Productid===id && Loading2 && <span className="loading loading-spinner loading-lg"></span>}
        </div>
      </div>

      
    </div>


    })}
  
    <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
      <h5 className="text-primary font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
        Subtotal
      </h5>
      <div className="flex items-center justify-between gap-5 ">
        
        <h6 className="font-manrope font-bold text-3xl lead-10 text-secondary">
          {`$${TotalCartPrice}`}
        </h6>
      </div>
    </div>
    <div className="max-lg:max-w-lg max-lg:mx-auto">
    <Link to={`/payment/${CartID}`} className="rounded-full block my-12 py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">
        Online
      </Link>
    <Link to={`/cashorder/${CartID}`} className="rounded-full block my-12 py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">
        Cash
      </Link>
    
    </div>
  </div>
</div>


    </section>
  )
}