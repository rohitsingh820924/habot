import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import PinInput from "react-pin-input";
import { apiPost } from '../../libs/api';
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginOpen } from '../../libs/store/features/loginSlice';

const VerifyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email)
  const isAuth = useSelector((state) => state.auth.isAuth)
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
        setIsModalOpen(false);
        alert('true')
      } else {
      }
     } catch (error) {
      alert('false')
     }
  };
  return (
    <>
      <Button type="primary" className='hover:!bg-[#EB7150] bg-transparent border border-[#EB7150] text-[#EB7150] font-bold text-sm rounded-md py-4 px-12 md:h-16 h-10' onClick={isAuth ? showModal : () => dispatch(setIsLoginOpen(true))}>
      Get Verified
      </Button>
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
    </>
  );
};
export default VerifyModal;