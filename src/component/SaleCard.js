import React from 'react'
import { useNavigate } from 'react-router-dom'

// background: linear-gradient(90deg, #F42C37 0%, #D52630 50%, #F42C37 100%);
// bg-gradient-to-r from-[#F42C37] via-[#D52630] to-[#F42C37]
// background: linear-gradient(90deg, #2DCC6E 0%, #51EC90 50%, #2DCC6E 100%);
// bg-gradient-to-r from-[#2DCC6E] via-[#51EC90] to-[#2DCC6E]
const SaleCard = ({img,name,bgColor,btnColor}) => {
    const navigate = useNavigate();
    return (
        <div className={`h-max w-full max-w-full flex justify-evenly items-center flex-row flex-wrap m-2 mt-10 px-2 py-14 ${bgColor} rounded-2xl md:py-12 sm:py-10`}>
            <div className='h-max w-[400px] max-w-full m-2 p-2 flex justify-center items-start flex-col flex-nowrap text-white relative md:items-center sm:items-center'>
                <img src={img} className='absolute z-0 w-full scale-[1.8] -right-20 bottom-0 md:scale-[1.4] md:right-0 sm:scale-[0.8] sm:left-0 sm:bottom-24'/>
                <p className='h-max w-max m-1 p-1 font-poppins text-base md:text-sm sm:text-xs'>20 % OFF</p>
                <h1 className='h-max w-full font-poppins font-bold text-8xl md:text-6xl sm:text-5xl sm:text-center'>{name}</h1>
                <p className='h-max w-max m-1 p-1 font-poppins text-base md:text-sm sm:text-xs'>15 Nov To 7 Dec</p>
            </div>

            <div className='h-max w-[400px] max-w-full m-2 p-2 flex justify-center items-start flex-col flex-nowrap text-white'>
                <h1 className='h-max w-max m-1 p-1 text-base font-poppins font-semibold md:text-sm sm:text-xs'>Beats Solo Air</h1>
                <h1 className='h-max w-full m-1 p-1 text-5xl font-poppins font-bold md:text-4xl sm:text-3xl'>Summer Sale</h1>
                <p className='h-max w-full m-1 p-1 font-poppins text-base md:text-sm sm:text-xs'>Company that’s grown from 270 to 480 employees in the last 12 months.</p>
                <button className={`h-max w-max z-10 m-1 px-8 py-2 bg-white rounded-full font-poppins sm:py-1 sm:px-6`} style={{ color: btnColor }} onClick={()=> navigate("/shop")}>Shop</button>
            </div>
        </div>
    )
}

export default SaleCard
