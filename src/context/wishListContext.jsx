import { Children, createContext, useContext,useState,useEffect } from "react";
import { customFetch } from "../utils";


const WishlistContext = createContext()



 export const WishlistProvider = ({children}) => {
  const [Allproducts, setAllproducts] = useState(null)


  const AddWishlist = async(productId) => {
    const {data} = await customFetch.post('/api/v1/wishlist',{
      productId :productId
    },{
      headers :{
        token : localStorage.getItem('token'),
      }
    })
    Getwishlist()

    return data 
  }
  

  const Getwishlist = async() => {
    const {data} = await customFetch.get('/api/v1/wishlist',{
      headers :{
        token : localStorage.getItem('token'),
      }
    })
    setAllproducts(data.data)

    return data 
  }
  
  useEffect(() => {
    
  Getwishlist()
    
  }, [])
  

  const DeleteProductWishlist = async(ProductID) => {
    const {data} = await customFetch.delete(`/api/v1/wishlist/${ProductID}`,{
      headers :{
        token : localStorage.getItem('token'),
      }
    })
    Getwishlist()
    return data
  }
  
  

  return <WishlistContext.Provider value={{AddWishlist,Allproducts,DeleteProductWishlist}}>
    {children}
  </WishlistContext.Provider>
}



export const useWishList = () => {
  return useContext(WishlistContext)
}
