import React from 'react';
import { ShopContext } from './ShopContext';
import {data} from '../assets/db/data';
import {TYPES} from '../Actions/ShoppingActions';
import { useState } from 'react';
import { useReducer } from 'react';
import { ShoppingReducers } from '../Reducers/ShoppingReducers';
import ShoppingCart from '../ShoppingCart/ShoppingCart';


function GlobalState (props) {
    const[products, setProductos] = useState (data);
      const [cartState, dispatch]= useReducer (ShoppingReducers, {cart: []});
  
  
  function addProductToCart (product){
      dispatch ({type: TYPES.ADD_TO_CART, product: product });
  };
  
  function removeProductFromCart (productId){
      dispatch ({type: TYPES.REMOVE_ONE_FROM_CART, productId: productId });
   };
  
   return (
    <ShopContext.Provider
    values = {{
      products:products,
      cart: cartState.cart, 
      addProductToCart:addProductToCart,
      removeProductFromCart:removeProductFromCart
    }}>
     {props.children}
    </ShopContext.Provider>
   )
  }
  
  export default GlobalState;

