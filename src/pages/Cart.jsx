import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { remove } from '../Store/cartSlice'
export default function Cart() {
 const product = useSelector(state=>state.cart)
 const dispatch = useDispatch()
 const handleRemove=(productId)=> {
 dispatch(remove(productId)) 
 }
  return (
    <div>
<h2>Cart</h2>
{
  product.map((product)=>(
    <div>
      <img src={product.image}/>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <button onClick={()=>handleRemove(product.id)}>Remove</button>
      </div>
  ))
}
    </div>
  )
}
