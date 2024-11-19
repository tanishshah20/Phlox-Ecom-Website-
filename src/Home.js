import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import Brand from './component/Brand';
import Footer from './component/Footer';
import BlogCard from './component/BlogCard';
import SaleCard from './component/SaleCard';
import data from './data/BestProdData';
import BestProdCard from './component/BestProdCard';
import DisplayCard from './component/DisplayCard';
import GridCard from './component/GridCard';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const {user,userName,userEmail} = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <>
            { user &&
                <div className='h-max w-full max-w-full flex justify-start items-start px-4 py-1 flex-col flex-nowrap sm:px-3'>
                    <h1 className='text-4xl font-bold font-poppins mx-2 py-1 px-2 md:text-2xl md:py-0.5 sm:text-lg'>Hello, <spna className='text-red-500 italic'>{userName}</spna></h1>
                    <h5 className='text-xl font-normal font-poppins mx-2 py-1 px-2 md:text-base md:py-0.5 sm:text-xs'>Email: <spna className='italic'>{userEmail}</spna></h5>
                </div>
            }


            <div className='h-max w-full max-w-full px-8 py-4 sm:px-6 sm:py-3'>
                <div className='h-max w-full max-w-full bg-gradient-to-r from-[#DCDCDC] to-[#EEEEEE] rounded-2xl px-8 py-32 sm:px-6 sm:py-24'>
                    <div className='h-max w-full max-w-full m-2 p-2 flex justify-center items-start flex-col font-poppins relative'>
                        <img src='/img/home1.png' className='absolute scale-[1] z-0 w-full max-w-full left-0 sm:scale-[1.3]'/>
                        <h1 className='m-1 p-1 text-3xl font-medium md:text-xl sm:text-base'>Beats Solo</h1>

                        <h1 className='m-1 p-1 text-7xl font-bold md:text-5xl sm:text-2xl'>Wireless</h1>

                        <h1 className='m-1 p-1 w-full text-[12vw] text-white font-extrabold leading-[12vw] sm:text-3xl sm:leading-[2rem]'>HEADPHONE</h1>

                        <button className='m-1 z-10 px-14 py-2 text-lg bg-red-500 text-white rounded-full sm:text-base sm:px-10' onClick={()=>navigate("/shop")}>Shop</button>
                    </div>
                </div>
            </div>


            <div className='h-max w-full max-w-full px-8 py-4 sm:px-6 sm:py-3 grid grid-cols-4 grid-rows-2 grid-flow-row gap-4 md:grid-cols-2 md:grid-rows-4 sm:flex sm:justify-center sm:items-center sm:flex-col'>
                <GridCard text1="Enjoy" text2="With" text3="EARPHONE" img="/img/grid1.png" bgColor="#222222"/>
                <GridCard text1="New" text2="Wear" text3="GAD" img="/img/grid2.png" bgColor="#FEC62E"/>
                <GridCard text1="Trend" text2="Devices" text3="LAPTOP" img="/img/grid3.png" bgColor="#F42C37" className="col-span-2"/>
                <GridCard text1="Best" text2="Gaming" text3="CONSOLE" img="/img/grid4.png" bgColor="#DCDCDC" className="col-span-2"/>
                <GridCard text1="Play" text2="Game" text3="OCULUS" img="/img/grid5.png" bgColor="#2DD06F"/>
                <GridCard text1="New" text2="Amazon" text3="SPEAKER" img="/img/grid6.png" bgColor="#1479FF"/>
            </div>


            <div className='h-max w-full max-w-full flex justify-center items-center my-8 px-8 py-4 flex-row flex-wrap sm:px-6 sm:py-3'>
                <DisplayCard img="/img/delivery.svg" text1="Free Shipping" text2="Free Shipping On All Order"/>
                <DisplayCard img="/img/guarantee.svg" text1="Money Guarantee" text2="30 Day Money Back"/>
                <DisplayCard img="/img/support.svg" text1="Online Support 24/7" text2="Technical Support 24/7"/>
                <DisplayCard img="/img/wallet.svg" text1="Secure Payment" text2="All Cards Accepted"/>
            </div>


            <div className='h-max w-full max-w-full flex justify-center items-center my-6 px-8 py-4 flex-col flex-nowrap sm:px-6 sm:py-3'>
                <SaleCard img="/img/home2.png" name="FINE SMILE" bgColor="bg-gradient-to-r from-[#F42C37] via-[#D52630] to-[#F42C37]" btnColor="#F42C37"/>
            </div>


            <div className='h-max w-full max-w-full flex justify-center items-center my-16 p-4 flex-col flex-nowrap sm:p-3 sm:my-12'>
                <h1 className='h-max w-max text-3xl font-poppins font-bold m-1 p-1 sm:text-xl'>Best Seller Product</h1>
                <h5 className='h-max w-max text-base font-poppins m-1 p-1 text-gray-400 sm:text-sm'>There are many variations passages</h5>
                <div className='h-max w-full max-w-full flex justify-evenly items-start mx-2 my-6 p-2 flex-row flex-wrap sm:p-1'>
                    {
                        data.map((item) => {
                            return (
                                <BestProdCard item={item}/>
                            )
                        })
                    }
                </div>
            </div>
            
            
            <div className='h-max w-full max-w-full flex justify-center items-center my-6 px-8 py-4 flex-col flex-nowrap sm:px-6 sm:py-3'>
                <SaleCard img="/img/home3.png" name="HAPPY HOURSE" bgColor="bg-gradient-to-r from-[#2DCC6E] via-[#51EC90] to-[#2DCC6E]" btnColor="#2DCC6E"/>
            </div>
            

            <div className='h-max w-full max-w-full flex justify-center items-center my-6 p-4 flex-col flex-nowrap sm:p-3'>
                <h1 className='h-max w-max text-3xl font-poppins font-bold m-1 p-1 sm:text-xl'>Recent News</h1>
                <h5 className='h-max w-max text-base font-poppins m-1 p-1 text-gray-400 sm:text-sm'>There are many variations passages</h5>
                <div className='h-max w-full max-w-full m-2 p-2 flex justify-evenly items-center flex-row flex-wrap md:flex-col sm:flex-col'>
                    <BlogCard img="/img/blog1.jpg" id="1"/>
                    <BlogCard img="/img/blog2.jpg" id="2"/>
                    <BlogCard img="/img/blog3.jpg" id="3"/>
                </div>
            </div>

            <Brand/>
            <Footer/>
        </>
    )
}

export default Home
