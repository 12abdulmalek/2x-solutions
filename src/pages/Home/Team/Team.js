// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import { Button, Card, Carousel } from 'react-bootstrap';
import React from "react";
import { Card } from "react-bootstrap";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import useAuth from "../../../hooks/useAuth";

// import "./styles.css";
// import "./flickity.css";

import pic2 from '../../images/web.svg'

import './Team.css';
const Team = () => {
  const {theme} = useAuth();
  const flickityOptions = {
    initialIndex: 3,
    wrapAround: true
  }
  return(
  <div className="container">
    <div className={theme==='dark'?'text-light':'text-dark my-5 py-2'}><h1>OUR TEAM</h1> </div>
      <Flickity options={flickityOptions}>
     <div id="carousel-cell-1" className="carousel-cell gap-5">
     <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text className={theme==='dark'?'':'light-card'}>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='dark-team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <button className="faster-button">About</button>
             </Card.Body>
                <div  className={theme==='dark'?'team-social dark-social-icon d-flex flex-column':'team-social light-team-social d-flex flex-column'}>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
                
           </Card>
          </div>
     <div id="carousel-cell-1" className="carousel-cell gap-5">
     <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text className={theme==='dark'?'':'light-card'}>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='dark-team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <button className="faster-button">About</button>
             </Card.Body>
                <div  className={theme==='dark'?'team-social dark-social-icon d-flex flex-column':'team-social light-team-social d-flex flex-column'}>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
                
           </Card>
          </div>
     <div id="carousel-cell-1" className="carousel-cell gap-5">
     <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text className={theme==='dark'?'':'light-card'}>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='dark-team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <button className="faster-button">About</button>
             </Card.Body>
                <div  className={theme==='dark'?'team-social dark-social-icon d-flex flex-column':'team-social light-team-social d-flex flex-column'}>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
                
           </Card>
          </div>
     <div id="carousel-cell-1" className="carousel-cell gap-5">
     <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text className={theme==='dark'?'':'light-card'}>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='dark-team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <button className="faster-button">About</button>
             </Card.Body>
                <div  className={theme==='dark'?'team-social dark-social-icon d-flex flex-column':'team-social light-team-social d-flex flex-column'}>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
                
           </Card>
          </div>
     <div id="carousel-cell-1" className="carousel-cell gap-5">
     <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text className={theme==='dark'?'':'light-card'}>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='dark-team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <button className="faster-button">About</button>
             </Card.Body>
                <div  className={theme==='dark'?'team-social dark-social-icon d-flex flex-column':'team-social light-team-social d-flex flex-column'}>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
                
           </Card>
          </div>
     <div id="carousel-cell-1" className="carousel-cell gap-5">
     <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text className={theme==='dark'?'':'light-card'}>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='dark-team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <button className="faster-button">About</button>
             </Card.Body>
                <div  className={theme==='dark'?'team-social dark-social-icon d-flex flex-column':'team-social light-team-social d-flex flex-column'}>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
                
           </Card>
          </div>
    </Flickity>
  </div>

    );
};

export default Team;