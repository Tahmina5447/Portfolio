import React from 'react';
import { Zoom } from 'react-reveal';
import { Typewriter } from 'react-simple-typewriter';
import curtoon from '../../Images/curtoon.png'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

import './Home.css'
import { Link } from 'react-router-dom';
const Header = () => {



    return (
        <div className='Skill-bg'>
            <div className='px-12 '>
                <div className='flex  py-20 '>
                    <div className='sm:w-full md:w-1/2 lg:w-1/2 my-auto'>
                        <div className='w-4/5 mx-auto text-center'>
                            <h1 className='text-5xl font-bold mb-4 text-blue-700'>
                                <span>I'am Tahmina</span>
                            </h1>
                            <span className=' text-white text-4xl font-bold' >

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
                            <div>
                                <button className='border mt-4 border-white px-6 py-3 text-white font-bold'><Link to='/aboutMe'>About Me</Link></button>
                            </div>
                            <div className='mt-4'>
                                <div className="flex justify-center">
                                    <a className='mr-3 bg-white' target='_blank' href=' https://www.facebook.com/tahmina5447/'><UilFacebook></UilFacebook></a>
                                    <a className='mr-3 bg-white' target='_blank' href=' https://www.linkedin.com/in/tahmina5447/'><UilLinkedin></UilLinkedin></a>
                                    <a className='mr-3 bg-white' target='_blank' href=' https://github.com/Tahmina5447'><UilGithub></UilGithub></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='hidden lg:block md:block md:w-1/2 lg:w-1/2 '>
                        <Zoom><img className='mx-auto w-1/2' src={curtoon} alt="women" /></Zoom>
                    </div>

                </div>
                <hr className=' bg-black' />
            </div>
        </div>

    );
};

export default Header;