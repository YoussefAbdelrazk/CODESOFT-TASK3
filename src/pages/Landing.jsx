
import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils';

// const url = '/products?featured=true';
const url2 = '/api/v1/products?limit=3';
export const loader = async ()=>{
  const response = await customFetch.get(url2)
  const products = response.data.data

  return {products}
}
export default function Landing() {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}