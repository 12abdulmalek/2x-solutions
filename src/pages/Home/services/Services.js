import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './service.css'
import pic2 from '../../images/web.svg'
const Services = () => {
    return (
        // service and technologies
        <div className='mt-5 mb-5'>
           <div className='container'>
               <div className='service-offer'>
                   <h1 className='text-light' style={{fontSize:"40px",fontWeight:"700"}}>WHAT WE OFFER</h1>
                   <div className='d-flex justify-content-around service-btn'>            
                           <a>Services</a>
                           <a>Technologies</a>
                   </div>
               </div>
             <Row xs={1} md={2} className="g-3">
               <Col>
                <Card  className='service-card'>
                 <div>
                  <Card.Img variant="top" className='service-img' src={pic2} />
                    </div>
                     <Card.Body>
                            <Card.Title>Enterprize Software development </Card.Title>
                        <Card.Text>
                                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in .One morning, when Gregor Samsa woke from troubled dreams, he found himself 
                        </Card.Text>
                       </Card.Body>
                      </Card>
                  </Col>
               <Col>
                <Card  className='service-card'>
                 <div>
                  <Card.Img variant="top" className='service-img' src={pic2} />
                    </div>
                     <Card.Body>
                            <Card.Title>Enterprize Software development </Card.Title>
                        <Card.Text>
                                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in .One morning, when Gregor Samsa woke from troubled dreams, he found himself 
                        </Card.Text>
                       </Card.Body>
                      </Card>
                  </Col>
               <Col>
                <Card  className='service-card'>
                 <div>
                  <Card.Img variant="top" className='service-img' src={pic2} />
                    </div>
                     <Card.Body>
                            <Card.Title>Enterprize Software development </Card.Title>
                        <Card.Text>
                                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in .One morning, when Gregor Samsa woke from troubled dreams, he found himself 
                        </Card.Text>
                       </Card.Body>
                      </Card>
                  </Col>
               <Col>
                <Card  className='service-card'>
                 <div>
                  <Card.Img variant="top" className='service-img' src={pic2} />
                    </div>
                     <Card.Body>
                            <Card.Title>Enterprize Software development </Card.Title>
                        <Card.Text>
                                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in .One morning, when Gregor Samsa woke from troubled dreams, he found himself 
                        </Card.Text>
                       </Card.Body>
                      </Card>
                  </Col>
                </Row>
                <button className='faster-button mt-5'> Tell us about your project</button>
           </div>
        </div>
    );
};

export default Services;