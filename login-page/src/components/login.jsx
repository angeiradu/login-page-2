import React from 'react'
import { SiBackbonedotjs } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaCheckSquare } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Connect from '../assets/connect.png'

const login = () => {
  return (
    <div className='bg-[#d5dbe1] p-3 lg:p-[25px] xl:p-[25px] md:p-[25px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-2'>
            <div className='bg-[#ffffff] md:rounded-l-[10px] lg:rounded-l-[10px] xl:rounded-l-[10px] w-full p-[10px] lg:p-[120px] xl:p-[120px]'>
              <div className='flex gap-2 text-blue-600 font-bold'>
                <div className='pt-1'><SiBackbonedotjs /></div>
                <div>dotwork</div>
              </div>
              <h1 className='pt-4 font-bold text-xl'>Login in to your Account</h1>
              <p className='text-[#7d818c] text-sm pt-4 pb-10'>Welcome back! Select method to login:</p>

              <div className='flex gap-4'>
              <div className='flex  gap-2 w-full bg-white text-gray-800 font-semibold py-2 px-8  border border-gray-400 rounded shadow" '>
                  <div className='pt-1'><FaGoogle /></div>
                  <button >
                    Google
                  </button>
              </div>
              <div className='flex  gap-2 w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8  border border-gray-400 rounded shadow" '>
                  <div className='pt-1  text-blue-600'><FaFacebook /></div>
                  <button >
                    Facebook
                  </button>
              </div>
            </div>
            <div className='flex gap-2 pt-5'>
             <div className=' bg-gray-300 w-full h-[2px] mt-3'></div>
             <div className='w-[700px] md:w-[690px] lg:w-[560px] xl:w-[560px]'> or continue with email</div>
             <div className=' bg-gray-300 w-full h-[2px] mt-3'></div>
            </div>

            <div className='space-y-[13px] pt-5'>
            <div className='flex  gap-2 w-full bg-[#fafbfe] hover:bg-gray-100 text-[#808ea5] font-semibold py-1 px-5  border border-gray-400 rounded shadow" '>
                  <div className='pt-1 '><MdOutlineMail /></div>
                    <input type='text' name='email' placeholder='Email' />
            </div>

            <div className='pt-5'>
            <div className='flex gap-2 w-full hover:bg-gray-100 text-[#808ea5] font-semibold py-1 px-5  border border-gray-400 rounded shadow" '>
                  <div className='pt-1 '><RiLockPasswordLine /></div>
                  <input type='text' name='email' placeholder='Password' />
                  <div className='text-left pt-1'><FaRegEyeSlash /></div>
            </div>
            </div>
            </div>
            <div className='flex gap-20 pb-10 pt-3 '>
              <div className='flex gap-2'>
                <div className='text-[#065ad8]'>
                <FaCheckSquare />
                </div>
                <div className='text-sm text-[#808ea5]'>Remember me</div>
              </div>
              <div className='text-sm text-[#065ad8] font-bold '>forgot Password?</div>
            </div>

            
            <button className='text-center w-full bg-[#065ad8]  text-[#ffffff]  font-semibold py-2   border border-gray-400 rounded shadow'>
                     Log in
            </button>
            <div className='pt-10 text-sm text-[#838691] text-center '>Do you have an account? <span className='text-[#065ad8]'>Create an account</span></div>

          </div>
              
            <div className='bg-[#065ad8] md:rounded-r-[10px] lg:rounded-r-[10px] xl:rounded-r-[10px] p-[10px]  lg:p-[100px] xl:p-[100px] text-center'>
              <img className='mt-[10px]' src={Connect} alt="" />
              <div className='pt-[95px]'>
                  <h2 className='text-xl font-bold text-white'>Connect with every Application</h2>
                  <p className='text-white'>Everything you need in an easyily customizable dashboard.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default login