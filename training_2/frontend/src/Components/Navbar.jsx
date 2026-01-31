import React from 'react'
import { Link } from 'react-router-dom'
//import './Navbar.css'
const Navbar = () => {
  return (
    <div className="bg-amber-300" py-4 px-4 flex justify-between >
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/services">Service </Link>
      
    </div>
  )
}

export default Navbar