import React from 'react';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;