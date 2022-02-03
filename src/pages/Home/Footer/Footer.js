import React, { useEffect } from 'react';
import './Footer.css'
import map from '../../images/map.jpg'
import solutions from '../../images/solution.png'
const Footer = () => {
  
    return (
        //   footer area is here 
      <div className='footer-area mt-5'>
         <div className='container pt-3'>
          <div className='row g-3'>
            <div className='col-lg-5 col-md-4 col-sm-12 contact-area'>
              <div>
                 <div className='d-flex align-items-center'>
                     <img width="50" src={solutions}/>
                     <h2 className='ms-2' style={{fontSize:"20px"}}>Solution</h2>
                 </div>
                   <p>
                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis pajusto,Lorem ipsum dolor sit amet, consectetuer adipiscinde justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                   </p>   
                  <h3>Telephone:      <span className='px-2'>+02254867867 </span></h3>
                   <h3>E-mail:      <span className='px-5'>abcd@gmail.com </span></h3> 
                      <h3 >Our Location</h3>  
                      <img width="90%" height="220" src={map}/>
                      <h2>STAY CONNECTED</h2>
                      <div className='social-link'>
                      <i className="fab fa-youtube-square"></i>
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-facebook-f"></i>
                      <i className="fab fa-instagram"></i>
                      </div>
              </div>
            </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                   <div className='footer-services' >
                       <h2>Services</h2>
                       <ul>
                           <li>Case Study.</li>
                           <li>UI-UX design.</li>
                           <li>Enterprize Software development.</li>
                           <li>Web development.</li>
                           <li>Mobile app development.</li>
                           <li>Blockchain development.</li>                    
                       </ul>
                   </div>
                   <div className='footer-services' >
                       <h2>Blockchain</h2>
                       <ul>
                           <li>Blockchain integretion..</li>
                           <li>Smart contact development</li>
                           <li>DevOps implementation.</li>
                           <li>Ecosystems. Cryptowallet </li>
                           <li>Mobile app development.</li>  
                       </ul>
                   </div>
                   <div className='footer-services' >
                       <h2>Mobile</h2>
                       <ul>
                           <li>Flutter</li>
                           <li>Java</li>
                           <li>Firebase</li>
                       </ul>
                   </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                <div className='footer-services' >
                       <h2>Frontend</h2>
                       <ul>
                           <li>React JS.</li>
                           <li>Vue JS.</li>
                           <li>Tailwind CSS.</li>                                           
                       </ul>
                   </div>
                <div className='footer-services' >
                       <h2>Backend</h2>
                       <ul>
                           <li>Node JS.</li>
                           <li>Express JS.</li>
                           <li>Java.</li>
                           <li>Sqlite.</li>
                           <li>M.E.R.N</li>                                            
                       </ul>
                   </div>
                <div className='footer-services' >
                       <h2>Web</h2>
                       <ul>
                           <li>HTML.</li>
                           <li>CSS.</li>
                           <li>Javascript.</li>
                           <li>MERN.</li>
                           <li>MEAN</li>                    
                       </ul>
                   </div>
                </div>    
          </div>      
         </div>
      </div>
    );
};

export default Footer;