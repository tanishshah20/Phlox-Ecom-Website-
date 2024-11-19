import React from 'react'

const DisplayCard = ({img,text1,text2}) => {
    return (
        <div className='h-max w-[300px] max-w-full m-1 p-1 flex justify-center items-center flex-row flex-nowrap'>
            <img src={img} className='text-xl' alt='Icon'/>
            <div className='m-2 h-max w-max'>
                <h2 className='h-max w-full text-lg font-poppins font-semibold'>{text1}</h2>
                <p className='h-max w-full text-sm font-poppins text-gray-400'>{text2}</p>
            </div>
        </div>
    )
}

export default DisplayCard
