 import React from 'react'
 import './ShoppingCart.css'
import { ShopContext } from '../Context/ShopContext';
 import { useContext } from 'react';
import ShoppingReducers from '../Reducers/ShoppingReducers'

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
        <h1 className='title'>CARRITO</h1>
       
        {context.cart.map((p) =>{ 
         return (<div> <p> {p.newItem.name} </p>
                <p>Cantidad: {p.quantity}</p>
                <p>Precio: {p.newItem.precio}</p>
                <img src= {p.newItem.image}></img>
          
               <button onClick={() => context.removeProductFromCart(p.newItem.id)}> Eliminar </button>

               </div>
           
            );
          })}
 
    </>
   
      )  } 
  export default ShoppingCart;