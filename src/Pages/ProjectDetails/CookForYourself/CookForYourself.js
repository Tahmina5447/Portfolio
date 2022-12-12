import React from 'react';
import cook from '../../../Images/coock.png'

const CookForYourself = () => {
    return (
        <div className='my-20'>
            <div className=' lg:w-3/5 mx-auto border p-6'>
            <div className=''>
                        <img className='max-h-80 mx-auto border border-2' src={cook} alt="" />
                        
                    </div>
                <div>
                    <h1 className='text-center text-3xl font-bold text-blue-700 mt-12'>Cook For Yourself</h1>
                    <div className='text-blue-700 mb-12 text-center'>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://lucent-babka-f76489.netlify.app/">Live Link <span className='ml-2'>|</span></a></u>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://github.com/Tahmina5447/Cook-for-yourself">Code Link</a></u>
                        
                    </div>
                    <u><p className=' font-bold text-xl'>
                        It's a Landing Page website. Feature of this website:
                        
                    </p></u>
                    <div>
                        <p>● If you click on add to list it will be add on cook time. Here has a faq section.</p><br />
                        <p>● When you will select a button on break time it the break time will be add.</p><br />
                        <p>● When anyone click on activity complete button here will show a successful toast.</p>
                    </div>
                    <p className='font-bold my-6'><span className='text-blue-700 text-xl font-bold'>Uses Technologies: </span>React js, Toast, React-router, Tailwind css, Daisy UI.</p>
                </div>
            </div>

        </div>
    );
};

export default CookForYourself;