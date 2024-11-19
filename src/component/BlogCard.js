import React from 'react'

const BlogCard = ({img,id}) => {
    return (
        <div key={id} className='h-max w-[400px] max-w-full flex justify-center items-start flex-col flex-nowrap border-2 border-gray-200 m-2 p-2 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] md:w-[350px] sm:w-[300px]'>

            <img src={img} className='w-full rounded-xl'/>

            <p className='h-max w-full mx-1 my-2 font-poppins text-lg text-gray-500 sm:text-base'>October 5, 2019 • by Paul</p>

            <h1 className='h-max w-full mx-1 my-2 font-poppins text-xl font-semibold sm:text-lg'>How to choose perfect gadgets</h1>

            <p className='h-max w-full mx-1 my-2 font-poppins text-base text-gray-700 sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    )
}

export default BlogCard
