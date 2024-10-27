import React from 'react'

const VerifiedSection = () => {
  return (
    <div className='bg-[#E8FBFF] py-[40px] md:py-[100px] md:mt-[140px] mt-[40px]'>
        <div className="container mx-auto px-4">
            <div className='flex flex-col md:flex-row gap-10 justify-between items-center'>
                <h2 className='md:text-[37px] text-2xl font-bold'>Let Suppliers <span className='underline decoration-4 decoration-[#EB7150] underline-offset-8 '>Find You</span></h2>
                <a href="#" className='bg-[#EB7150] text-white font-bold text-lg rounded-md py-4 px-12'>Get Verified</a>
            </div>
        </div>
    </div>
  )
}

export default VerifiedSection