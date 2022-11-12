import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, Image, Button } from 'semantic-ui-react'
import './Catalogo.css'
import {ShopContext} from '../Context/ShopContext'
import {Link} from 'react-router-dom'

import {useState, useReducer} from 'react'
 import {ShoppingCartInitialState, ShoppingReducer} from '../Reducers/ShoppingReducers'
 import { useEffect } from 'react';
import {TYPES} from '../Actions/ShoppingActions'
import {data} from '../assets/db/data'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import Navbar from '../Navegation/NavBar'

function Catalogo() {
  
  

        return (
            <>
            <Navbar/>
            <ShopContext.Consumer>
                {context =>(
                   <>
            <h1 className='title'> CATALOGO </h1>
            <div className='catalogo'>
                {context.products.map ((p) => {
                    return (
                       
                       <Card className='conteiner'>
                        <Link to={`/item/${p.id}`}>
                        <Image className='imagen' src={p.image}/>
                        </Link>
                       <CardContent>
                        <CardHeader> {p.name}</CardHeader>
                        <Link to={`/item/${p.id}`}>
                        <CardDescription>ver detalle</CardDescription>
                        </Link>
                        <CardDescription>{p.precio}</CardDescription>
                        <br></br>
                        <Button  onClick={() => context.addProductToCart(p) } className="btn btn-primary" variant= "primary"> AGREGAR AL CARRITO</Button> 
                       </CardContent>
                       </Card>
                       
                    )
                })
            }
            </div>
            </>
                )}
            </ShopContext.Consumer>
            </>
        )
      }

export default Catalogo;

