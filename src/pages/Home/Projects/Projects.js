import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Projects.css'
const Projects = () => {
    const {theme} = useAuth();
    return (
        <div className='latest-project'>
            <div className='container my-5'>
                <div className={theme==='dark'?'dark-latest-project' : 'light-latest-project'}>
                    <h1>LATEST PROJECT</h1>
                    <p>we design with care and develop with precisions </p>
                </div>
                <div className='row projects text-start'>
                    <div className='col-md-5 col-sm-12 order-md-0'>
                    <div className='mt-5 pt-5'>
                    <div className={theme==='dark'?'dark-project-text mx-4  px-2':'light-project-text mx-4 px-2'}> <h1>PROJECT TITLE</h1>
                      <p>quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocksquartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. </p>
                      <span><i className="fas fa-arrow-right project-icon"></i></span></div>
                    </div>
                    </div>
                    <div className='col-md-7 col-sm-12  order-md-1'>
                     
                       <div className='ractangle-design mt-4 mx-5 px-4'>
                            <div className='ractangle-ractangle-one'></div>
                            <div className='ractangle-ractangle-two'>
                                <span></span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;