import React from 'react'
import Brand from './component/Brand';
import Footer from './component/Footer';
import { Link } from 'react-router-dom';
import BlogCard from './component/BlogCard';
import data from './data/BlogData'

const Blog = () => {
    return (
        <>
            <div className='h-max w-full max-w-full px-4 py-8 flex justify-center items-center flex-col bg-neutral-200 md:px-3 md:py-6 sm:px-3 sm:py-6'>
                <p className='h-max w-wax text-lg font-poppins font-light text-gray-500 m-1 sm:text-base'><Link to={"/"} className='hover:text-red-500 hover:underline'>Home</Link> &gt; BLog</p>
                <h1 className='h-max w-max text-3xl font-poppins font-bold m-1 sm:text-2xl'>Blog</h1>
            </div>

            <div className='h-max w-full max-w-full flex justify-evenly items-center flex-row flex-wrap my-6 p-2'>
                {
                    data.map((item) => {
                        return (
                            <BlogCard img={item.img} id={item.id}/>
                        )
                    })
                }
            </div>

            <Brand/>
            <Footer/>
        </>
    )
}

export default Blog
