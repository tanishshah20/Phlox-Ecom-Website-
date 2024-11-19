import React, { useContext } from 'react'
import { FaDollarSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AppContext } from '../AppContext';

const CartCard = ({item}) => {
    const {removeFromCart,incQuantity,decQuantity} = useContext(AppContext);


    return (
        <div className='h-max w-full m-2 p-2 flex justify-between items-start flex-row flex-wrap' key={item.id}>
            <img src={item.img} alt={item.name} className='rounded-2xl w-[200px]'/>
            <div className='h-max w-[200px] max-w-full flex justify-start items-start flex-col flex-nowrap font-poppins'>
                <h1 className='h-max w-full text-xl mx-1 font-medium sm:text-lg'>{item.name}</h1>
                <h1 className='h-max w-max text-xl font-medium flex justify-center items-center flex-row flex-nowrap my-1 py-1 sm:text-lg'><span><FaDollarSign/></span>{item.price}</h1>
                <div className='h-max w-full max-w-full my-2 flex justify-evenly items-center flex-row flex-nowrap'>
                    <button className='text-white cursor-pointer px-3 py-1 rounded-full bg-red-500' onClick={()=>decQuantity(item.id)}>-</button>
                    <p>{item.quantity}</p>
                    <button className='text-white cursor-pointer px-3 py-1 rounded-full bg-red-500' onClick={()=>incQuantity(item.id)}>+</button>
                </div>
                <button className='text-2xl' onClick={()=>(removeFromCart(item.id))}><MdDelete/></button>
            </div>
        </div>
    )
}

export default CartCard
