import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css';
import solutions from '../../images/solution.png';
const Menubar = ({ dark, setDark }) => {

  return (
    // navigation code here 

    <div className={dark ? 'dark-menubar' : 'light-menubar'}>
      <div className='container ' >
        <Navbar collapseOnSelect expand="md"  variant="dark">

          {/* menu item logo  */}

          <div className='d-flex justify-content-center align-items-center'>
            <img width="72px" height="64px" src={solutions} />

            {/* 2x solution company name  */}

            <span className={dark ? ' dark-solution solution' : 'light-solution solution'}>2X SOLUTIONS</span>
          </div>

          {/* navigation toggler library code  */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-primary' />
          {/* navigation item start from here  */}

          <Navbar.Collapse id="responsive-navbar-nav">

            {/* click able menu item here  */}

            <nav className={dark ? "dark-navbar menubar  mx-auto" : "light-navbar menubar  mx-auto"}>
              <Link to="home" id='tt' className={dark ? 'p-2 text-decoration-none dark-menu-item nav-item' : 'light-menu-item nav-item p-2 text-decoration-none'}>Home</Link>
              <Link to="service" className={dark ? 'p-2 text-decoration-none dark-menu-item nav-item' : 'light-menu-item nav-item p-2 text-decoration-none'}>Services</Link>

              <Link to="technology" className={dark ? 'p-2 text-decoration-none dark-menu-item nav-item' : 'light-menu-item nav-item p-2 text-decoration-none'}>Technologies</Link>

              <Link to="projects" className={dark ? ' p-2 text-decoration-none dark-menu-item nav-item' : 'light-menu-item nav-item p-2 text-decoration-none'}>Projects</Link>

              <Link to="contact" className={dark ? ' p-2 text-decoration-none dark-menu-item nav-item' : 'light-menu-item nav-item p-2 text-decoration-none'}>Reviews</Link>
            </nav>
            <Nav className='dark-icon contact-menubar-item'>
              <button className={dark ? 'far fa-moon night-moon' : 'fas fa-moon  light-moon '} onClick={() => setDark(!dark)} >
              </button>
              {/* active contact button  */}
              <a className='contact-menu-item' href="#memes">
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