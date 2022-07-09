import axios from "axios";
    function  index(){
        try {
            const response =  axios.get('https://fakestoreapi.com/products');
            return Promise.resolve(response);
        } catch (error) {
            console.error(error);
        }
    }
    function  show(id){
        try {
            const response =  axios.get('https://fakestoreapi.com/products/'+id);
            return Promise.resolve(response);
        } catch (error) {
            console.error(error);
        }
    }
export {
    index,
    show

}