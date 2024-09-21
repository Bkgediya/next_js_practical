import Product from '../../components/Product';
import React from 'react'

async function generateStaticParams () {
  const response = await fetch('https://dummyjson.com/products?limit=5&skip=10&select=title,price');
  const data =await response.json()
  return data.products.map((product) => ({
    id: product.id.toString()
  }))
}

async function getProductById(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json()
  return data
}


const page = async ({params}) => {
  const product = await getProductById(params.id)
  console.log("product by id",product)
  return (
    <Product title={product.title} price={product.price}/>
  )
}

export default page