import { useState } from "react";

let Product = ()=>{
    let [product,setProduct]=useState({p_Name:"Noice Colorfit",price:999,qty:1})
    let incrHandler = ()=>{
        setProduct({...product,qty:product.qty+1})
    }
    let decrHandler=()=>{
        setProduct({...product,qty:product.qty-1})
    }
    return <div>
            <h4>Product component </h4>
            <pre>{JSON.stringify(product)}</pre>
            <h3>Product Name:{product.p_Name}</h3>
            <h3>Price:{product.price}</h3>
            <button onClick={decrHandler}>-</button>{product.qty}<button onClick={incrHandler}>+</button>
            <h3>Total : {product.price * product.qty}</h3>
            </div>
}
export default Product;