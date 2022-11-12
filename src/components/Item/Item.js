import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import {data} from '../assets/db/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Item.css'
import Navbar from "../Navegation/NavBar";

function Item (){
    const {id} = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        GetProductById (id);
    },[])

    function GetProductById (id){
      let item = data.find(x => x.id === id)

      if(item!=null){
        setProduct (item)
      }
      
    }

return (
    <>
    <Navbar/>
   {product ? ( <div> <h1 className="title">DETALLE DEL PRODUCTO </h1>
     <div className="divDetalle">
     <p className="name"> {product.name} </p>
     <img className="dImagen" src= {product.image}></img>
 
     <p className="dDetalle" >Detalle: </p>
     <p className="dDetalle"> {product.detalle} </p>
     <p className="dPrecio">Precio:  {product.precio} </p>
     </div> 
     </div>
     ) : ( <div> Cargando...</div>)
    }
     </>
)
}

export default Item; 