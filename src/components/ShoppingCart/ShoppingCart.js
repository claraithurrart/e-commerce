 import React from 'react'
 import './ShoppingCart.css'
import { ShopContext } from '../Context/ShopContext';
 import { useContext } from 'react';
 import {Button} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingReducers from '../Reducers/ShoppingReducers'
import Navbar from '../Navegation/NavBar';

 function ShoppingCart(){

  
  
     const context= useContext(ShopContext);
       console.log (context.cart)

    // function addToCart(id){
    //   dispatch ({type: TYPES.ADD_TO_CART , payload: id})
    // }

    // function deleteToCart(id){
    //     dispatch ({type: TYPES.REMOVE_ONE_FROM_CART , payload: id})
    //   }

    //   function clearToCart(id){
    //     dispatch ({type: TYPES.CLEAR_CART })
    //   }

    return (
      
        <>
        <Navbar/>
        <h1 className='title'>CARRITO</h1>
       
        {context.cart.map((p) =>{ 
         return (<div className='itemCarrito'> <p className='itemNombre'> {p.newItem.name} </p>
                <p className='itemInfo'>Cantidad: {p.quantity}</p>
                <p className='itemInfo'>Precio: {p.newItem.precio}</p>
                <img src= {p.newItem.image}></img>
          
               <Button className='bButton' onClick={() => context.removeProductFromCart(p.newItem.id)}> Eliminar </Button>

               </div>
           
            );
          })}
 
    </>
   
      )  } 
  export default ShoppingCart;