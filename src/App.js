import { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Menubar from './pages/Home/share/Menubar';
import Services from './pages/Home/services/Services';
import Contact from './pages/Home/Contact/Contact';
import Projects from './pages/Home/Projects/Projects';
  
function App() {

 

  const [dark,setDark] = useState(false);
  // const [dark,setDark] = useState('');
  
  const  getCart = () => {
    const getValue = localStorage.getItem('cart')
    let cartObj;
    // console.log(getValue);
    if(getValue){
         cartObj= JSON.parse(getValue);
    }
    else{
      cartObj={};
    }
    return cartObj;
  }
  useEffect(()=>{
    const dark = localStorage.getItem('cart');
    console.log(dark)
      const names = getCart();
      console.log(names)
      setDark(names.d);      
  },[])
   const getValue = name => {
       const carts = getCart();
      carts['d'] = name;
      const stringify = JSON.stringify(carts);
      localStorage.setItem('cart',stringify);
   }

   getValue(dark);
   const darks = localStorage.getItem('cart');
   console.log(darks.d)
    // let names = getCart();
     
   
  return (
    <div className={dark?'App':'days'}>
      <BrowserRouter>
      <Menubar dark={dark} setDark={setDark}></Menubar>
         <Routes>
           <Route exact path="/" element={<Home dark={dark} setDark={setDark}></Home>}/>
           <Route path="/home" element={<Home dark={dark} setDark={setDark}></Home>}/>
           <Route path="/service" element={<Services></Services>}/>
           <Route path="/contact" element={<Contact></Contact>}/>
           <Route path="/projects" element={<Projects></Projects>}/>

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
