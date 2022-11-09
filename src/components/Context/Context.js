import React from 'react';
import ShopContext from './ShopContext';
import {data} from '../assets/db/data';
import {TYPES} from '../Actions/ShoppingActions';
import {ShoppingReducer} from '../Reducers/ShoppingReducers'; 

function GlobalState (props) {

    const[products, setProductos] = useState (data);
    const [cartState, dispatch]= useReducer (ShoppingReducer, {cart: []});
}
