import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Back() {
    const navigate = useNavigate()
  return (
    <div>
        <button
        onClick={()=> navigate(-1)}
        className='border-2 z-10 border-yellow-400 absolute top-[140px] right-5 cursor-pointer bg-[#000524] text-white text-2xl p-2  rounded-3xl content-center text-center'
        ><FaArrowCircleRight/>
        
        </button>
    </div>
  )
}

export default Back;