


import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Landing,Cart,Login,Register,Products,SingleProduct,Error,HomeLayout,Categories,Brands,WishList ,Shipping,Forgetpassword,CodeVerify,ResetPassword,AllOrders,CashOrder} from './pages'
import { ErrorElement } from './components'
import { loader as Landingloader } from './pages/Landing'
import { loader as SingleLoader } from './pages/SingleProduct'
import {  loader as ProductsLoader} from './pages/Products'
import {  loader as CategoriesLoader} from './pages/Categories'
import {  loader as BrandsLoader} from './pages/Brands'
import {  loader as WishListLoader} from './pages/WishList'

import { UserProvider } from './context/userContext'
import ProtectRoute from './components/ProtectRoute'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {

  const router = createBrowserRouter([
    {path:'/',element: <ProtectRoute><HomeLayout/></ProtectRoute>  ,errorElement:<Error/>, children:[
       {index:true,element:<><Landing/></>,errorElement:<ErrorElement/>,loader:Landingloader},
       {path:'/allorders',element:<ProtectRoute><AllOrders/></ProtectRoute>},
       {path:'/cart',element:<ProtectRoute><Cart/></ProtectRoute>,errorElement:<ErrorElement/> ,},
       {path:'/payment/:id',element:<ProtectRoute><Shipping/></ProtectRoute>,errorElement:<ErrorElement/> ,},
       {path:'/cashorder/:id',element:<ProtectRoute><CashOrder/></ProtectRoute>,errorElement:<ErrorElement/> ,},
       {path:'/wishlist',element:<ProtectRoute><WishList/></ProtectRoute>,loader:WishListLoader},
       {path:'/products',element:<ProtectRoute><Products/></ProtectRoute>, errorElement:<ErrorElement/>,loader:ProductsLoader},
       {path:'/products/:id',element:<ProtectRoute><SingleProduct/></ProtectRoute>,loader:SingleLoader,errorElement:<ErrorElement/>},
      //  {path:'/orders',element:<Orders/>},
       {path:'/categories',element:<ProtectRoute><Categories/></ProtectRoute>,loader:CategoriesLoader},
       {path:'/brands',element:<ProtectRoute><Brands/></ProtectRoute> ,loader:BrandsLoader},
    ]},

    {path:'/login',element:<Login/> ,errorElement:<Error/>},
    {path:'/register',element:<Register/> ,errorElement:<Error/>},
    {path:'/forgetpassword',element:<Forgetpassword/> ,errorElement:<Error/>},
    {path:'/codeverify',element:<CodeVerify/> ,errorElement:<Error/>},
    {path:'/resetpassword',element:<ResetPassword/> ,errorElement:<Error/>},

  ])

      return( <>
      <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      <Helmet>
        <title>FreshCart</title>
      </Helmet>
      </HelmetProvider>
            
            </>
          )
    
}

export default App
