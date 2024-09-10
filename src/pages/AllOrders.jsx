import { useEffect } from "react";
import { SectionTitle } from "../components";
import { useCartGlobalContext } from "../context/cartContext";
import { customFetch } from "../utils";




export default function AllOrders() {
  
  const{CartID} = useCartGlobalContext()
  const url = `/api/v1/orders/user/641fb49f534619aba3778695`
  const GetuserOrders = async() => {
    const {data} = await customFetch.get(url)
    console.log(data)
    return data
  }
  useEffect(()=>{
    GetuserOrders()
  },[])
  
  return (
    <section>

        <SectionTitle text={'All Orders'} />

        <div className=" text-center my-12 font-bold text-3xl text-primary"> We Working on this page  </div>

  
  {/* <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

    
    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
      <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
        <div className="flex flex-col justify-start items-start bg-neutral  px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
          <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
            Customer’s Cart
          </p>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
            <div className="pb-4 md:pb-8 w-full md:w-40">
              <img
                className="w-full hidden md:block"
                src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                alt="dress"
              />
              <img
                className="w-full md:hidden"
                src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                alt="dress"
              />
            </div>
            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
              <div className="w-full flex flex-col justify-start items-start space-y-8">
                <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                  Premium Quaility Dress
                </h3>
                <div className="flex justify-start items-start flex-col space-y-2">
                  <p className="text-sm dark:text-white leading-none text-gray-800">
                    <span className="dark:text-gray-400 text-gray-300">
                      Style:{" "}
                    </span>{" "}
                    Italic Minimal Design
                  </p>
                  <p className="text-sm dark:text-white leading-none text-gray-800">
                    <span className="dark:text-gray-400 text-gray-300">
                      Size:{" "}
                    </span>{" "}
                    Small
                  </p>
                  <p className="text-sm dark:text-white leading-none text-gray-800">
                    <span className="dark:text-gray-400 text-gray-300">
                      Color:{" "}
                    </span>{" "}
                    Light Blue
                  </p>
                </div>
              </div>
              <div className="flex justify-between space-x-8 items-start w-full">
                <p className="text-base dark:text-white xl:text-lg leading-6">
                  $36.00{" "}
                  <span className="text-red-300 line-through"> $45.00</span>
                </p>
                <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                  01
                </p>
                <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                  $36.00
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
            <div className="w-full md:w-40">
              <img
                className="w-full hidden md:block"
                src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
                alt="dress"
              />
              <img
                className="w-full md:hidden"
                src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
                alt="dress"
              />
            </div>
            <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-full flex flex-col justify-start items-start space-y-8">
                <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                  High Quaility Italic Dress
                </h3>
                <div className="flex justify-start items-start flex-col space-y-2">
                  <p className="text-sm dark:text-white leading-none text-gray-800">
                    <span className="dark:text-gray-400 text-gray-300">
                      Style:{" "}
                    </span>{" "}
                    Italic Minimal Design
                  </p>
                  <p className="text-sm dark:text-white leading-none text-gray-800">
                    <span className="dark:text-gray-400 text-gray-300">
                      Size:{" "}
                    </span>{" "}
                    Small
                  </p>
                  <p className="text-sm dark:text-white leading-none text-gray-800">
                    <span className="dark:text-gray-400 text-gray-300">
                      Color:{" "}
                    </span>{" "}
                    Light Blue
                  </p>
                </div>
              </div>
              <div className="flex justify-between space-x-8 items-start w-full">
                <p className="text-base dark:text-white xl:text-lg leading-6">
                  $20.00{" "}
                  <span className="text-red-300 line-through"> $30.00</span>
                </p>
                <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                  01
                </p>
                <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                  $20.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
          <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
              Summary
            </h3>
            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
              <div className="flex justify-between w-full">
                <p className="text-base dark:text-white leading-4 text-gray-800">
                  Subtotal
                </p>
                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                  $56.00
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base dark:text-white leading-4 text-gray-800">
                  Discount{" "}
                  <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                    STUDENT
                  </span>
                </p>
                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                  -$28.00 (50%)
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base dark:text-white leading-4 text-gray-800">
                  Shipping
                </p>
                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                  $8.00
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                Total
              </p>
              <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                $36.00
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
              Shipping
            </h3>
            <div className="flex justify-between items-start w-full">
              <div className="flex justify-center items-center space-x-4">
                <div className="w-8 h-8">
                  <img
                    className="w-full h-full"
                    alt="logo"
                    src="https://i.ibb.co/L8KSdNQ/image-3.png"
                  />
                </div>
                <div className="flex flex-col justify-start items-center">
                  <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                    DPD Delivery
                    <br />
                    <span className="font-normal">Delivery with 24 Hours</span>
                  </p>
                </div>
              </div>
              <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
                $8.00
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                View Carrier Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
          Customer
        </h3>
        <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
          <div className="flex flex-col justify-start items-start flex-shrink-0">
            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
              <img
                src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                alt="avatar"
              />
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                  David Kent
                </p>
                <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                  10 Previous Orders
                </p>
              </div>
            </div>
            <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="cursor-pointer text-sm leading-5 ">
                david89@gmail.com
              </p>
            </div>
          </div>
          <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
              <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                  Shipping Address
                </p>
                <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                  180 North King Street, Northhampton MA 1060
                </p>
              </div>
              <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                  Billing Address
                </p>
                <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                  180 North King Street, Northhampton MA 1060
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
              <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}

  
<section className="py-24 relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
    <div className="flex items-start flex-col gap-6 xl:flex-row ">
      <div className="w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
        <div className="p-6 border border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 ">
          <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
            Order Summary
          </h2>
          <div className="data py-6 border-b border-gray-200">
            <div className="flex items-center justify-between gap-4 mb-5">
              <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                Product Cost
              </p>
              <p className="font-medium text-lg leading-8 text-gray-900">
                $360.00
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                Shipping
              </p>
              <p className="font-medium text-lg leading-8 text-gray-600">
                $40.00
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 ">
              <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
                Coupon Code
              </p>
              <p className="font-medium text-lg leading-8 text-emerald-500">
                #APPLIED
              </p>
            </div>
          </div>
          <div className="total flex items-center justify-between pt-6">
            <p className="font-normal text-xl leading-8 text-black ">
              Subtotal
            </p>
            <h5 className="font-manrope font-bold text-2xl leading-9 text-indigo-600">
              $400.00
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm md:max-w-3xl max-xl:mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="rounded-3xl p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
            <div className="img-box ">
              <img
                src="https://pagedone.io/asset/uploads/1701167635.png"
                alt="Denim Jacket image"
                className="w-full md:max-w-[122px] rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
              <div className="">
                <h2 className="font-medium text-xl leading-8 text-black mb-3">
                  Dark Denim Jacket
                </h2>
                <p className="font-normal text-lg leading-8 text-gray-500 ">
                  By: Dust Studios
                </p>
              </div>
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_14099_1497)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14099_1497">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_14099_1497)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14099_1497">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_14099_1497)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14099_1497">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_14099_1497)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14099_1497">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_14099_1497)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14099_1497">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h6 className="font-medium text-xl leading-8 text-indigo-600">
                  $120.00
                </h6>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</section>



    </section>
  )
}