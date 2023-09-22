import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
    <NavLink className="mr-5 hover:text-gray-900" to="/">Home</NavLink>
    <NavLink className="mr-5 hover:text-gray-900" to="/about">About Us</NavLink>
    <NavLink className="mr-5 hover:text-gray-900" to="/product">Our Shop</NavLink>
    <NavLink className="mr-5 hover:text-gray-900" to="/contact">Contact Us</NavLink>
    </div>
  )
}

export default Navigation
