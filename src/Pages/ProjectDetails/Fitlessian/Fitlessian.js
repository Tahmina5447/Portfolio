import React from 'react';
import ss1 from '../../../Images/Fitlessian/ss1.png'
import ss2 from '../../../Images/Fitlessian/ss2.png'
import ss3 from '../../../Images/Fitlessian/ss3.png'

const Fitlessian = () => {
    return (
        <div className='my-20'>
            <div className=' lg:w-3/5 mx-auto border p-6'>
                <div className='grid lg:grid-cols-3 w-full gap-6'>
                    <img className='max-h-80 w-full border border-2' src={ss1} alt="" />
                    <img className='max-h-80 w-full border border-2' src={ss2} alt="" />
                    <img className='max-h-80 w-full  border border-2' src={ss3} alt="" />
                </div>
                <div>
                    <h1 className='text-center text-3xl font-bold text-blue-700 mt-12'>Fitlessian</h1>
                    <div className='text-blue-700 mb-12 text-center'>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://fitlessian.web.app/">Live Link <span className='ml-2'>|</span></a></u>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://github.com/farukphero/fitness-tracking-web-client"> Client-side Code <span className='ml-2'>|</span></a></u>
                        <u className='text-sm'><a target='_blank' href=" https://github.com/farukphero/fitness-tracking-web-server"> Server-side Code</a></u>
                    </div>
                    <u><p className=' font-bold text-xl'>
                        It's a fitness tracking website. Feature of this website:

                    </p></u>
                    <div>
                        <p>● It's a team project. </p>
                        <p>● I have done the tutorial section and weight log section. </p>
                        <p>● I have implemented the messing option and user leaderboard.</p><br />
                    </div>
                    <p className='font-bold my-6'><span className='text-blue-700 text-xl font-bold'>Uses Technologies: </span> React js, Node js, Express js, MongoDB, web-vitals, Redux, Axios, React-router, Tailwind CSS, Daisy UI, Swiper, Firebase </p>
                </div>
            </div>

        </div>
    );
};

export default Fitlessian;