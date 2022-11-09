import React from 'react'; 
import {data} from '../assets/db/data';

export default React.createContext({
  products: data,
  cart: [],

  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});