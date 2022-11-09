import React from "react"; 
import img from './img/logo.png'
import './Home.css'
import Navbar from "../Navegation/NavBar";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../Footer/Footer";


 
function Home(props){
return (
    <>
     <div className='headerClass'>
    <img src= {img} />
    </div> 
 
<div>
  <Navbar/>
</div>
 
<Carousel className="carousel">
  <Carousel.Item>
 <img
 className="items"
 src= "https://www.prune.com.ar/media/wysiwyg/Landing/08/PR__LANDING_ZEBRA_arg-desk_02.webp"
 alt="First slide"
 />
  <Carousel.Caption>
  <h3>Zebra edition</h3>
  </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
 <img
 className="items"
 src= "https://www.prune.com.ar/media/wysiwyg/Landing/08/landing_metallics_desk_05.webp"
 alt="Second slide"
 />
  <Carousel.Caption>
  <h3> Metallic edition</h3>
  </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
 <img
 className="items"
 src= "https://www.prune.com.ar/media/wysiwyg/Landing/08/PR__LANDING_ZEBRA_arg-desk_06.webp"
 alt="Third slide"
 />
  <Carousel.Caption>
  <h3> Zebra edition </h3>
  </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
 <Footer/>
  {/* <div className='homeClass'>
    <img className="imgHome" src= {imgHome}/>
    </div> */}
  </>
)
}

export default Home; 