import React from 'react';
import './Testimonals.css'
import pic from '../../images/testimonial.jpg'
const Testimonal = ({dark}) => {
    return (
        <div className=''>
            <div className=' container testimonials p-5'>
                <div className='d-flex justify-content-center align-items-center testi-cont' >
                <span className='test-strick mx-4'></span>
                <h1 className={dark?'dark-testimonial-header':'light-testimonial-header'}>TESTIMONALS</h1>
                <span className='test-strick mx-4'></span>
                </div>
                <div className='row gx-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12 text-start client-cont mt-5'>
                      <div className={dark?'ms-5 dark-testimonial-body':'ms-5 light-testimonial-body'}>
                      <h1>What People say
                         </h1>
                         <i className="fas fa-quote-left light-quote"></i>
                         <p >
                         One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff s ections. The bedding was
                         </p>
                         <h4>Client Name</h4>
                         <h4>Designation,Company Name</h4>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                        <div className='d-flex align-items-center testimonal-img'>
                        <div className='testi-icon'>
                            <i className="fas fa-less-than"></i>
                            <i className="fas fa-minus minus"></i>
                            <i className="fas fa-greater-than"></i>
                            </div>
                            <div className='testi-img'>
                            <img className='my-4 testi-image' width="100%" src={pic}/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className='round'>

            </div>
        </div>
    );
};

export default Testimonal;