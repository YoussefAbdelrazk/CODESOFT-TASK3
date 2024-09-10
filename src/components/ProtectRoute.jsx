import { Navigate } from "react-router-dom"
import { userGlobal } from "../context/userContext"

export default function ProtectRoute({children}) {

  // const {User}=userGlobal()
  
  if(localStorage.getItem('token')=== null){
    return<Navigate to='/login'/>
  }
  return (
    <>
    {children}</>
  )
}