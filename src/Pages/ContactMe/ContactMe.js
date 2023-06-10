import React from 'react';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com'

const ContactMe = () => {
    const sendMail=(event)=>{
        event.preventDefault();
        emailjs.sendForm(
            'service_30hhr8l',
             'template_tt60i2w',
             event.target,
             'xxN4Td1I1qd33-BHY'
             ).then(res=>console.log(res)).catch(err=>console.log(err))
             event.target.reset();
             toast.success('Email sent successfully')
        }
    return (
        <div className='bg-img ' id='contact'>
        <div className='py-12'>
            <h1 className='text-white font-bold text-center text-3xl'>Contact me</h1>
            <form onSubmit={sendMail}>
                <div className='w-2/5 mx-auto m-4'>
                    
                    <input name='email' className='my-2 py-1 border w-full text-center' type="email" placeholder='Your Email' required />
                    
                    <textarea className='w-full py-1 border text-center' name="message" type='text' placeholder='Message' required></textarea>

                </div>
                <div className='text-center'>
                        <button type='submit' className=' border border-white text-white py-2 px-8'>Send</button>
                    </div>
            </form>
        </div>
    </div>
    );
};

export default ContactMe;