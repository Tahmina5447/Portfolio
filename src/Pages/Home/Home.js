import React from 'react';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;