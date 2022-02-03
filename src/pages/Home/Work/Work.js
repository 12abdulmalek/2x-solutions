import React from 'react';
import pic from '../../images/service.svg'
import pic1 from '../../images/coding.png'
import pic2 from '../../images/trustfull.png'
import pic3 from '../../images/Crypto.png'
import pic4 from '../../images/code (1).png'
import pic5 from '../../images/trust.png'
import pic6 from '../../images/MOBILE.png'
import './Work.css'
const Work = () => {
    return (
        <div>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                       <div className='service-pic'>
                       <img className='img-fluid' src={pic}/>
                       </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                    
                      <div>
                            <h1>What we do</h1>
                            <p>It should represent more in pictures and icons and less in words.</p>
                        </div>
                        <div className='work-service'>
                        <div className='d-flex align-items-center'> 
                            <img width="60px" height="60px" className='my-1' src={pic1}/>
                            <h5 className='mx-3'>High Quality code</h5>
                        </div>
                        <div className='d-flex align-items-center'> 
                            <img width="60px" height="60px" className='my-1' src={pic2}/>
                            <h5 className='mx-3'>Trustfull Communication</h5>
                        </div>
                        <div className='d-flex align-items-center'> 
                            <img width="60px" height="60px" className='my-1' src={pic3}/>
                            <h5 className='mx-3'>Complete Blockchain Integration</h5>
                        </div>
                        <div className='d-flex align-items-center'> 
                            <img width="60px" height="60px" className='my-1' src={pic4}/>
                            <h5 className='mx-3'>Full stake Web development</h5>
                        </div>
                        <div className='d-flex align-items-center'> 
                            <img width="60px" height="60px" className='my-1' src={pic6}/>
                            <h5 className='mx-3'>Mobile app development</h5>
                        </div>
                        <div className='d-flex align-items-center'> 
                            <img width="60px" height="60px" className='my-1' src={pic5}/>
                            <h5 className='mx-3'>24 Hrs Customer support.</h5>
                        </div>
                      </div>
                    </div>                      
                </div>
            </div>
        </div>
    );
};

export default Work;