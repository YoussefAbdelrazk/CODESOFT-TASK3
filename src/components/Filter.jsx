import { Form,useLoaderData,Link } from 'react-router-dom'
import FormSelect from './FormSelect'
import { customFetch } from '../utils'
import { useEffect, useState } from 'react'

const url = '/api/v1/categories'



export default function Filter() {
  const {params}= useLoaderData()
  // console.log(params)
  const{category}=params

  const Getcategory = async() => {
    const {data} = await customFetch.get(url)
  
    const products = data.data 
    setCategories(products)
    
  }
  const[categories,setCategories]= useState([])
  useEffect(()=>{
    Getcategory()
  },[])

  const names = categories.map((cat)=>cat.name)

  
  return (
    <Form className='bg-base-200 rounded-md px-6 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2  items-center'>
        {/* search */}
        {/* categories */}
        <FormSelect label='select category' size='select-sm' name='category' list={names} defaultValue={category} />
        {/* <FormSelect label='sort by ' size='select-sm' name='order' list={['all','z-a']} /> */}
        {/* buttons */}
        <button type='submit' className='btn btn-primary btn-sm'>
          search
        </button>
        <Link to='/products' className='btn btn-accent btn-sm'> Rest</Link>
    </Form>
  )
}