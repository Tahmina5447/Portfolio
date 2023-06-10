import React from 'react';
import kitchen from '../../Images/tahminasKitchen.png'
import coock from '../../Images/coock.png'
import comfortZone from '../../Images/comfortZone.png'
import test from '../../Images/test.png'
import courses from '../../Images/programmingCourse.png'
import onclub from '../../Images/Onclub/Onclub.png'
import fitlessian from '../../Images/Fitlessian/ss1.png'
import { UilArrowRight } from '@iconscout/react-unicons'
import './Home.css'
import { Link } from 'react-router-dom';

const Projects = () => {
    
const projectsData=[
    {
        id:1,
        img:fitlessian,
        live:"https://fitlessian.web.app/",
        details:"/fitlessian"
        
    },
    {
        id:2,
        img:kitchen,
        live:"https://tahminas-kitchen.web.app/",
        details:"/tahminasKitchen"
       
        
    },
    {
        id:3,
        img:comfortZone,
        live:"https://comfort-zone-2f181.web.app/",
        details:"/comfortZone"
        
    },
    {
        id:4,
        img:courses,
        live:"https://programming-courses-abf31.web.app/",
        details:"/programmingCourses"
    },
    {
        id:5,
        img:test,
        live:"https://resilient-muffin-d6592e.netlify.app/",
        details:"/testYourself"
       
    },
    {
        id:6,
        img:onclub,
        live:"https://onclub-a7d3f.web.app/media",
        details:"/onClub"
    },
    // {
    //     id:7,
    //     img:coock,
    //     live:"https://lucent-babka-f76489.netlify.app/",
    //     details:"/cookForYourself"
    // }
]
    return (
        <div className='m-20  pb-12'>
            <h1 className='text-blue-700 font-bold text-3xl text-center my-12'>Latest Projects</h1>
            <div className='w-4/5 mx-auto '>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-12'>
                {
                        projectsData.map(project=><div>
                            <div className='border hole-content'>
                                <img className='h-60 w-full ' src={project.img} alt="" />
                                <div className='effect'>
                                    <div className='content'>
                                        <button><a target='_blank' href={project.live}>Live Preview</a></button>
                                    </div>
    
                                </div>
                            </div>
                            <div>
                                <button className='bg-black w-full text-white py-1'> <Link className='flex w-1/2 mx-auto ' to={project.details}> Project Details <UilArrowRight></UilArrowRight></Link></button>
                            </div>
                        </div>
                            )
                    }

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