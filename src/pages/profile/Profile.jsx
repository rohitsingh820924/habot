import React, { useState } from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import PinInput from "react-pin-input";
import { apiPost } from '../../libs/api';
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginOpen } from '../../libs/store/features/loginSlice';
import { setProfile } from '../../libs/store/features/authSlice';



export const Profile = () => {
      const {fullname, email, phoneNumber, country, isVerified, profilePicture,} = useSelector((state) => state.auth)
      const navigate = useNavigate();
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [otp, setOtp] = useState("");
      const dispatch = useDispatch();
      const showModal = async () => {
        try {
          const response = await apiPost('http://localhost:5000/auth/send-verification-email', {email})
          if (response.status) {
          } else {
            setIsModalOpen(true);
            alert('true')
          }
         } catch (error) {
          alert('false')
         }
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    
      const handlePaste = (e) => {
        const pasteData = e.clipboardData
          .getData("text")
          .split("")
          .filter((char) => !isNaN(char))
          .slice(0, 6);
        setOtp(pasteData.join(""));
      };
    
      const handleSubmit = async() => {
        alert(`OTP Submitted: ${otp}`);
        try {
          const response = await apiPost('http://localhost:5000/auth/verify-email', {otp, email})
          if (response.status) {
            dispatch(setProfile())
            setIsModalOpen(false);
            alert('true')
          } else {
          }
         } catch (error) {
          alert('false')
         }
      };
  return (
    <div className=''>
        <div className="container mx-auto min-h-[calc(100svh-200px)] py-24 flex items-center justify-center">
            <div className='max-w-lg w-full p-5 rounded-2xl border flex items-center flex-col gap-5 relative'>
                <div className='w-[120px] p-1 rounded-full border relative'>
                    <img src={profilePicture ? profilePicture : "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="w-full h-auto object-cover rounded-full aspect-square" alt="" />
                </div>
                <h1 className='text-xl font-semibold text-primary'>{fullname} {isVerified && (<RiVerifiedBadgeFill className='text-secondary inline-block' />)}</h1>
                <div className='w-full'>
                    <div className='flex justify-between items-center text-sm font-medium border-t p-3'><p>Phone Number</p><span className='text-secondary'>{phoneNumber ? phoneNumber : "______"}</span></div>
                    <div className='flex justify-between items-center text-sm font-medium border-t p-3'><p>Email</p><span className='text-secondary'>{email} {!isVerified && <button onClick={showModal} className='border rounded-full px-3 py-1 ml-2 text-xs border-primary text-primary'>Verify</button>}</span></div>
                    <div className='flex justify-between items-center text-sm font-medium border-t p-3 pb-0'><p>Country</p><span className='text-secondary'>{country ? country : '__'}</span></div>
                </div>
                <div onClick={() => navigate("/edit-profile")} className="absolute -right-4 -top-4 w-10 h-10 rounded-full bg-primary hover:bg-primary/80 transition-all flex items-center justify-center drop-shadow">
                    <FaRegEdit color='#FFFFFF' />
                </div>
                </div>
        </div>
        <Modal title="" centered open={isModalOpen} width={400} onCancel={handleCancel} footer={''}>
      <h1 className='font-bold text-center text-3xl mb-4'>Verify Account</h1>
      <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, perferendis.</p>
      <div className="flex flex-col items-center">
      <PinInput
        length={6}
        type="numeric"
        inputStyle={{
          borderColor: "gray",
          borderRadius: "5px",
          width: "50px",
          height: "50px",
        }}
        style={{
            display: "flex",
            gap: "10px",
        }}
        inputFocusStyle={{
          borderColor: "#00732f",
        }}
        value={otp}
        onChange={(value) => setOtp(value)}
        onComplete={(value) => setOtp(value)}
        onPaste={handlePaste}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 -mb-3 px-4 py-2 bg-primary text-white rounded"
      >
        Submit
      </button>
    </div>
      </Modal>
    </div>
  )
}
