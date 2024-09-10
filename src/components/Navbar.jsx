import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { Navlinks } from '../components'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useEffect, useState } from "react";

import { userGlobal } from "../context/userContext";
import { useCartGlobalContext } from "../context/cartContext";

const themes = {
  winter:'winter',
  dracula : 'dracula',
}

const getThemeLocalStorage = () => {
  return localStorage.getItem('theme') || themes.winter
  
}

export default function Navbar() {

  const navigate = useNavigate()
  const { User} = userGlobal()
  const {NumberofCartitems } = useCartGlobalContext()
  


   const [theme,setTheme]=useState(getThemeLocalStorage())

   const handleTheme = () => {
     const{winter,dracula}= themes
     const newTheme = theme===winter? dracula : winter
     setTheme(newTheme)
   }

   useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem('theme',theme)
   },[theme])

   function Logout(){

    localStorage.removeItem("token")
    localStorage.removeItem("name")

    navigate('/login')
   }
   
  return (
    <nav className="bg-base-200">
        <div className=" navbar align-element">
          {/* start */}
          <div className=" navbar-start">
            {/* title */}
            <NavLink to='/' className='hidden lg:flex btn btn-primary text-2xl items-center' > FreshCart</NavLink>
            {/* Drobdown */}
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden" >
                  <FaBarsStaggered className=" h-6 w-6"/>
                </label>
                {User && <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-53">
                    <Navlinks/>
                
                </ul>}
              </div>
          </div>
          {/* center */}
          <div className="navbar-center hidden lg:flex">
            {User && <ul className=" menu menu-horizontal">
            <Navlinks/>
            </ul>}
          </div>
          {/* end */}
          <div className="navbar-end">
            {/* theme setup */}
            <label className=" swap swap-rotate">
              <input onChange={handleTheme} type="checkbox"  />
              {/* sun */}
              <BsSunFill className=" swap-on h-4 w-4"/>
              {/* moon */}
              <BsMoonFill className=" swap-off h-4 w-4"/>
            </label>
            {/* cart */}
            {User && <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
              <div className=" indicator">
                <BsCart3 className="h-6 w-6"/>
                <span className=" badge badge-sm badge-primary indicator-item">
                    {NumberofCartitems}
                </span>

              </div>
            </NavLink>}
            
            <button onClick={Logout} className="btn btn-secondary ml-5">
            
               Logout</button>
          </div>
        </div>
    </nav>
  )
}