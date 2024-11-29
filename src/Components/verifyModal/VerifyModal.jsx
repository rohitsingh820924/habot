import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import PinInput from "react-pin-input";

const VerifyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData
      .getData("text")
      .split("")
      .filter((char) => !isNaN(char))
      .slice(0, 4);
    setOtp(pasteData.join(""));
  };

  const handleSubmit = () => {
    alert(`OTP Submitted: ${otp}`);
    // Add your OTP submission logic here (e.g., API call)
  };
  return (
    <>
      <Button type="primary" className='hover:!bg-[#EB7150] bg-transparent border border-[#EB7150] text-[#EB7150] font-bold text-sm text-lg rounded-md py-4 px-12 md:h-16 h-10' onClick={showModal}>
      Get Verified
      </Button>
      <Modal title="" centered open={isModalOpen} width={400} onCancel={handleCancel} footer={''}>
      <h1 className='font-bold text-center text-3xl mb-4'>Verify Account</h1>
      <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, perferendis.</p>
      <div className="flex flex-col items-center">
      <PinInput
        length={4}
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