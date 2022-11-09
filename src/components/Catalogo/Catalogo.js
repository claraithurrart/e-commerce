import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, Image } from 'semantic-ui-react'
import {useState, useReducer} from 'react'
// import {ShoppingCartInitialState, ShoppingReducer} from '../Reducers/ShoppingReducers'
import { useEffect } from 'react';
import {TYPES} from '../Actions/ShoppingActions'
import {data} from '../assets/db/data'
import './Catalogo.css'

function Catalogo() {
  
    // const [state, dispatch] = useReducer ( ShoppingReducer ,ShoppingCartInitialState)
    const [productos, setProductos ] = useState ([data])
    
    useEffect  (() => {
        setProductos (data);
        console.log (productos)
    }, []);
        
        // function addToCart (id) {
        //    dispatch ({type: TYPES.ADD_TO_CART, payload: id })
        // }

        return (
            <>
            <h1 className='title'> CATALOGO </h1>
            <div className='catalogo'>
                {productos.map ((p) => {
                    return (
                       
                       <Card className='conteiner'>
                        <Image  src={p.image}/>
                       <CardContent>
                        <CardHeader> {p.name}</CardHeader>
                        <CardDescription>{p.precio}</CardDescription>
                        {/* <Button className="btn btn-primary"' onClick={() => addToCart(p.id)}> AGREGAR AL CARRITO</Button>  */}
                       </CardContent>
                       </Card>
                       
                    )
                })
            }
            </div>
            </>
        )
      }

export default Catalogo;

