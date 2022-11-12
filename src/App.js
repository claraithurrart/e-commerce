import './App.css';
import Home from './components/Home/Home';
import UserForm from './components/Contacto/Contacto';
import Catalogo from './components/Catalogo/Catalogo';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShopContext } from './components/Context/ShopContext';
 import ShoppingCart from './components/ShoppingCart/ShoppingCart'
 import GlobalState from './components/Context/Context';
 import Item from './components/Item/Item';

function App() {
  return (
     <>
      <GlobalState>  
    <div className="App">
    <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route  path= "/Catalogo" element= {<Catalogo/>}/>
      <Route path= "/Contacto" element= {<UserForm/>}/>
       <Route path= "/item/:id" element= {<Item/>}/> 
      <Route path= "/ShoppingCart" element= {<ShoppingCart/>}/>
    </Routes>
           </div>
          </GlobalState>  
    
      </>
  );
}

export default App;
