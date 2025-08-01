import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'



const ProductCard = () => {
  return (
    <div>
      <h2>Product Title</h2>
      <p>Product Description</p>
      <span>Price: $XX.XX</span>
      <AddToCart />
    </div>
  )
}

export default ProductCard