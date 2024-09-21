'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductButton = ({id}) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`products/${id}`)
  }
  return (
    <button onClick={handleClick}   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
      Go to product
    </button>
  )
}

export default ProductButton