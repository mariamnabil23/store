import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";


function ProductDetails(){
const params = useParams();
const api = "https://fakestoreapi.com/products";
const[product , setProduct] = useState({});
useEffect( ()=>{
    fetch(`${api}/${params.productId}`)
    .then((res)=>res.json())
    .then((product)=>setProduct(product))
},[])

    return(
        <Product pro={product} showbtn={false} />
    )
}

export default ProductDetails;