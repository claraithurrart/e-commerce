import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img from './carrito.png'

function Navbar (){
    return (
      <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"> <Link className='nav-link' to= "/">Home</Link> </li>
            <li class="nav-item active"> <Link className='nav-link' to="/Catalogo">Catalogo</Link> </li>
            <li class="nav-item active"> <Link className='nav-link' to= "/Contacto">Contacto</Link> </li>
            <li> <Link  to= "/ShoppingCart"> <img src= {img} className='carrito'></img></Link> </li>
           
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> 
            </li> */}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>
        </div>
      </nav>
    </header>
    )
}
export default Navbar; 

