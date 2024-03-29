import React from 'react';
import tahmina from '../../Images/tahmina.jpg'

const About = () => {
    return (
        <div className='bg-gray-100 shadow-xl mx-32 py-8 rounded-xl lg:flex'>
            <dir className='lg:w-1/2'>
                <img className='  mx-auto rounded-full shadow-xl' src={tahmina} alt="" />

            </dir>
            <div className='p-2 lg:w-1/2 lg:my-auto '>
                <div className='items-center flex'>
                    <span className=' mr-1 bg-blue-700 w-8 h-1'></span>
                    <h1 className='text-xl text-blue-700 font-bold'>About Me</h1>
                </div>
                <p className='text-black'>I am passionate about exploring new things and learning something new.
                    I want to prove myself with my hard work and I am ready to accept challenges. I always try to be up-to-date with newer technologies.

                    I am fully dedicated to my work</p>
                    
                <p className='text-black py-4'> <span className='font-bold text-xl'>Education : </span> Studying honors third year in Economics, National University-Bangladesh.</p>
            </div>
            


        </div>
    );
};

export default About;