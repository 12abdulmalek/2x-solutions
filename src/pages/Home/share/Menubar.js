import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css';
import solutions from '../../images/solution.png';
const Menubar = ({dark,setDark}) => {
  
    return (
      // navigation code here 
       <div className='menubar'>
            <div className='container'>
        <Navbar collapseOnSelect expand="md" variant="dark">
          {/* menu item logo  */}
            <div className='d-flex justify-content-center align-items-center'>
                <img width="72px" height="64px" src={solutions}/>
                <span className={dark?'text-light solution ':'solution p-2'}>2X SOLUTIONS</span>
            </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-primary'   />
       <Navbar.Collapse id="responsive-navbar-nav">
         {/* click able menu item here  */}
       <nav className="mx-auto d-flex flex-md-row flex-sm-column flex-column">
      <Link to="home" className={dark?'text-light p-2 text-decoration-none nav-item':'menu-item nav-item p-2'}>Home</Link>
      <Link to="service" className={dark?'text-light p-2 text-decoration-none nav-item':'menu-item nav-item p-2'}>Services</Link>
      <Link to="" className={dark?'text-light p-2 text-decoration-none nav-item':'menu-item nav-item p-2'}>Technologies</Link>
      <Link to="projects" className={dark?'text-light p-2 text-decoration-none nav-item':'menu-item nav-item p-2'}>Projects</Link>
      <Link to="contact" className={dark?'text-light p-2 text-decoration-none nav-item':'menu-item nav-item p-2'}>Reviews</Link>    
    </nav>
    <Nav className='dark-icon p-1 '>
        <button className={dark?'far fa-moon sun mb-1 mx-3':'fas fa-moon  moon mx-3 mb-1'} onClick={()=>setDark(!dark)} >     
        </button>
        {/* active contact button  */}
      <a  className='item' href="#memes">
           Contact
      </a>
    </Nav>
  </Navbar.Collapse>
  
</Navbar> 
</div>
       </div>
    );
};

export default Menubar;