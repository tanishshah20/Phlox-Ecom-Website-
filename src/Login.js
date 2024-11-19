import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom';
import Brand from './component/Brand';
import Footer from './component/Footer';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {setUser,setUserName,setUserEmail} = useContext(AppContext);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    function changeName(event){
        setName(event.target.value);
    }
    function changeEmail(event){
        setEmail(event.target.value);
    }

    function setLogin(event){
        event.preventDefault();
        setUserName(name);
        setUserEmail(email);
        setUser(true);
        toast.success('Successfully logged in!');
        navigate("/");
    }

    return (
        <>
            <div className='h-max w-full max-w-full flex justify-center items-center px-4 py-20 flex-col flex-nowrap sm:px-3 sm:py-14'>

                <h1 className='text-2xl font-poppins font-semibold '>Login</h1>

                <form className='h-max w-[650px] max-w-full m-2 p-4 rounded-lg flex justify-center items-start flex-col sm:p-3' onSubmit={setLogin}>

                    <input type='text' id='text' value={name} onChange={changeName} className='h-max w-full font-poppins font-medium text-lg mx-1 my-2 px-2 py-1 rounded-full bg-gray-200 sm:text-base focus:outline-none' placeholder='Enter Name' required/>

                    <input type='email' id='email' value={email} onChange={changeEmail} className='h-max w-full font-poppins font-medium text-lg mx-1 my-2 px-2 py-1 rounded-full bg-gray-200 sm:text-base focus:outline-none' placeholder='Enter Email' required/>

                    <button type='submit' className='text-xl font-poppins font-semibold mx-1 my-2 px-4 py-1 rounded-full bg-red-500 text-center sm:text-lg'>Login</button>

                </form>
            </div>

            <Brand/>
            <Footer/>
        </>
    )
}

export default Login
