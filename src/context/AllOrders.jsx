import { createContext, useContext,useState,useEffect } from "react";
import { customFetch } from "../utils";
import { useCartGlobalContext } from "./cartContext";



const AllOrdersContext = createContext()


export const AllOrdersProvider = ({children}) => {
  const{CartID} = useCartGlobalContext()
  

  // const GetUserOrders = async(CartID) => {
  //   const {data} = await customFetch.get(`/api/v1/orders/user/${CartID}`)
  //   console.log(data)
  // }
  


  // useEffect(()=>{
  //   GetUserOrders(CartID)
  // },[])

  return <AllOrdersContext.Provider value={{}}>
    {children}
  </AllOrdersContext.Provider>
}


export const useAllOrders = () => {
  return useContext(AllOrdersContext)
}
