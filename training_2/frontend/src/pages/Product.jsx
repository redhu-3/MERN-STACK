import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useEffect } from 'react'
// const products = [
//   { id: 1, name: "laptop", price: "300" },
//   { id: 2, name: "mouse", price: "100" },
//   { id: 3, name: "Mobile", price: "30" },
//   { id: 4, name: "Keyboard", price: "20" },
//   { id: 5, name: "charger", price: "10" },
// ]

const Product = () => {
  const [product,setProduct]=useState([]);
  

  useEffect(()=>
  {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProduct(data));
  },[])
  return (
    <div>
      <h1>Products</h1>

      {product.map((p) => (
        <div key={p.id}>
          <h2>{p.tittle}</h2>
          <h3>{p.price}</h3>
          <Link to={`/products/${p.id}`}>View Details</Link>
        </div>
      ))}

    </div>
  )
}

export default Product
