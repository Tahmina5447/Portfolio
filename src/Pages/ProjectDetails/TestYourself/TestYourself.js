import React from 'react';
import test from '../../../Images/test.png'
import ss1 from '../../../Images/TestYourself/ss1.png'

const TestYourself = () => {
    return (
        <div className='my-20'>
        <div className=' lg:w-3/5 mx-auto border p-6'>
        <div className='grid lg:grid-cols-3 w-full gap-6'>
                    <img className='max-h-80 w-full border border-2' src={test} alt="" />
                    <img className='max-h-80 w-full border border-2' src={ss1} alt="" />
                </div>
            <div>
                <h1 className='text-center text-3xl font-bold text-blue-700 mt-12'>Test Yourself</h1>
                <div className='text-blue-700 mb-12 text-center'>
                    <u className='mr-2 text-sm'><a target='_blank' href=" https://resilient-muffin-d6592e.netlify.app/">Live Link <span className='ml-2'>|</span></a></u>
                    <u className='mr-2 text-sm'><a target='_blank' href=" https://github.com/Tahmina5447/Test-yourself">Code Link</a></u>
                    
                </div>
                <u><p className=' font-bold text-xl'>
                    It's a Quiz website. Feature of this website:
                    
                </p></u>
                <div>
                    <p>● You can see how many quiz has one section.</p><br />
                    <p>● Click start now button and start quiz. If you click wrong answer you can see a message that its wrong answer, same system for right answer.</p><br />
                    <p>● If you click icon button you can see right answer.</p>
                </div>
                <p className='font-bold my-6'><span className='text-blue-700 text-xl font-bold'>Uses Technologies: </span>Recharts, React js, Toast, React-router,Tailwind css, Daisy UI.</p>
            </div>
        </div>

    </div>
    );
};

export default TestYourself;