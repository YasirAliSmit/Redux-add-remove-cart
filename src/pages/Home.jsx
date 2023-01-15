import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Products } from '../components/Products'
export default function Home() {
 
  return (
    <div>
      <h1>Welcome to Redux Toolkit</h1>
      <section>
        <h3>Products  </h3>
        <Products/>
      </section>
    </div>
  )
}
