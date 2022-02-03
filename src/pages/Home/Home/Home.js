import React from 'react';
import Aproach from '../Aproach/Aproach';
import Contact from '../Contact/Contact';
import Deliver from '../Deliver/Deliver';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Services from '../services/Services';
import Menubar from '../share/Menubar';
import Team from '../Team/Team';
import Testimonal from '../Testimonal/Testimonal';
import Work from '../Work/Work';

const Home = ({dark,setDark}) => {

    return (
        <div>
            <Deliver dark={dark} setDark={setDark}></Deliver>
            <Work></Work>
            <Aproach></Aproach>     
            <Services></Services>
            <Projects></Projects>
            <Testimonal></Testimonal>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;