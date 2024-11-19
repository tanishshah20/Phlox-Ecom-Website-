import React from 'react'
import { useNavigate } from 'react-router-dom'

const GridCard = ({text1,text2,text3,img,bgColor,className}) => {
    const navigate = useNavigate();
    return (
        <div className={`h-full w-full font-poppins flex flex-col justify-between items-start px-6 pb-6 pt-24 rounded-xl text-white overflow-hidden relative transition-shadow duration-300 ${className}`}  
        style={{ backgroundColor: bgColor,boxShadow: 'none'}} 
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 20px ${bgColor}`}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
        >
            <img src={img} className='absolute z-0 right-0 top-0 scale-[1] sm:scale-[0.8]'/>

            <h1 className='m-0.5 p-1 font-medium text-lg sm:text-base'>{text1}</h1>
            
            <h1 className='m-0.5 p-1 font-semibold text-3xl sm:text-xl'>{text2}</h1>

            <h1 className='m-0.5 p-1 z-10 font-extrabold text-4xl opacity-[0.6] md:text-4xl sm:text-3xl'>{text3}</h1>

            <button className='m-1 z-10 px-8 py-2 text-base bg-white rounded-full' style={{color:bgColor}} onClick={()=>navigate("/shop")}>Browse</button>
        </div>
    )
}

export default GridCard
