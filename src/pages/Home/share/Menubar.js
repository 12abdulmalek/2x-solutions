import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import solutions from '../../images/solution.png';
import useAuth from '../../../hooks/useAuth';
import './darkMenubar.css';
import './lightMenubar.css';
const Menubar = ({ setTheme }) => {
  const { theme } = useAuth();
  return (
    // navigation code here 

    <div className='navigation-bar'>
      <div className={theme === 'dark' ? 'dark-menubar' : 'light-menubar'}>
        <div className='container ' >
          <Navbar collapseOnSelect expand="lg" variant="dark">

            {/* menu item logo  */}

            <div className='d-flex justify-content-center align-items-center'>
              <Link to="home" id='tt' className={theme === 'dark' ? 'p-2 text-decoration-none nav-item' : ' nav-item p-2 text-decoration-none'}>
                <img width="72px" height="64px" src={solutions} />
              </Link>


              {/* 2x solution company name  */}

              <span className={theme === 'dark' ? ' dark-solution solution' : 'light-solution solution'}>2X SOLUTIONS</span>
            </div>

            {/* navigation toggler library code  */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-primary' />
            {/* navigation item start from here  */}

            <Navbar.Collapse id="responsive-navbar-nav">

              {/* click able menu item here  */}

              <nav className="mx-auto menu-item">
                <Link to="aproach" className={theme === 'dark' ? 'dark-menu-item' : 'light-menu-item'}>Aproach</Link>
                <Link to="service" className={theme === 'dark' ? 'dark-menu-item' : 'light-menu-item'}>Services</Link>
                <Link to="project" className={theme === 'dark' ? 'dark-menu-item' : 'light-menu-item'}>Projects</Link>
                <Link to="service" className={theme === 'dark' ? 'dark-menu-item' : 'light-menu-item'}>Reviews</Link>
              

                {/* className={theme === 'dark' ? 'text-light p-2 text-decoration-none dark-menu-item nav-item' : 'light-menu-item nav-item p-2 text-decoration-none'} */}
                
              </nav>
              <Nav className='dark-icon contact-menubar-item'>
                <button className={theme === 'dark' ? ' far fa-moon night-moon' : 'fas fa-moon  light-moon '} onClick={(e) => setTheme(e)} >
                </button>
                {/* active contact button  */}
                   <Link to="" className='contact-menu-item'>CONTACT</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Menubar;