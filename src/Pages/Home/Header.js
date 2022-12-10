import React from 'react';
import { Zoom } from 'react-reveal';
import { Typewriter } from 'react-simple-typewriter';
import curtoon from '../../Images/curtoon.png'

import './Home.css'
const Header = () => {

    

    return (
        <div className='px-12 '>
            <div className='flex  py-20 '>
            <div className='sm:w-full md:w-1/2 lg:w-1/2 my-auto'>
                <h1 className='text-4xl font-bold text-blue-700'>
                    <span>I'am Tahmina{' '}</span>
                    <span  className=' text-red-700 text-3xl font-bold' >

                        <Typewriter
                            words={['Full Stack Web Developer']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <p className='text-blue-900 w-2/3 mx-auto py-4'>I am passionate about coding. I want to prove myself with my hard work and I am ready to accept challenges. I always try to be up-to-date with newer technologies.</p>
                <button className='border border-blue-700 px-6 py-3 text-blue-700 font-bold'>About Me</button>
            </div>
            <div className='hidden lg:block md:block md:w-1/2 lg:w-1/2 '>
                <Zoom><img className='mx-auto w-1/2' src={curtoon} alt="women" /></Zoom>
            </div>
            
        </div>
        <hr className=' bg-black' />
        </div>
        
    );
};

export default Header;