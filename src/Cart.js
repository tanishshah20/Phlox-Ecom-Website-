import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import { FaDollarSign } from "react-icons/fa";
import CartCard from './component/CartCard';

const Cart = () => {
    const {cartItems,setCartItems} = useContext(AppContext);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cartItems.reduce((total, item) => total + (item.quantity * item.price ), 0);
    return (
        <>
          <div className='h-max w-full max-w-full px-4 py-8 flex justify-center items-center flex-col bg-neutral-200 md:px-3 md:py-6 sm:px-3 sm:py-6'>
                <p className='h-max w-wax text-lg font-poppins font-light text-gray-500 m-1 sm:text-base'><Link to={"/"} className='hover:text-red-500 hover:underline'>Home</Link> &gt; Shop</p>
                <h1 className='h-max w-max text-3xl font-poppins font-bold m-1 sm:text-2xl'>Cart</h1>
            </div>

            <div className='h-max w-full my-6 px-4 py-8 flex justify-evenly items-start flex-row flex-wrap md:px-3 md:py-6 sm:px-3 sm:py-6 '>
                <div className='h-max w-[500px] max-w-full my-8 m-2 p-2 flex justify-center items-center flex-col flex-nowrap'>
                    {
                        cartItems.map((item)=>{
                            return(
                                <CartCard item={item}/>
                            )
                        })
                    }
                </div>
                
                <div className='h-max w-[300px] max-w-full m-2 my-10 p-2 font-poppins flex justify-center items-start flex-col flex-nowrap'>
                    <h1 className='h-max w-max text-xl font-medium sm:text-lg'>Your Cart</h1>
                    <h1 className='h-max w-max mb-2 text-4xl font-bold text-red-500 sm:text-2xl'>SUMMARY</h1>
                    <h1 className='h-max w-max text-xl font-medium my-1 py-1 sm:text-lg'>Total Item : {totalQuantity}</h1>
                    <h1 className='h-max w-max text-xl font-medium flex justify-center items-center flex-row flex-nowrap my-1 py-1 sm:text-lg'>Total Amount : <span><FaDollarSign/></span>{totalAmount}</h1>
                    <button className='h-max w-full text-xl font-medium sm:text-lg my-1 py-2 px-4 bg-red-500 text-white rounded-lg'>Checkout</button>
                </div>
            </div>



        </>
    )
}

export default Cart
