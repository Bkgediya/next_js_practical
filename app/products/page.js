import React from 'react'
import Product from '../components/Product';
import ProductButton from '../components/ProductButton';
async function getProducts() {
    const response = await fetch('https://dummyjson.com/products?limit=5&skip=10&select=title,price');
    const data = response.json()
    return data
}

const Products = async () => {
   const response = await getProducts();
  return (
    <div>
        <h1 className='mb-4 ms-4 font-bold'>Products</h1>
      {
        response.products?.length  && response.products.map((product) => (
        <div className='mb-4 ms-4' key={product.id}>
          <Product title={product.title} price={product.price}/>
          <ProductButton id={product.id}/>
        </div>
        ))
      }
    </div>
  )
}

export default Products