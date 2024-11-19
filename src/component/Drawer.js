import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const Drawer = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-y-0 z-50 right-0 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out hidden md:block sm:block`}>
            <div className="p-4">
                <button onClick={onClose} className="mb-4">
                <IoMdClose className="text-2xl" />
                </button>
                <nav className="flex flex-col space-y-4">
                <NavLink to="/" className="text-base text-slate-400 font-poppins font-normal" onClick={onClose}>Home</NavLink>
                <NavLink to="/shop" className="text-base text-slate-400 font-poppins font-normal" onClick={onClose}>Shop</NavLink>
                <NavLink to="/about-us" className="text-base text-slate-400 font-poppins font-normal" onClick={onClose}>About Us</NavLink>
                <NavLink to="/blog" className="text-base text-slate-400 font-poppins font-normal" onClick={onClose}>Blog</NavLink>
                <NavLink to="/contact-us" className="text-base text-slate-400 font-poppins font-normal" onClick={onClose}>Contact Us</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Drawer;