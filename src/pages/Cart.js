import {React,Component} from "react"; 
import CartItem from "../Components/CartItem";
import { index } from "../api/products";
import {connect} from "react-redux";
class Cart extends Component{
    state = {
        products:[],
        loading:true
    }
    componentDidMount(){
        index().then(data => {
            this.setState({
                products :data.data,
                loading:false
            });
        });
    }
    render(){
        if(this.state.loading)
        {
            return(
                <div>Loading....</div>
            )
        }
        return(
            <div >
                <h1>Cart</h1>
               <div className="row">
                {console.log(this.props.cartItems)}
                    {this.props.cartItems.map((item) => 
                        <div className="col-3" key={item.product.id}>
                            <CartItem item={item}/>
                        </div>
                    
                    )}
                    <h3>Total : {this.props.total}</h3>
                    <button className="btn btn-primary btn-block">Pay</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems : state.cart,
        total : state.cart.reduce((total ,item)=> total + item.quantity *item.product.price,0),
    }
}
export default connect(mapStateToProps)(Cart);