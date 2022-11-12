import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik'; 
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contacto.css'
import { TextArea } from 'semantic-ui-react';

function UserForm(){
    const [info, setInfo] = useState (null); 
    
    const formik = useFormik({
        initialValues: {
            email: '',
            nombre: '',
            // contraseña:'',
            consulta:'',
        },
        onSubmit : (data) => {
          console.log (data);
        },
    });

    return(
        <>
         {info == null ? (
            <div> 
        <h1 className='title'>CONTACTO</h1>
        <div className='formulario'>
        <Form className='form' onSubmit={formik.handleSubmit}>
           
            <Form.Group controlId='formEmail'>
                <Form.Label > EMAIL: </Form.Label>
                <Form.Control className='input' type= "email" name = "email" placeholder= "Ingrese su email" onChange={formik.handleChange} value= {formik.values.email}/>
            </Form.Group>
            <br></br>
            <Form.Group controlId='formNombre'>
                <Form.Label> NOMBRE: </Form.Label>
                <Form.Control className='input' type= "text" name = "nombre" placeholder= "Ingrese su nombre" onChange={formik.handleChange} value= {formik.values.nombre}/>
            </Form.Group>
            {/* <br></br>
            <Form.Group controlId='formContraseña'>
                <Form.Label> CONTRASEÑA: </Form.Label>
                <Form.Control className='input' type= "password" name = "contraseña" placeholder= "Ingrese su contraseña" onChange={formik.handleChange} value= {formik.values.contraseña}/>
            </Form.Group> */}
            <br></br>
            <Form.Group controlId='formConsulta'>
                <Form.Label> CONSULTA: </Form.Label>
               <TextArea className='input' type= "text" name = "consulta" placeholder= "Ingrese su consulta" onChange={formik.handleChange} value= {formik.values.consulta}> </TextArea>
            </Form.Group>
          
        
         <Button className='button' type= "submit"> Enviar
         </Button> 
        </Form>
        </div>
        </div>
    ) : (
            <div>
                <h1> Datos el usuario creado</h1>
                <h3> Email: {info.email} </h3>
                <h3> Nombre: {info.nombre} </h3>
                <h3> Consulta ingresada: {info.consulta} </h3>
            </div>
     )
}
        </>
    )
}

export default UserForm; 

