import React from 'react';
import html from '../../Images/skils/html.png'
import css from '../../Images/skils/css.png'
import bootstrap from '../../Images/skils/bootsrap.png'
import tailwind from '../../Images/skils/tailwind.png'
import javascript from '../../Images/skils/js.png'
import react from '../../Images/skils/react.png'
import mongodb from '../../Images/skils/mongo.png'
import firebase from '../../Images/skils/firebase.png'
import node from '../../Images/skils/node.png'

const Skills = () => {
    return (
        <div className=' my-32'>
            <div className=' w-4/5 mx-auto my-20'>
                <h1 className='text-blue-700 font-bold text-3xl mb-12 text-center'>My Skills</h1>
                <div className='grid lg:grid-cols-7 gap-y-6 gap-x-4 '>
                    <div className='border'>
                        <img className='mx-auto py-2 h-24 w-24' src={html} alt="" />

                    </div>
                    <div className='border'>
                        <img className='mx-auto py-2 h-24 w-24' src={css} alt="" />

                    </div>
                    <div className='border'>
                        <img className='mx-auto py-2 h-24 w-24' src={bootstrap} alt="" />

                    </div>
                    <div className='border'>
                        <img className='mx-auto py-2 h-24 w-24' src={tailwind} alt="" />

                    </div>
                    <div className='border'>
                        <img className=' mx-auto py-2 h-24 w-24' src={javascript} alt="" />

                    </div>
                    <div className='border'>
                        <img className='mx-auto py-2 h-24 w-24' src={node} alt="" />

                    </div>
                    <div className='border'>
                        <img className='mx-auto py-2 h-24 w-24' src={firebase} alt="" />

                    </div>
                    <div className='border'>
                        <img className='mx-auto py-2 h-24 w-24' src={mongodb} alt="" />

                    </div>
                    <div className='border'>
                        <img className='mx-auto py-2 h-24 w-24' src={react} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;