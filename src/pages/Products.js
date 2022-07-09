import {React,Component} from "react"; 
import ProductItem from "../Components/ProductItem";
import { index } from "../api/products";
class Products extends Component{
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
                <h1>Products</h1>
               <div className="row">
                    {this.state.products.map((value,index) => 
                        <div className="col-4" key={value.id}>
                            <ProductItem product={value}/>
                        </div>
                    
                    )}
                </div>
            </div>
        );
    }
}
export default Products