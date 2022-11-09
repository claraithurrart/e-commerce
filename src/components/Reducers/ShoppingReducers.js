import {useState} from 'react';
import {data} from '../assets/db/data';
// import { TYPES } from "../actions/ShoppingActions";



//  export const ShoppingCartInitialState = {
//     products: [data],
//      cart: []
//  }


 
// export function ShoppingReducers(state, action){
//   switch (action.type) {
   
//     case TYPES.ADD_TO_CART:  {
     
//       let newItem = data.find(x => x.id === action.product.id)
//       let itemCart = state.cart.find (x => x.id === action.product.id)

//       return itemCart ? {
//         ...state,
//        cart: state.cart.map ((item) =>item.id === newItem.id 
//        ? {...item, quantity: item.quantity +1, total: item.total + newItem.price} : item
//        ),
//       }:{
//         ...state, 
//         cart: [...state.cart, {newItem, quantity:1,  total: newItem.price}]
//       }
//       }
      
    

//     case TYPES.REMOVE_ONE_FROM_CART: {

//         let itemDelete = data.find (x => x.id === action.product.id)

//         return itemDelete.quantity > 1?{
//             ...state,
//             cart: state.cart.map ((item) => item.id === action.productId
//             ? {...item, quantity: item.quantity -1, total: item.price * item.quantity} : item
//             ),
//         }:{
//             ...state, 
//             cart: state.cart.filter(x => x.id !== action.payload)
        
//         }
//     }
//   }
// }