import React, { useContext } from 'react'
import { useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { AppContext } from '../AppContext';

const BestProdCard = ({item}) => {
    const { addToCart } = useContext(AppContext);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div key={item.id} className='h-max w-[300px] max-w-full m-1 p-1 flex justify-center items-start flex-col relative cursor-pointer'onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
            <img src={item.img} className='w-max max-w-full rounded-2xl'/>

            <h1 className={`h-max w-full m-1 p-1 font-poppins text-base sm:text-sm transition-all duration-300 ${isHovered? "text-lg sm:text-base font-semibold text-red-500":""}`}>{item.name}</h1>

            <h1 className='h-max w-full m-1 font-poppins font-medium text-lg sm:text-base flex justify-start items-center flex-row'>
                {
                    isHovered ? (
                        <button className='px-4 py-1 text-base bg-red-500 text-white rounded-full' onClick={() => addToCart(item)}>Add to cart</button>
                    ) : (
                        <>
                            <FaDollarSign />{item.price}
                        </>
                    )
                }
            </h1>

            {item.sale &&
                <div className='absolute top-2 left-2 bg-red-500 m-1 px-2 py-3  rounded-full text-white'>
                    <p className='text-sm font-poppins'>Sale!</p>
                </div>
            }
        </div>
    )
}

export default BestProdCard
