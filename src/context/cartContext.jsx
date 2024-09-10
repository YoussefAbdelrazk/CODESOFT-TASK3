import { createContext, useContext, useState,useEffect } from "react";
import { customFetch } from "../utils";


const CartContext = createContext()

 export const CartProvider = ({children}) => {
  const [allProducts, setAllProducts] = useState(null)
  const [NumberofCartitems, setNumberofCartitems] = useState(0)
  const [TotalCartPrice, setTotalCartPrice] = useState(0)
  const [CartID, setCartID] = useState(0)



  const Updateui = () => {
    setAllProducts([])
    setNumberofCartitems(0)
    setTotalCartPrice(0)

  }
  

  const AddProduct = async(productId) => {
    
    let {data} = await customFetch.post('/api/v1/cart',{productId},{
      headers: {
        token : localStorage.getItem('token'),
      }
    })

    GetUserCart()

    return data
  }

  const GetUserCart = async() => {
    try{
        const{data}= await customFetch.get('/api/v1/cart',{
      headers:{
        token : localStorage.getItem('token')
      }
    })
  
    setNumberofCartitems(data.numOfCartItems)
    setAllProducts(data.data.products)
    setTotalCartPrice(data.data.totalCartPrice)
    setCartID(data.data._id)
    console.log(data)
    }catch{
      setAllProducts([])
    }
  

  }
  const UpdateCartCount = async(productId ,newCount ) => {
    const {data} = await customFetch.put(`/api/v1/cart/${productId}`,{count : newCount},{
      headers:{
        token :localStorage.getItem('token')
      }
    })
    setNumberofCartitems(data.numOfCartItems)
    setAllProducts(data.data.products)
    setTotalCartPrice(data.data.totalCartPrice)
    return data
  }

  const DeleteProduct = async(productID) => {
    const {data} = await customFetch.delete(`/api/v1/cart/${productID}`,{
      headers : {
        token : localStorage.getItem('token')
      }
    })
    setNumberofCartitems(data.numOfCartItems)
    setAllProducts(data.data.products)
    setTotalCartPrice(data.data.totalCartPrice)

    return data
  }
  

  const ClearCart = async() => {
    try{
      const {data} = await customFetch.delete(`/api/v1/cart`,{
        headers :{
          token : localStorage.getItem('token')
        }
      })  
      setNumberofCartitems(0)
      setAllProducts([])
      setTotalCartPrice(0)
      return data
        
    }catch(e){
      console.log(e)
    }
  

  }
  
  

  useEffect(() => {
    GetUserCart()
    
  }, [])
  
  

  
  

  return <CartContext.Provider value={{AddProduct,GetUserCart,allProducts,NumberofCartitems,TotalCartPrice,UpdateCartCount,DeleteProduct,CartID,ClearCart,Updateui}}>
    {children}
  </CartContext.Provider>
}

  export const useCartGlobalContext = () => {
    return useContext(CartContext)
  }
  
