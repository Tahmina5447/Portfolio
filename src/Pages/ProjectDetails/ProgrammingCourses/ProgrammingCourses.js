import React from 'react';
import course from '../../../Images/programmingCourse.png'
import ss1 from '../../../Images/ProgrammingCourses/ss1.png'
import ss2 from '../../../Images/ProgrammingCourses/ss2.png'

const ProgrammingCourses = () => {
    return (
        <div className='my-20'>
            <div className=' lg:w-3/5 mx-auto border p-6'>
            <div className='grid lg:grid-cols-3 w-full gap-6'>
                        <img className='max-h-80 w-full border border-2' src={course} alt="" />
                        <img className='max-h-80 w-full border border-2' src={ss1} alt="" />
                        <img className='max-h-80 w-full  border border-2' src={ss2} alt="" />
                    </div>
                <div>
                    <h1 className='text-center text-3xl font-bold text-blue-700 mt-12'>Programming Courses</h1>
                    <div className='text-blue-700 mb-12 text-center'>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://programming-courses-abf31.web.app/">Live Link <span className='ml-2'>|</span></a></u>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://github.com/Tahmina5447/Programming-courses-client"> Client-side Code <span className='ml-2'>|</span></a></u>
                        <u className='text-sm'><a target='_blank' href=" https://github.com/Tahmina5447/Programming-courses-server"> Server-side Code</a></u>
                    </div>
                    <u><p className=' font-bold text-xl'>
                        It's a Online Teaching website. Feature of this website:
                        
                    </p></u>
                    <div>
                        <p>● You can download pdf file of courses.</p><br />
                        <p>● You can see course details for specific course, I have added a loading system</p><br />
                        <p>● User can see error message. I have added firebase authentication system with email-password and Social login</p>
                    </div>
                    <p className='font-bold my-6'><span className='text-blue-700 text-xl font-bold'>Uses Technologies: </span> React to pdf, React js, Node js, Express js, React-router,Firebase, Tailwind css, Daisy UI</p>
                </div>
            </div>

        </div>
    );
};

export default ProgrammingCourses;