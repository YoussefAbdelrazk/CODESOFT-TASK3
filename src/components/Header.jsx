import { Link } from "react-router-dom";
import { userGlobal } from "../context/userContext";



export default function Header() {
  const{ name } = userGlobal()
  if(name == null) return;
  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className=" align-element flex justify-center sm:justify-end">
      

        {name ? <h3 className=" text-xl"> <span className=" text-primary">Hello , </span> {name}</h3>  : <div className=" flex gap-x-6 justify-center items-center ">
          <Link to='/login' className="link link-hover text-xs sm:text-sm" >Sign in / Guest</Link>
          <Link to='/register' className="link link-hover text-xs sm:text-sm" >Create Account</Link>
        </div>}
        {/* user */}
        {/* links */}

      
      
      </div>

    </header>
  )
}