 import React from 'react'
 import './ShoppingCart.css'
 import { ShopContext } from '../Context/ShopContext';
 import { useContext } from 'react';

 function ShoppingCart(){
  
     const context= useContext(ShopContext);
       console.log (context)

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
      <ShopContext.Consumer>
        <>
        <h1>Carrito</h1>
       
        {context.cart.map((p) =>{ 
         return (<div> <p> {p.newItem.name} </p>
                <p>Cantidad: {p.quantity}</p>
               <button onClick={() => context.removeProductFromCart(p.newItem.id)}> Eliminar </button>
               </div>
           
            );
          })}
 
    </>
    </ShopContext.Consumer>
      )  } 
  export default ShoppingCart;