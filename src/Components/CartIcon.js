import React, { useContext } from "react";
import "./css/CartIcon.css";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { ThemeContext } from "../Context/Theme";

 function CartIcon(props){
    const theme = useContext(ThemeContext);
    return(
        <div id="cart-icon">
            <Link to="/cart">
                <i  className="fa fa-shopping-cart" style={{color:theme.theme == "dark" ?"white":"black"}}></i>
                <span className="badge badge-danger">{props.totalQuantity}</span>
            </Link>
        </div>
    )
}
const mapStateToProps = (state) => {
        return {
            totalQuantity : state.cart.reduce((total ,item)=> item.quantity,0),
        }
}
export default connect(mapStateToProps)(CartIcon);