import React from 'react'
import Navbar from './Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import AboutUs from './AboutUs'
import Blog from './Blog'
import ContactUs from './ContactUs'
import Login from './Login'
import Cart from './Cart'
import Error from './Error'


const App = () => {
    return (
        <div className='min-h-screen max-w-screen m-0 p-0 overflow-x-hidden overflow-y-auto'>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </div>
    )
}

export default App
