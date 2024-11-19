import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    function subcribe(event){
        event.preventDefault();
        //toast
        navigate("/blog");
    }

    return (
        <div className='h-max w-full max-w-full flex justify-center items-center flex-col flex-wrap'>
            <div className='h-max w-full max-w-full px-4 py-8 my-8 flex justify-between items-start flex-row flex-wrap'>

                <div className='h-max w-[200px] flex justify-center items-start flex-col flex-nowrap p-2'>
                    <img src='/img/logotype.png' alt='Logo' className='h-max w-max m-2 sm:m-1'/>
                    <p className='h-max w-full max-w-full mx-2 my-6 text-gray-400 font-poppins text-sm'>There are many variations passages of Lorem Ipsum available, but the majority have Lorem Ipsum</p>
                    <div className='h-max w-full m-2 flex justify-between items-center flex-row flex-nowrap text-base sm:m-1'>
                        <FaInstagram className='hover:text-red-500 hover:cursor-pointer'/>
                        <FaLinkedinIn className='hover:text-red-500 hover:cursor-pointer'/>
                        <FaFacebookF className='hover:text-red-500 hover:cursor-pointer'/>
                        <FaTwitter className='hover:text-red-500 hover:cursor-pointer'/>
                    </div>
                </div>

                <div className='h-max w-[200px] flex justify-center items-start flex-col flex-nowrap p-2'>
                    <h1 className='h-max w-full font-poppins font-semibold m-2'>Quick Links</h1>
                    <div className='h-max w-full flex justify-center items-start flex-col flex-nowrap m-2'>
                        <Link to={"/"} className='hover:text-red-500'>Home</Link>
                        <Link to={"/shop"} className='hover:text-red-500'>Shop</Link>
                        <Link to={"/about-us"} className='hover:text-red-500'>About Us</Link>
                        <Link to={"/blog"} className='hover:text-red-500'>Blog</Link>
                        <Link to={"/contact-us"} className='hover:text-red-500'>Contact Us</Link>
                    </div>
                </div>
                
                <div className='h-max w-[200px] flex justify-center items-start flex-col flex-nowrap p-2'>
                    <h1 className='h-max w-full font-poppins font-semibold m-2'>Contact</h1>
                    <p className='mx-2 my-1'>+99 (0) 101 0000 888 </p>
                    <p className='mx-2 my-1'> Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
                </div>
                
                <div className='h-max w-[450px] flex justify-center items-start flex-col flex-nowrap p-2'>
                    <h1 className='h-max w-full font-poppins font-semibold m-2'>Subscribe To Our Email</h1>
                    <h1 className='h-max w-full font-poppins text-3xl font-semibold m-2 md:text-2xl sm:text-2xl'>For Latest News & Updates</h1>

                    <form className='h-max w-full m-2 p-2 bg-gray-200 rounded-full flex justify-between items-center sm:m-1 sm:p-1' onSubmit={subcribe}>
                        <input type='email' placeholder='Enter Your Email' className='mx-2 my-1 p-1 h-max w-[60%] bg-gray-200 md:text-base sm:text-base focus:outline-none' required/>
                        <button type='submit' className='bg-red-500 hover:bg-black transition-all duration-300 shadow-[0_0_10px_#ef4444] hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] text-white font-poppins text-sm py-4 px-8 rounded-full md:py-2 md:px-4 sm:py-2 sm:px-4'>Subscribe</button>
                    </form>
                </div>

            </div>


            <div className='h-max w-full max-w-full p-4 flex justify-between items-center flex-row flex-wrap bg-black md:justify-center sm:justify-center sm:p-3'>
                <span className='h-max w-max m-1 p-1 text-sm text-gray-500 font-poppins  sm:text-xs'>&copy;2024 Phlox Digital Shop. All rights reserved.</span>
                <span className='h-max w-max m-1 p-1 text-sm text-gray-500 font-poppins  sm:text-xs'>Privacy Policy . Term Condition</span>
            </div>
        
        </div>
    )
}

export default Footer
