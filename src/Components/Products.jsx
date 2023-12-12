import React from 'react'
import '../App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Product from './Product'

function Products() {

const getProduct = async() => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;

}

  const {isLoading , error , data} =  useQuery({
        queryKey : ['products'],
        queryFn: getProduct,
        staleTime: 10000,
    })

    if(isLoading){
        <h1>Loading ...</h1>
    }

     if(error){
        <h1>Error : {error}</h1>
    }

  return (
    <div className='products w-screen flex justify-center items-center flex-wrap py-16 border-2 border-solid border-black'>
    {data ? data.map(product => {
        return <Product product={product} key={product.id}/>
    }) : null}
    </div>
  )
}

export default Products
