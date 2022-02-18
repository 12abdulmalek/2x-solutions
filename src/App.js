import { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from './pages/Home/share/Menubar';
import Services from './pages/Home/services/Services';
import Contact from './pages/Home/Contact/Contact';
import Projects from './pages/Home/Projects/Projects';
import Technology from './pages/Home/Technoligy/Technology';
import AuthProvider from './context/AuthProvider';

function App() {
  const [dark, setDark] = useState();

  const lightMode = 'light';
  const darkMode = 'dark';
  let body = document.body;
  let theme;
  theme = localStorage.getItem('theme');
  console.log(theme);
  console.log(theme);
  if(theme===lightMode || theme ===darkMode){
      body.classList.add(theme);
  }
  else{
   body.classList.add(theme);
  }
  const setTheme = (e) =>{
      if(theme===darkMode){
          body.classList.replace(darkMode,lightMode)
          body.classList.remove(theme);
          localStorage.setItem('theme',lightMode)
          theme = lightMode;
          setDark(theme);
      }
      else{
       body.classList.replace(lightMode,darkMode)
       body.classList.remove(theme);
       localStorage.setItem('theme',darkMode)
       theme = darkMode;
       setDark(theme);
      }
  }
  return (
    <div className={dark ? 'App' : 'days'}>
   
      <AuthProvider>
      <BrowserRouter>
      <Menubar  setTheme={setTheme}></Menubar>

        <Routes>
        <Route exact path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/service" element={<Services></Services>} />
            <Route path="/technology" element={<Technology></Technology>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/projects" element={<Projects></Projects>} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
  
    </div>
  );
}

export default App;
