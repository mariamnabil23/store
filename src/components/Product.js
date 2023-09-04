import { Link } from "react-router-dom";


function Product(props){
    // console.log(props);
    const {pro , showbtn} = props;
    return(
        <>
        <div className="card">
            <img src={pro.image} className="card-img-top" alt={pro.title}/>
            <div className="card-body">
                <h5 className="card-title">{pro.title}</h5>
                <p className="card-text">{pro.description}</p>
                {showbtn && <Link className="btn btn-primary" to={`/product/${pro.id}`}>Details</Link> }
            </div>
        </div>
        </>
    )
}

export default Product;