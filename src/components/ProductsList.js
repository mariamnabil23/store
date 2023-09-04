import { useEffect, useState } from "react";
import Product from "./Product";

function Products(){
const api_url = 'https://fakestoreapi.com/products';
const [products , setproducts] = useState([]);
useEffect( ()=>{
    fetch(api_url)
    .then( (res)=>res.json() )
    .then( (data)=>setproducts(data) )
},[])

    return(
        <>
        <h2 className="text-center p-5">our products</h2>
        <div className="container">
            <div className="row">
                {products.map( (pro)=>{
                    return(
                        <div className="col-3" key={pro.id}>
                            <Product pro={pro} showbtn={true} />
                        </div>
                    )
                })}
            </div>

        </div>
        </>
    )
}

export default Products;