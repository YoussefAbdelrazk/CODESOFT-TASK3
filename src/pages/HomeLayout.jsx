import { Outlet, useNavigation } from "react-router-dom";
import { Header,Loading,Navbar } from "../components";
import { userGlobal } from "../context/userContext";

export default function HomeLayout() {
  const navigation = useNavigation()
  const ispageLoading = navigation.state === 'loading'
  const {User}= userGlobal()
  return (
    <div>
      <Header/>
      
      <Navbar/>
      {ispageLoading ? <Loading/>:  <section className="align-element py-20">
      <Outlet/>
      </section>}
    
      
    </div>
  )
}