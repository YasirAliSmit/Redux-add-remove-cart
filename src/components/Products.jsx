import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
export const Products = () => {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const getData = await res.json();
      console.log(getData);
      setProduct(getData);
    };
    getProduct();
  }, []);
  function handleadd(product){
    dispatch(add(product))
  }
  return (
    <div>
      <h1>Products</h1>
      {products.map((product)  => (
        <div style={{display:'flex ',justifyContent:'center'}}>
          <div>
            <img style={{height:'400px'}} src={product.image} />
            <h2>{product.title}</h2>
            <h2>${product.price}</h2>
            <button onClick={()=>handleadd(product)}>Click</button>
          </div>
        </div>
      ))}
    </div>
  );
};
