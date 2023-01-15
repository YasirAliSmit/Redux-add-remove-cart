import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const item = useSelector((state)=>state.cart)
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
     <span>Redux Store</span>
      <div>

      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart</Link>

      </div>
      <span>Cart Item : {item.length}</span>
    </div>
  )
}
