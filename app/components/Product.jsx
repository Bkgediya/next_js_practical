import React from 'react'

const Product = ({title,price}) => {
  return (
    <div className='border border-gray-500 rounded-lg text-gray-800 font-bold py-2 px-4 m-1'>
      <p>title : {title}</p>
      <span>price : {price}</span>
    </div>
  )
}

export default Product