import { useLoaderData } from "react-router-dom"
import { customFetch } from "../utils"
import { SectionTitle } from "../components"
import { Helmet } from 'react-helmet-async';

export const loader = async ()=>{
  const {data} = await customFetch.get('/api/v1/categories')
  
  return{categories:data.data}
}

export default function Categories() {

  const {categories} = useLoaderData()

  return (
    <section>
        <Helmet>
        <title>Categories</title>
      </Helmet>
      <SectionTitle text='categories'/>
      <div className="grid pt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cate)=>{
          const { name,image} = cate;
        return <div key={name} className=" card w-full shadow-xl hover:shadow-2xl transition duration-300 relative ">
            <img className="rounded-xl h-64 md:h-48 w-full object-cover" src={image} alt="" />
            <div className="  absolute flex items-center justify-center h-full w-full bg-black/80 rounded-xl text-primary font-bold text-2xl opacity-0 hover:opacity-90 duration-500"> {name}</div>
          </div>
        })}
      </div>
    </section>
  )
}