import { ProductsGrid, SectionTitle } from '../components'




export default function FeaturedProducts() {
  return (
    <div className='pt-24'>
      <SectionTitle text='featured Products'/>
      <ProductsGrid/>
    </div>
  )
}