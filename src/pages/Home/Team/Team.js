import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import './Team.css';
import pic2 from '../../images/web.svg'
const Team = () => {
    return (
        <div className='my-5 py-5 team'>
        <h1 className='team-text'>Our Team</h1>
          <Carousel className='slider p-3'>
         <Carousel.Item >
           <div className='d-flex justify-content-around flex-md-row flex-sm-row '>
           <Card  className='team-card'>
               <div>
               <Card.Img variant="top"                  className='service-img' src={pic2} /> 
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
                 <Button variant="primary">Go somewhere</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
           <Card  className='team-card'>
               <div>
               <Card.Img variant="top"                  className='service-img' src={pic2} /> 
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
                 <Button variant="primary">Go somewhere</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
          </div>
         </Carousel.Item>
         <Carousel.Item >
           <div className='d-flex justify-content-around flex-md-row flex-sm-row '>
           <Card  className='team-card'>
               <div>
               <Card.Img variant="top"                  className='service-img' src={pic2} /> 
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
                 <Button variant="primary">Go somewhere</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
           <Card  className='team-card'>
               <div>
               <Card.Img variant="top"                  className='service-img' src={pic2} /> 
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
                 <Button variant="primary">Go somewhere</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
          </div>
         </Carousel.Item>
         <Carousel.Item >
           <div className='d-flex justify-content-around flex-md-row flex-sm-row '>
           <Card  className='team-card'>
               <div>
               <Card.Img variant="top"                  className='service-img' src={pic2} /> 
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
                 <Button variant="primary">Go somewhere</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
           <Card  className='team-card'>
               <div>
               <Card.Img variant="top"                  className='service-img' src={pic2} /> 
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
                 <Button variant="primary">Go somewhere</Button>
             </Card.Body>
                <div className='team-social d-flex flex-column' data-aos="fade-left">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
           </Card>
          </div>
         </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Team;