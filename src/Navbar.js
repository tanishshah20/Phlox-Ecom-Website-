import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { AppContext } from './AppContext';
import Drawer from './component/Drawer';
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user,setUser,cartItems} = useContext(AppContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    function logout(){
        toast.success("Successfully logged out!")
        setUser(false)
    }
    function menu(){
        setIsDrawerOpen(!isDrawerOpen);
    }
    return (
        <>
            <div className='h-max w-full max-w-full flex justify-between items-center p-4 flex-row flex-nowrap sm:p-3'>
                <div className='h-max w-max max-w-full flex justify-evenly items-center m-2 p-2 flex-row sm:m-1 sm:p-1'>
                    <Link to={"/"}><img src='/img/logotype.png' alt='Logo' className='h-max w-max my-2 mx-6 sm:m-1'/></Link>
                    <NavLink to={"/"} className='text-base text-slate-400 font-poppins font-normal m-2 mx-4 md:hidden sm:hidden'>Home</NavLink>
                    <NavLink to={"/shop"} className='text-base text-slate-400 font-poppins font-normal m-2 mx-4 md:hidden sm:hidden'>Shop</NavLink>
                    <NavLink to={"/about-us"} className='text-base text-slate-400 font-poppins font-normal m-2 mx-4 md:hidden sm:hidden'>About Us</NavLink>
                    <NavLink to={"/blog"} className='text-base text-slate-400 font-poppins font-normal m-2 mx-4 md:hidden sm:hidden'>Blog</NavLink>
                    <NavLink to={"/contact-us"} className='text-base text-slate-400 font-poppins font-normal m-2 mx-4 md:hidden sm:hidden'>Contact Us</NavLink>

                </div>
                <div className='h-max w-max max-w-full flex justify-evenly items-center m-2 p-2 flex-row sm:m-1 sm:p-1'>
                    <div className='relative'>
                        <Link to={"/cart"}><BsCart3 className='text-2xl cursor-pointer m-2 mx-4 sm:text-lg sm:mx-3' title='Cart'/></Link>
                        <span className='absolute top-0 right-1 text-base px-[5px] rounded-3xl bg-red-500 sm:text-xs'>{totalQuantity}</span>
                    </div>
                    { user? (
                        <Link to={"/"}><CiLogout className='text-2xl cursor-pointer m-2 mx-4 sm:text-lg sm:mx-3' title='logout' onClick={logout}/></Link>
                        ):(
                        <Link to={"/login"}><CiLogin className='text-2xl cursor-pointer m-2 mx-4 sm:text-lg sm:mx-3' title='login'/></Link>
                        )
                    }
                    <IoIosMenu className='text-2xl cursor-pointer m-2 mx-4 sm:text-lg sm:mx-3 hidden md:block sm:block' onClick={menu}/>
                </div>
            </div>
            <Drawer isOpen={isDrawerOpen} onClose={menu} />
        </>
    )
}

export default Navbar
