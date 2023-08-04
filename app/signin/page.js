import React from 'react'
import { FaFacebookF, FaLinkedinIn,  FaGoogle, FaEnvelope } from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';


function page() {
  return (
   
        <main className='flex flex-col items-center justify-center w-full flex-1 px-6 md:px-20 text-center min-h-screen py-2   '>

                {/* wraper div */}
            <div className='bg-primary flex flex-col md:flex-row rounded-2xl shadow-2xl   md:w-full md:max-w-4xl '>

                            {/* sign in section */}
                        <div className='w-full md:w-3/5 p-5 '>
                            <div className='font-bold text-center md:text-left'>
                            <span className='text-newback'>Company</span>Name
                            </div>

                            <div className='py-10'>
                                <h2 className='md:text-3xl text-2xl font-bold text-newback mb-2'>Sign in to Account</h2>

                                <div className='border-2 w-10 border-newback inline-block mb-2'></div>
                                {/* 
                                    Social media Section */}
                                    <div className='flex justify-center my-2'>
                                            <a href='#' className='border-2 border-[#edf2f7] rounded-full mx-1 p-2 '>
                                                <FaFacebookF className='text-sm' />
                                                
                                            </a>

                                            <a href='#' className='border-2 border-[#edf2f7] rounded-full mx-1 p-2 '>
                                                <FaGoogle className='text-sm' />
                                                
                                            </a>
                                            
                                            <a href='#' className='border-2 border-[#edf2f7] p-2 rounded-full mx-1'>
                                                <FaLinkedinIn className='text-sm' />
                                                
                                            </a>
                                     </div>
                                    <p className='text-[#4a5568] my-3 mt-4 md:mt-0'> Or use your E-mail account</p>

                                     <div className='flex flex-col items-center '>

                                            <div className='bg-[#edf2f7] w-64 p-2 flex items-center mb-3s mb-3'>
                                            <FaEnvelope className='text-[#a0aec0] mr-2'/>
                                            <input type='email' name='email' placeholder='Email' className='bg-[#edf2f7] outline-none text-sm flex-1  '/>
                                            </div>

                                            <div className='bg-[#edf2f7] w-64 p-2 flex items-center '>
                                            <MdLockOutline  className='text-[#a0aec0] mr-2'/>
                                            <input type='password' name='password' placeholder='Password' className='bg-[#edf2f7] outline-none text-sm flex-1  '/>
                                            </div>

                                            <div className='flex w-64 mb-5 justify-between mt-2 md:mt-0'>
                                                <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1'/>Remember me</label>
                                                <a href="#" className='text-xs'>Forgot Password</a>
                                            </div>
                                            <a href='#' className='border-2 border-[#48bb78] text-[#48bb78] rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-[#48bb78] hover:text-primary '>Sign In</a>


                                        </div>
                            </div>
                        </div>

                    {/* sign up section */}
                    <div className='w-full md:w-2/5 bg-newback text-primary rounded  md:rounded-tr-2xl md:rounded-br-2xl py-36 px-12'><p>Sign up Section</p>
                    <h2 className='text-3xl font-bold mb-2 '>Hello, David</h2>
                    <div className='border-2 w-10 border-primary inline-block mb-2'></div>
                    <p className='mb-10'>Fill up personal information and and start journey with us!</p>
                    <a href='#' className='border-2 border-primary rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-primary hover:text-newback '>Sign Up</a>

                </div>
            </div>

        </main>



   
  )
}

export default page