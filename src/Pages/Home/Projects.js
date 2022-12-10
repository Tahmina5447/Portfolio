import React from 'react';
import kitchen from '../../Images/tahminasKitchen.png'
import coock from '../../Images/coock.png'
import comfortZone from '../../Images/comfortZone.png'
import test from '../../Images/test.png'
import courses from '../../Images/programmingCourse.png'
import { UilArrowRight } from '@iconscout/react-unicons'

const Projects = () => {
    return (
        <div className='m-20 shadow-xl pb-12'>
            <h1 className='text-blue-700 font-bold text-3xl text-center my-12'>Latest Projects</h1>
            <div className='w-2/3 mx-auto '>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                    <div className='border card'>
                        <img className='max-h-80 w-full ' src={kitchen} alt="" />
                    </div>
                    <div className='border'>
                        <img className='max-h-80 w-full ' src={coock} alt="" />
                    </div>
                    <div className='border'>
                        <img className='max-h-80 w-full ' src={comfortZone} alt="" />
                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:gap-x-14 lg:mx-24'>
                    <div className='border'>
                        <img className='max-h-80 w-full ' src={test} alt="" />
                    </div>
                    <div className='border'>
                        <img className='max-h-80 w-full ' src={courses} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <button className='text-blue-700 text-xl border border-blue-700 flex p-2 mx-auto'>See All Projects<UilArrowRight></UilArrowRight></button>
            </div>

        </div>
    );
};

export default Projects;