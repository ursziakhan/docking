"use client"
import Link from 'next/link';
import React, { SyntheticEvent, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [companyId, setCompanyId] = useState('');

    const submit = async (e) => {
        e.preventDefault(); // Prevent form submission and page refresh
    
        try {
            const response = await fetch('http://localhost:5000/api/Users/RegisterUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    gender,
                    address,
                    userAvatar,
                    companyId
                })
            });
    
            if (response.ok) {
                // Handle successful registration here
                console.log('Registration successful');
    
                // Use .json() to parse the response body as JSON
                const responseBody = await response.json();
                console.log(responseBody);
            } else {
                // Handle failed registration here
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <main className='flex flex-col items-center justify-center w-full text-center py-2 bg-[#faf7f2] ' style={{ backgroundImage: "url('/images/docks.jpg')" }}>
          
            <form onSubmit={submit} className='w-full flex justify-center '>
                <div className='bg-[#1a1a64]  flex flex-col md:flex-row rounded-2xl shadow-2xl m-20 '>
                    <div className='flex justify-center item-center px-20 py-10'>
                    
                        <div className=''>
                            <h2 className='md:text-3xl text-2xl font-bold text-primary mb-2 '>Sign Up</h2>
                            <div className='border-2 w-10 border-primary inline-block '></div>
                            <div className='flex flex-col items-center pt-10'>
                                <div className='bg-[#edf2f7] w-72 p-2 flex items-center mb-4 rounded'>
                                    <FaEnvelope className='text-[#a0aec0] mr-2'/>
                                    <input type='email' name='email' placeholder='Email' onChange={e => setEmail(e.target.value)} className='bg-[#edf2f7]  outline-none text-sm flex-1' />
                                </div>
                                <div className='bg-[#edf2f7] w-72 p-2 flex items-center mb-4 rounded '>
                                    <MdLockOutline  className='text-[#a0aec0] mr-2'/>
                                    <input type='password' name='password' placeholder='Password'  onChange={e => setPassword(e.target.value)} className='bg-[#edf2f7] outline-none text-sm flex-1' />
                                </div>
                             
                                <input type='text' name='firstName' placeholder='First Name' onChange={e => setFirstName(e.target.value)} className='bg-[#edf2f7] w-72 p-2 flex items-center mb-4 rounded' />
                                <input type='text' name='lastName' placeholder='Last Name' onChange={e => setLastName(e.target.value)} className='bg-[#edf2f7] w-72 p-2 flex items-center mb-4 rounded' />
                                <input type='text' name='gender' placeholder='Gender' onChange={e => setGender(e.target.value)} className='bg-[#edf2f7] w-72 p-2 flex items-center mb-4 rounded'/>
                                <input type='text' name='address' placeholder='Address' onChange={e => setAddress(e.target.value)} className='bg-[#edf2f7] w-72 p-2 flex items-center mb-4 rounded' />
                                <input type='text' name='userAvatar' placeholder='User Avatar' onChange={e => setUserAvatar(e.target.value)} className='bg-[#edf2f7] w-72 p-2 flex items-center mb-4 rounded' />
                                <input type='text' name='companyId' placeholder='Company ID' onChange={e => setCompanyId(e.target.value)} className='bg-[#edf2f7] w-72 p-2 flex items-center mb-4 rounded' />
                                <button className='border-2 mt-6 border-primary text-primary rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-primary hover:text-optional' type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </form>
        </main>
    );
};

export default Page;