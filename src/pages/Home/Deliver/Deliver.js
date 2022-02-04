import React from 'react';
import web from '../../images/web.svg'
import './Deliver.css'
import rocket from '../../images/rocket.gif'
const Deliver = ({dark,setDark}) => {

    return (
        // 2x faster deliver section 
        <div className={dark?'dark-deliver-section':'light-deliver-section'}>
            <div className='container'>
            <div className=''>
            <div className='row g-2 '>
            <div className='col-lg-6 col-md-6 col-sm-12 text-start mt-2'>

               <div className={dark?'faster mt-4' : 'mt-4'}>
              <div className='faster-deliver'>
              <h1>
                We deliver your work </h1> <br/><h1> <span className='faster-color'>2X FASTER</span> then others
                </h1>
              </div>
                <p className='solution-text mb-5'>2x solutions is a company who provides services in 2x faster manner and we never compromise in security and quality of our products.</p>
                <input className='faster-inp mt-2'/>
 
                   {/* faster deliver work button code here  */}

                <button className='mx-2 faster-button'> Send query</button>
               </div>
            </div>

            {/* faster coding picture here */}

            <div className='col-lg-6 col-md-6 col-sm-12'> 
              <div>
              <img  className='deliver-img' width="479px" height="476px"  src={web}/>
              </div>
            </div>
        </div>
        </div>

        {/* checkout our work code here  */}
           <div className=' p-2  mt-5 pb-4' >
              <div className='d-flex justify-content-center'>
                  <div className='checked-work'>
                  <div className='p-3'>
              <div className='d-flex justify-content-around flex-md-row flex-sm-column flex-column'>
              <div className='checked-working-project'>
                  <h2>7+</h2>
                  <span>years in the industry</span>
                 
              </div>
              <div className='checked-working-project'>
                  <h2>100+</h2>
                  <span>Successful projects</span>
              </div>
              <div className='checked-working-project'>
                  <h2>50+</h2>
                  <span>It professionals</span>
              </div>
              <div className='checked-working-project'>
                  <h2>12000+</h2>
                  <span>Clients world wide</span>
              </div>
           </div>
              </div>
           <div className='rocket'> <img src={rocket} /> </div>
          
           </div>
           
        </div>
     
     {/* checked our work button  */}

        <button className='faster-button mt-3'> Check our work</button>
                  </div>
              </div>
        </div>
    );
};

export default Deliver;