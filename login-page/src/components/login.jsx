import React from 'react'
import { SiBackbonedotjs } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaCheckSquare } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const login = () => {
  return (
    <div className='bg-[#d5dbe1] h-full py-20' >
        <div className='grid grid-cols-2 py-2 px-[50px]' >
            <div className='bg-[#ffffff] rounded-l-[10px] p-20'>
              <div className='flex gap-2 text-blue-600 font-bold'>
                <div className='pt-1'><SiBackbonedotjs /></div>
                <div>dotwork</div>
              </div>
              <h1 className='pt-4 font-bold text-xl'>Login in to your Account</h1>
              <p className='text-[#7d818c] text-sm pt-4 pb-10'>Welcome back! Select method to login:</p>

              <div className='flex gap-4'>
              <div className='flex  gap-2 w-[150px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8  border border-gray-400 rounded shadow" '>
                  <div className='pt-1'><FaGoogle /></div>
                  <button >
                    Google
                  </button>
              </div>
              <div className='flex  gap-2 w-[150px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8  border border-gray-400 rounded shadow" '>
                  <div className='pt-1  text-blue-600'><FaFacebook /></div>
                  <button >
                    Facebook
                  </button>
              </div>
            </div>
            <div className='flex'>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[70px]'></hr>
            <p className='pt-5 px-2'>or continue with email</p>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[70px]'></hr>
            </div>

            <div className='space-y-[13px]'>
            <div className='flex  gap-2 w-[315px] bg-[#fafbfe] hover:bg-gray-100 text-[#808ea5] font-semibold py-1 px-5  border border-gray-400 rounded shadow" '>
                  <div className='pt-1 '><MdOutlineMail /></div>
                    <input type='text' name='email' placeholder='Email' />
            </div>

            <div className='flex gap-2 w-[315px]  hover:bg-gray-100 text-[#808ea5] font-semibold py-1 px-5  border border-gray-400 rounded shadow" '>
                  <div className='pt-1 '><RiLockPasswordLine /></div>
                  <input type='text' name='email' placeholder='Password' />
                  <div className='pl-10 pt-1'><FaRegEyeSlash /></div>
            </div>
            </div>
            <div className='flex gap-20 pb-10 pt-2'>
              <div className='flex gap-2'>
                <div className='text-[#065ad8]'>
                <FaCheckSquare />
                </div>
                <div className='text-sm text-[#808ea5]'>Remember me</div>
              </div>
              <div className='text-sm text-[#065ad8] font-bold'>forgot Password?</div>
            </div>

            <div className='flex w-[315px] bg-[#065ad8]  text-[#ffffff] px-32 font-semibold py-1   border border-gray-400 rounded shadow" '>
                    <button>
                     Log in
                    </button>
            </div>
            <div className='pt-10 text-sm text-[#838691] px-6'>Do you have an account? <span className='text-[#065ad8]'>Create an account</span></div>

          </div>
              
            <div className='bg-[#065ad8] rounded-r-[10px] p-20'>
                <h1>bghyguu</h1>
            </div>
        </div>
    </div>
  )
}

export default login