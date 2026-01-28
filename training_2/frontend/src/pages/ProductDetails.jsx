import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  if (!product) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Name: {product.title}</h2>
      <h2>Price: {product.price}</h2>
      <h2>Description: {product.description}</h2>
    </div>
  )
}

export default ProductDetails
