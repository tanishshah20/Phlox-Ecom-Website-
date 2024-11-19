import React, { useState } from 'react'
import Brand from './component/Brand';
import Footer from './component/Footer';
import { Link } from 'react-router-dom';
import data from './data/BestProdData';
import BestProdCard from './component/BestProdCard';

const Shop = () => {
    const [min,setMin]=useState(0);
    const [max,setMax]=useState(0);
    return (
        <>
            <div className='h-max w-full max-w-full px-4 py-8 flex justify-center items-center flex-col bg-neutral-200 md:px-3 md:py-6 sm:px-3 sm:py-6'>
                <p className='h-max w-wax text-lg font-poppins font-light text-gray-500 m-1 sm:text-base'><Link to={"/"} className='hover:text-red-500 hover:underline'>Home</Link> &gt; Shop</p>
                <h1 className='h-max w-max text-3xl font-poppins font-bold m-1 sm:text-2xl'>Shop</h1>
            </div>

            <div>
                <div>
                    
                </div>
                <div className='h-max w-full max-w-full flex justify-evenly items-start mx-2 my-6 p-2 flex-row flex-wrap sm:p-1'>
                    {
                        data.map((item) => {
                            return (
                                <BestProdCard item={item} key={item.id}/>
                            )
                        })
                    }
                </div>
            </div>

            <Brand/>
            <Footer/>        
        </>
    )
}

export default Shop
