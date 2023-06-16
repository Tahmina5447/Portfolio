import React from 'react';
import { Link } from 'react-router-dom';
import onclub from '../../../Images/Onclub/Onclub.png'
import ss1 from '../../../Images/Onclub/ss1.png'
import ss2 from '../../../Images/Onclub/ss2.png'

const Onclub = () => {
    return (
        <div className='my-20'>
            <div className=' lg:w-3/5 mx-auto border p-6'>
                
                    <div className='grid lg:grid-cols-3 w-full gap-6'>
                        <img className='max-h-80 w-full border border-2' src={onclub} alt="" />
                        <img className='max-h-80 w-full border border-2' src={ss2} alt="" />
                        <img className='max-h-80 w-full  border border-2' src={ss1} alt="" />
                    </div>
                    
               
                <div>
                    <h1 className='text-center text-3xl font-bold text-blue-700 mt-12'>OnClub</h1>
                    <div className='text-blue-700 mb-12 text-center'>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://onclub-a7d3f.web.app">Live Link <span className='ml-2'>|</span></a></u>
                        <u className='mr-2 text-sm'><a target='_blank' href="https://github.com/Tahmina5447/OnClub-client"> Client-side Code <span className='ml-2'>|</span></a></u>
                        <u className='text-sm'><a target='_blank' href="https://github.com/Tahmina5447/OnClub-server"> Server-side Code</a></u>
                    </div>
                    <u><p className=' font-bold text-xl'>
                        It's a social Media. Feature of this website:
                        
                    </p></u>
                    <div>
                        <p>● You can post here. Images will be hoste on imgbb.</p><br />
                        <p>● You can add like by clicking like icon. Also can add comment. Last comment will be show first. Comment will show with user name. </p><br />
                        <p>● You can edit your profile and see all post in details.</p>
                    </div>
                    <p className='font-bold my-6'><span className='text-blue-700 text-xl font-bold'>Uses Technologies: </span>React js,Tailwind, Daisy ui, React-dom, React-hook-form,MongoDB, Firebase, Node js, Express js, dotenv</p>
                </div>
            </div>

        </div>
    );
};

export default Onclub;