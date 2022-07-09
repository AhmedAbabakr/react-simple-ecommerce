import React from "react";
import { Link} from "react-router-dom";
export default function CartItem(props){
    const {item}= props;
    const {product}= item;
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
                <p className="card-text">
                    price : {product.price}
                    <br></br>    
                    Quantity : {item.quantity}
                    <br></br>
                    Total : {product.price*item.quantity}
                </p>
                
                <a className="btn btn-danger" href="#"><i className="fa fa-trash"></i> Delete</a>
            </div>
        </div>
    );
}