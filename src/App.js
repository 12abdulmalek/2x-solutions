import { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Menubar from './pages/Home/share/Menubar';
import Services from './pages/Home/services/Services';
import Contact from './pages/Home/Contact/Contact';
import Projects from './pages/Home/Projects/Projects';
import Technology from './pages/Home/Technoligy/Technology';
  
function App() {
  const [dark,setDark] = useState(false);
  return (
    <div className={dark?'App':'days'}>
      <BrowserRouter>
      <Menubar dark={dark} setDark={setDark}></Menubar>
         <Routes>
           <Route exact path="/" element={<Home dark={dark} setDark={setDark}></Home>}/>
           <Route path="/home" element={<Home dark={dark} setDark={setDark}></Home>}/>
           <Route path="/service" element={<Services></Services>}/>
           <Route path="/technology" element={<Technology></Technology>}/>
           <Route path="/contact" element={<Contact></Contact>}/>
           <Route path="/projects" element={<Projects></Projects>}/>

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
