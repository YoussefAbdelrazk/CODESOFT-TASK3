import { useLoaderData } from "react-router-dom";
import { SectionTitle } from "../components";
import { customFetch } from "../utils";
import { Helmet } from 'react-helmet-async';

    export const loader = async()=>{
      const {data} = await customFetch.get('/api/v1/brands')
      return {brands:data.data}
    }

export default function Brands() {
  const{brands} = useLoaderData()

  return (
    <section>
        <Helmet>
        <title>Brands</title>
      </Helmet>
      <SectionTitle text= 'Brands' />
      <div className="grid pt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          brands.map((brand)=>{
            const {image, name}= brand
            return <div key={name} className="card w-full shadow-xl hover:shadow-2xl transition duration-300 relative pb-10">
                <img className="rounded-xl h-64 md:h-48 w-full object-cover" src={image} alt="" />
            <div className=" flex items-center justify-center pt-10 font-bold text-xl  "> {name}</div>

            </div>
          })
        }

      </div>
    </section>
  )
}