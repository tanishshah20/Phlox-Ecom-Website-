import React from 'react'
import Brand from './component/Brand';
import Footer from './component/Footer';
import { Link, useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='h-max w-full max-w-full px-4 py-8 flex justify-center items-center flex-col bg-neutral-200 md:px-3 md:py-6 sm:px-3 sm:py-6'>
                <p className='h-max w-wax text-lg font-poppins font-light text-gray-500 m-1 sm:text-base'><Link to={"/"} className='hover:text-red-500 hover:underline'>Home</Link> &gt; Contact Us</p>
                <h1 className='h-max w-max text-3xl font-poppins font-bold m-1 sm:text-2xl'>Contact Us</h1>
            </div>

            <form className='h-max w-[600px] max-w-full flex justify-center items-start flex-col p-4 my-10 mx-auto sm:p-3' onSubmit={(event)=>{event.preventDefault();navigate("/")}}>
                <h1 className='h-max w-full text-3xl font-semibold font-poppins m-1 p-1 sm:text-2xl'>Get In Touch</h1>
                
                <input type='email' placeholder='Enter Your Email' className='h-max w-full bg-gray-200 px-4 py-2 mx-1 my-2 rounded-full text-lg font-poppins focus:outline-none sm:text-base' required/>

                <input type='text' placeholder='Phone Number' className='h-max w-full bg-gray-200 px-4 py-2 mx-1 my-2 rounded-full text-lg font-poppins focus:outline-none sm:text-base' required/>

                <textarea placeholder='Your Message Here' className='h-max w-full bg-gray-200 px-4 py-2 mx-1 my-2 rounded-xl text-lg font-poppins focus:outline-none sm:text-base' required/>

                <button type='submit' className='h-max w-max font-poppins text-base bg-red-500 rounded-full text-white m-1 px-6 py-2 sm:px-4 sm:py-2 sm:text-sm'>Submit</button>
            </form>

            <Brand/>
            <Footer/>
        </>
    )
}

export default ContactUs
