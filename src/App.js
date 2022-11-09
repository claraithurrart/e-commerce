import './App.css';
import Home from './components/Home/Home';
import UserForm from './components/Contacto/Contacto';
import Catalogo from './components/Catalogo/Catalogo';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

function App() {
  return (
    <>
    <div className="App">
    {/* <ShoppingCart/> */}
     
    </div>
    <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route  path= "/Catalogo" element= {<Catalogo/>}/>
      <Route path= "/Contacto" element= {<UserForm/>}/>
      <Route path= "/ShoppingCart" element= {<ShoppingCart/>}/>
    </Routes>
    

    {/* <div className='catalogo'>
      <Catalogo nombre= "Bandolera Cyllene" img= "https://www.prune.com.ar/media/catalog/product/cache/397079cc5e28eec7b5106ce591cfc4c8/P/I/PI03169NUCV4000_0.webp" precio="$10.900" /> 
      <Catalogo nombre= "Bandolera Baby" img= "https://www.prune.com.ar/media/catalog/product/cache/397079cc5e28eec7b5106ce591cfc4c8/P/0/P010151N0CV8000_0.webp" precio="$12.000" /> 
      <Catalogo nombre= "Bandolera Amapola" img= "https://www.prune.com.ar/media/catalog/product/cache/397079cc5e28eec7b5106ce591cfc4c8/P/0/P010062F0AF2000_0_2.webp" precio="$10.900" /> 
      <Catalogo nombre= "Bandolera Adisa" img= "https://www.prune.com.ar/media/catalog/product/cache/397079cc5e28eec7b5106ce591cfc4c8/P/I/PI02861P0AE3000_0_1.webp" precio="$11.000" /> 
    </div> */}
    </>
  );
}

export default App;
