import { createContext, useContext, useState } from "react";


const UserContext = createContext()


export const UserProvider = ({children}) => {

  const [User,setUser] = useState(localStorage.getItem("token") || null)

  const [name,setName] = useState(localStorage.getItem("name")|| null)

  

return  <UserContext.Provider value={{User,name,setName,setUser}}>
    {children}
  </UserContext.Provider>
}


export const userGlobal = () => {
  return useContext(UserContext)
}

