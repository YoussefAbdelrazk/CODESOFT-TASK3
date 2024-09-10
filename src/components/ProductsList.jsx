

import { Link, useLoaderData } from "react-router-dom"



export default function ProductsList() {
  const {products} = useLoaderData()
  return (
    <div className=" mt-12 grid gap-y-8 ">
    {
      products.map((product)=>{
        const{title ,imageCover,price,category}=product
        
        return <Link key={product.id} to={`/products/${product.id}`}  className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group">
          
              <img src={imageCover} alt={title} className="rounded-lg h-24 md:h-48 w-24 object-contain group-hover:scale-105 duration-300 " />
          
          <div className="ml-0 sm:ml-16">
              <h3 className=" text-lg tracking-wider capitalize"> {title}</h3>
              <h4 className=" capitalize text-md text-neutral-content">{category.name}</h4>
          </div>
          <p className="font-medium ml-0 sm:ml-auto text-lg">{price}</p>
        </Link>
      })
    }

</div>
  )
}