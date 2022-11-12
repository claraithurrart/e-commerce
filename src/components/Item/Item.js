import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import {data} from '../assets/db/data';

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
   {product ? ( <div> <h1 className="title">DETALLE DEL PRODUCTO </h1>
     <p> {product.name} </p>
     <img src= {product.image}></img>
     <p> {product.detalle} </p>
     <p> {product.precio} </p>
     </div>
     ) : ( <div> Cargando...</div>)
    }
     </>
)
}

export default Item; 