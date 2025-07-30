import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (
    <>
      <h2>Product Title</h2>
      <p>Product Description</p>
      <span>Price: $XX.XX</span>
      <AddToCart />
    </>
  )
}

export default ProductCard