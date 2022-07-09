import React from "react";
import { Link} from "react-router-dom";
export default function ProductItem(props){
    let product= props.product;
    const mystyle = {
        width: "100%",
        height: "15vw",
        objectFit: "cover"
      };
    return (
        <div className="card" >
            <img src={product.image} className="card-img-top" alt="..."  style={mystyle}/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">price : {product.price}</p>
                
                <Link className="btn btn-primary" to={"/products/"+product.id}>Details</Link>
            </div>
        </div>
    );
}