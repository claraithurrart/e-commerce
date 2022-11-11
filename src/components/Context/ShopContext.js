import React from 'react'; 
import {data} from '../assets/db/data';


export const ShopContext = React.createContext({
  products: [],
  cart: [],

  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});

 