import {createStore} from "redux";
function reducers(state)
{
    return state;
}
const initialState = {
    cart:[
        {
            product : 
            {
                "id": 11,
                "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                "price": 109,
                "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
                "rating": {
                  "rate": 4.8,
                  "count": 319
                }
            },
            quantity:10
        }
    ]
    

    // {
    //     "id": 12,
    //     "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    //     "price": 114,
    //     "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    //     "category": "electronics",
    //     "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    //     "rating": {
    //       "rate": 4.8,
    //       "count": 400
    //     }
    //   }

    // {
    //     "id": 20,
    //     "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    //     "price": 12.99,
    //     "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    //     "category": "women's clothing",
    //     "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    //     "rating": {
    //       "rate": 3.6,
    //       "count": 145
    //     }
    //   }
}
const CartStore =  createStore(reducers,initialState)

export default CartStore;