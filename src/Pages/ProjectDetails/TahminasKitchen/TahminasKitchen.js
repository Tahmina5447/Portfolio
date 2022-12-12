import React from 'react';
import tahminasKitchen from '../../../Images/tahminasKitchen.png'
import tahminasKitchen1 from '../../../Images/ScreenShots/tahminasKitchen1.png'
import tahminasKitchen2 from '../../../Images/ScreenShots/tahminasKitchen2.png'

const TahminasKitchen = () => {
    return (
        <div className='my-20'>
            <div className=' lg:w-3/5 mx-auto border p-6'>
            <div className='grid lg:grid-cols-3 w-full gap-6'>
                        <img className='max-h-80 w-full border border-2' src={tahminasKitchen} alt="" />
                        <img className='max-h-80 w-full border border-2' src={tahminasKitchen1} alt="" />
                        <img className='max-h-80 w-full  border border-2' src={tahminasKitchen2} alt="" />
                    </div>
                <div>
                    <h1 className='text-center text-3xl font-bold text-blue-700 mt-12'>Tahmina,s Kitchen</h1>
                    <div className='text-blue-700 mb-12 text-center'>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://tahminas-kitchen.web.app/">Live Link <span className='ml-2'>|</span></a></u>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://github.com/Tahmina5447/Tahminas-Kitchen-Client"> Client-side Code <span className='ml-2'>|</span></a></u>
                        <u className='text-sm'><a target='_blank' href=" https://github.com/Tahmina5447/Tahminas-Kitchen-server"> Server-side Code</a></u>
                    </div>
                    <u><p className=' font-bold text-xl'>
                        It's a portfolio website. Feature of this website:
                        
                    </p></u>
                    <div>
                        <p>● A buyer can add reviews, Delete and edit her reviews and see others' reviews for specific item. You will see success message and error message. Website title is dynamic.</p><br />
                        <p>● You can see item details for specific items,You can add your items with picture and item details.I have added a loading system</p><br />
                        <p>● If you click on img of home page items it will popup,I have added firebase authentication system with email-password and Social login. Here has some private route that will not see anyone without login.</p>
                    </div>
                    <p className='font-bold my-6'><span className='text-blue-700 text-xl font-bold'>Uses Technologies: </span>React js, React-Photo-view, Node js, Express js, Jwt Token, Toast, React-router,Firebase, Tailwind css, Daisy UI, MongoDB, dotenv</p>
                </div>
            </div>

        </div>
    );
};

export default TahminasKitchen;