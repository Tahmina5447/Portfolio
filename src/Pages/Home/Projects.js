import React from 'react';
import kitchen from '../../Images/tahminasKitchen.png'
import coock from '../../Images/coock.png'
import comfortZone from '../../Images/comfortZone.png'
import test from '../../Images/test.png'
import courses from '../../Images/programmingCourse.png'
import { UilArrowRight } from '@iconscout/react-unicons'
import './Home.css'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='m-20  pb-12'>
            <h1 className='text-blue-700 font-bold text-3xl text-center my-12'>Latest Projects</h1>
            <div className='w-2/3 mx-auto '>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                    <div>
                        <div className='border hole-content'>
                            <img className='max-h-80 w-full ' src={kitchen} alt="" />
                            <div className='effect'>
                                <div className='content'>
                                    <button><a target='_blank' href=" https://tahminas-kitchen.web.app/">Live Preview</a></button>
                                </div>

                            </div>
                        </div>
                        <div>
                            <button className='bg-black w-full text-white py-1'> <Link to='/tahminasKitchen'> Project Details</Link></button>
                        </div>
                    </div>

                    <div>
                        <div className='border hole-content'>
                            <img className='max-h-80 w-full ' src={coock} alt="" />
                            <div className='effect'>
                                <div className='content'>
                                    <button><a target='_blank' href=" https://lucent-babka-f76489.netlify.app/ ">Live Preview</a></button>
                                </div>

                            </div>

                        </div>
                        <div>
                            <button className='bg-black w-full text-white py-1'> <Link to='/cookForYourself'> Project Details</Link></button>
                        </div>

                    </div>
                    <div>
                        <div className='border hole-content'>
                            <img className='max-h-80 w-full ' src={comfortZone} alt="" />
                            <div className='effect'>
                                <div className='content'>
                                    <button><a target='_blank' href=" https://comfort-zone-2f181.web.app/">Live Preview</a></button>
                                </div>

                            </div>

                        </div>
                        <div>
                            <button className='bg-black w-full text-white py-1'> <Link to='/comfortZone'> Project Details</Link></button>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:gap-x-14 lg:mx-24'>
                    <div>
                        <div className='border hole-content'>
                            <img className='max-h-80 w-full ' src={test} alt="" />
                            <div className='effect'>
                                <div className='content'>
                                    <button><a target='_blank' href=" https://resilient-muffin-d6592e.netlify.app/">Live Preview</a></button>
                                </div>

                            </div>
                        </div>
                        <div>
                            <button className='bg-black w-full text-white py-1'> <Link to='/testYourself'> Project Details</Link></button>
                        </div>
                    </div>
                    <div>
                        <div className='border hole-content'>
                            <img className='max-h-80 w-full ' src={courses} alt="" />
                            <div className='effect'>
                                <div className='content'>
                                    <button><a target='_blank' href=" https://programming-courses-abf31.web.app/">Live Preview</a></button>
                                </div>

                            </div>
                        </div>
                        <div>
                            <button className='bg-black w-full text-white py-1'> <Link to='/programmingCourses'> Project Details</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-12'>
                <button className='text-blue-700 text-xl border border-blue-700 flex p-2 mx-auto'>See All Projects<UilArrowRight></UilArrowRight></button>
            </div>
            <div>
                <hr />
            </div>
        </div>
    );
};

export default Projects;