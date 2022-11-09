import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik'; 
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contacto.css'

function UserForm(){
    const [info, setInfo] = useState (null); 
    
    const formik = useFormik({
        initialValues: {
            email: '',
            nombre: '',
            contraseña:'',
        },
        onSubmit : (data) => {
          console.log (data);
        },
    });

    return(
        <>
         {info == null ? (
            <div className='formulario'> 
        <h1>Contacto</h1>
        <Form className='form' onSubmit={formik.handleSubmit}>
           
            <Form.Group controlId='formEmail'>
                <Form.Label > Email: </Form.Label>
                <Form.Control className='input' type= "email" name = "email" placeholder= "Ingrese su email" onChange={formik.handleChange} value= {formik.values.email}/>
            </Form.Group>
            
            <Form.Group controlId='formNombre'>
                <Form.Label> Nombre: </Form.Label>
                <Form.Control className='input' type= "text" name = "nombre" placeholder= "Ingrese su nombre" onChange={formik.handleChange} value= {formik.values.nombre}/>
            </Form.Group>

            <Form.Group controlId='formContraseña'>
                <Form.Label> Contraseña: </Form.Label>
                <Form.Control className='input' type= "password" name = "contraseña" placeholder= "Ingrese su contraseña" onChange={formik.handleChange} value= {formik.values.contraseña}/>
            </Form.Group>
          
        
         <Button className='button' type= "submit"> Enviar
         </Button> 
        </Form>
     
        </div>
    ) : (
            <div>
                <h1> Datos el usuario creado</h1>
                <h3> Email: {info.email} </h3>
                <h3> Nombre: {info.nombre} </h3>
            </div>
     )
}
        </>
    )
}

export default UserForm; 

// <label for="mensaje">Mensaje</label>
// 	<textarea name="mensaje" for="mensaje" placeholder="describe brevemente en menos de 300 carácteres" maxlength="300"></textarea>