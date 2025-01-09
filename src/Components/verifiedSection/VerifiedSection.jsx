import React, { useEffect } from 'react'
import VerifyModal from '../verifyModal/VerifyModal'
import { useSelector } from "react-redux";
const VerifiedSection = () => {
  const isVerified = useSelector((state) => state?.auth?.isVerified)
  return (
    <>
    {
      !isVerified && (
    <div className='bg-[#E8FBFF] py-[40px] md:py-[100px]'>
        <div className="container mx-auto px-4">
            <div className='flex flex-col md:flex-row gap-10 justify-between items-center'>
                <h2 className='md:text-[37px] text-2xl font-bold'>Let Suppliers <span className='underline decoration-4 decoration-[#EB7150] underline-offset-8 '>Find You</span></h2>
                <VerifyModal />
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default VerifiedSection