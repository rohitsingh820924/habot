import React from 'react'
import { GrGoogle } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SocialLogin = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google';
      };
    
      const handleFacebookLogin = () => {
        window.location.href = 'http://localhost:5000/auth/facebook';
      };
    
      const handleLinkedInLogin = () => {
        window.location.href = 'http://localhost:5000/auth/linkedin';
      };
  return (
    <>
        <p className='text-center my-5'>or use a social network</p>
       <div className='flex justify-center items-center gap-5'>
            <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group' onClick={handleGoogleLogin}><GrGoogle className='text-secondary group-hover:text-white transition-all' /></div>
            <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group' onClick={handleFacebookLogin}><FaFacebookF className='text-secondary group-hover:text-white transition-all' /></div>
            <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group' onClick={handleLinkedInLogin}><FaLinkedinIn className='text-secondary group-hover:text-white transition-all' /></div>
        </div>
    </>
  )
}

export default SocialLogin