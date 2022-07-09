import {React,Component} from "react"; 
import { show } from "../api/products";
import { useParams } from "react-router";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class Product extends Component{
    state = {
        loading:true,
        product:[],
        quantity:1
    }
    componentDidMount(){
        let id = this.props.params.id;
        show(id).then(data => {
            this.setState({
                product:data.data,
                loading:false,
              
            })
        })
    }
    handleQuantity = (event) => {
        let newQuantity = event.target.value;
     
        if(newQuantity >0)
        {
            this.setState({quantity:newQuantity})
        }else{

           return ;
        }
    }
    render(){
        const product = this.state.product; 
        const quantity = this.state.quantity;
        if(this.state.loading)
        {
            return(<div>Loading....</div>)
        }
        return(
            <div className="row">
                <div className="col-6">
                    <img src={product.image} width={"100%"}/>
                </div>
                <div className="col-6">
                    <h1>Title : {product.title}</h1>
                    <br></br>
                    <h4>Category : {product.category}</h4>
                    <p>Description : {product.description}</p>
                    <p>Rate : {product.rating.rate}/5 ({product.rating.count} Users)</p>
                    <p>Price : {product.price}$</p>
                    <input type={"number"} value={quantity} placeholder="Quantity" onChange={this.handleQuantity} />
                    
                    <p>Total : {product.price * quantity}</p>
                    <br></br>
                    <br></br>
                    <button className="btn btn-small btn-primary">Add To Cart</button>
                </div>
            </div>
        );
    }
}
export default withParams(Product);