import React from 'react';
import { Link } from 'react-router-dom';
import comfortZone from '../../Images/comfortZone.png'
import ss1 from '../../Images/comfortZone/ss1.png'
import ss2 from '../../Images/comfortZone/ss2.png'

const ComfortZone = () => {
    return (
        <div className='my-20'>
            <div className=' lg:w-3/5 mx-auto border p-6'>
                
                    <div className='grid lg:grid-cols-3 w-full gap-6'>
                        <img className='max-h-80 w-full border border-2' src={comfortZone} alt="" />
                        <img className='max-h-80 w-full border border-2' src={ss2} alt="" />
                        <img className='max-h-80 w-full  border border-2' src={ss1} alt="" />
                    </div>
                    
               
                <div>
                    <h1 className='text-center text-3xl font-bold text-blue-700 mt-12'>Comfort Zone</h1>
                    <div className='text-blue-700 mb-12 text-center'>
                        <u className='mr-2 text-sm'><a target='_blank' href=" https://comfort-zone-2f181.web.app/">Live Link <span className='ml-2'>|</span></a></u>
                        <u className='mr-2 text-sm'><a target='_blank' href="https://github.com/Tahmina5447/Comfort-zone-client"> Client-side Code <span className='ml-2'>|</span></a></u>
                        <u className='text-sm'><a target='_blank' href="https://github.com/Tahmina5447/comfort-zone-server"> Server-side Code</a></u>
                    </div>
                    <u><p className=' font-bold text-xl'>
                        It's a e-commerce website. Feature of this website:
                        
                    </p></u>
                    <div>
                        <p>● I have added dashboard specific by admin, buyer and seller.Admin can see only her/his dashboard here has all buyer list and all seller list. Admin can delete any buyer or seller.You will see success message and error message.</p><br />
                        <p>● Product will show by categoryWhen anyone will registration on this website the man can select that he is a buyer or seller. Everybody can see product details. Seller can add their products for sell. I have added a loading system</p><br />
                        <p>● Seller can see a dashboard and here has add product and a product route where the seller can see the product that he added. Buyer can see his product only that he booked. Here has some private route that will not see anyone without login.</p>
                    </div>
                    <p className='font-bold my-6'><span className='text-blue-700 text-xl font-bold'>Uses Technologies: </span>React js,Tailwind, Daisy ui, React-dom, React-hook-form,MongoDB, Firebase, Node js, Express js, Jwt Token, dotenv, Toast</p>
                </div>
            </div>

        </div>
    );
};

export default ComfortZone;