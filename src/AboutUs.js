import React from 'react'
import Brand from './component/Brand';
import Footer from './component/Footer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <div className='h-max w-full max-w-full px-4 py-8 flex justify-center items-center flex-col bg-neutral-200 md:px-3 md:py-6 sm:px-3 sm:py-6'>
                <p className='h-max w-wax text-lg font-poppins font-light text-gray-500 m-1 sm:text-base'><Link to={"/"} className='hover:text-red-500 hover:underline'>Home</Link> &gt; About Us</p>
                <h1 className='h-max w-max text-3xl font-poppins font-bold m-1 sm:text-2xl'>About Us</h1>
            </div>

            <div className='h-max w-full max-w-full p-2 my-8 flex justify-evenly items-center flex-row flex-wrap-reverse'>
                <div className='h-max w-[45%] max-w-full flex justify-center items-start flex-col flex-nowrap md:w-full sm:w-full'>
                    <p className='h-max w-full text-red-500 font-poppins text-lg m-1 p-1 sm:text-base'>Welcome To Phlox</p>
                    <h1 className='h-max w-full font-poppins font-semibold text-6xl m-1 p-1 sm:text-4xl'>Who We Are ?</h1>
                    <p className='h-max w-full font-poppins text-base m-1 p-1 sm:text-sm'>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me.</p>
                    <p className='h-max w-full font-poppins text-base m-1 p-1 sm:text-sm'>When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence .</p>
                    <Link to={"/contact-us"} className='h-max w-max font-poppins text-base bg-red-500 rounded-full text-white m-1 px-8 py-4 sm:px-4 sm:py-2 sm:text-sm'>Contact Us</Link>
                </div>
                <div className='h-max w-[45%] max-w-full m-2 p-2 md:w-full sm:w-full'>
                    <img src='/img/about.jpeg' alt='team' className='w-full rounded-2xl border-2 border-white shadow-[0_0_20px_rgba(0,0,0,0.3)]'/>
                </div>
            </div>
            
            <Brand/>
            <Footer/>
        </>
    )
}

export default AboutUs
