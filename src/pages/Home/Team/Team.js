import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';

import pic2 from '../../images/web.svg'

import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import './Team.css';
const Team = () => {
    return (
        <div className='my-5 py-5 team'>
          <div>
            <h1 className='mb-5 text-light' style={{fontSize:"40px"}}>Our team</h1>
          </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slider'>
        <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <Button variant="primary">About</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
        </SwiperSlide>
      
        <SwiperSlide className='swiper-slider'>
        <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <Button variant="primary">About</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
        </SwiperSlide>
      
        <SwiperSlide className='swiper-slider'>
        <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <Button variant="primary">About</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
        </SwiperSlide>
      
        <SwiperSlide className='swiper-slider'>
        <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <Button variant="primary">About</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
        </SwiperSlide>
      
        <SwiperSlide className='swiper-slider'>
        <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <Button variant="primary">About</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
        </SwiperSlide>
      
        <SwiperSlide className='swiper-slider'>
        <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <Button variant="primary">About</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
        </SwiperSlide>
      
        <SwiperSlide className='swiper-slider'>
        <Card  className='team-card'>
               <div className='d-flex justify-content-center align-items-center mt-4'>
               <img  className='team-img' src={pic2} /> 
              </div>    
             <Card.Body>
              <Card.Text>
                <h6>Mrs.Bean</h6>
                <h6>Frontend developer</h6>
               <div className='team-star'>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
                </Card.Text>
                 <Button variant="primary">About</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
        </SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default Team;