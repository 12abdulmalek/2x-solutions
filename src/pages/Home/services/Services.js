import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './service.css'
import pic1 from '../../images/blockchain1.svg'
import pic2 from '../../images/blockchain.svg'
import pic3 from '../../images/blockchain2.svg'
import pic4 from '../../images/blockchain3.png'
const Services = () => {
    return (
        // service 
        <div className='service-section'>
            <div><h1 className='service-title'>OUR SERVICES</h1></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-sm-12'>
                       <div className='services-card'>
                            <div className='service-card service-card-one'>
                                <div className='service-img'>
                                    <img src={pic3}/>
                                </div>
                                <div className='service-text'>
                                    <h2 id='service-text-one'>Blockchain Development</h2>
                                </div>
                            </div>
                       <div className='service-card'>
                            <div>
                                <div className='service-img'>
                                    <img src={pic2}/>
                                </div>
                                <div className='service-text'>
                                    <h2>Blockchain Development</h2>
                                </div>
                            </div>
                        </div>
                       </div>         
                       <div className='services-card'>
                            <div className='service-card service-card-two'>
                                <div className='service-img'>
                                    <img src={pic1}/>
                                </div>
                                <div className='service-text'>
                                    <h2>Blockchain Development</h2>
                                </div>
                            </div>
                       <div className='service-card'>
                            <div>
                                <div className='service-img'>
                                    <img src={pic4}/>
                                </div>
                                <div className='service-text'>
                                    <h2>Blockchain Development</h2>
                                </div>
                            </div>
                        </div>
                       </div>         
                     </div>

                    <div className='col-md-4 col-sm-12'>
                        <div className='service-provider'>
                            <div>
                            <div className='service-provider-header'>
                                <h1>We provide Awsome service to our clients</h1>
                            </div>
                            <div className='service-provider-text'>
                              <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox</p>
                            </div>
                            <div className='service-provider-btn'>
                                  <button>Contact us</button>
                            </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Services;