import React, { useState } from 'react';
import { enqueueSnackbar, closeSnackbar } from 'notistack'
import { Button, Modal, Input } from 'antd';
import { useFormik } from "formik";
import * as Yup from "yup"
import { checkAuthStatus, setProfile } from '../../libs/store/features/authSlice';
import Cookies from 'js-cookie'

import { useSelector, useDispatch } from 'react-redux'
import { setIsLoginOpen } from '../../libs/store/features/loginSlice';

import { IoCloseOutline } from "react-icons/io5";
import ShowPassword from '../ShowPassword';
import ReactFlagsSelect from "react-flags-select";
import { apiPost } from '../../libs/api';
import PinInput from "react-pin-input";
import SocialLogin from '../socialLogin/SocialLogin';

const LoginModal = () => {
  const [isLogin, setIsLogin] = useState(1);
  const [otp, setOtp] = useState(1);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);

  const isModalOpen = useSelector((state) => state.login.value)
  const dispatch = useDispatch()

  const formikLogin = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
       try {
        const response = await apiPost('/auth/login', values)
        if (response.token) {
          const token = JSON.stringify({ jwt: response.token });
          Cookies.set('authToken', token, { path: '/' });
          dispatch(checkAuthStatus());
          dispatch(setProfile());
          enqueueSnackbar('LogIn Successful!', {
            variant: 'success',
            action: (key) => (
              <IoCloseOutline
                onClick={() => closeSnackbar(key)} 
                color="white"
                size={"24px"}
              >
              </IoCloseOutline>
            ),
          });
          dispatch(setIsLoginOpen(false));
        } else {
          console.log(response.data.message);
        }
       } catch (error) {
        console.log("Error",error)
        enqueueSnackbar('LogIn Failed!', {
          variant: 'error',
          action: (key) => (
            <IoCloseOutline
              onClick={() => closeSnackbar(key)} 
              color="white"
              size={"24px"}
            >
            </IoCloseOutline>
          ),
        });
       }
    },
  });

  const formikSignup = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      country: "IN",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
       phoneNumber: Yup.string()
        .required("Number is required"),
    }),
    onSubmit: async(values) => {
      try {
        const response = await apiPost('/auth/signup', values)
        if (response.token) {
          const token = JSON.stringify({ jwt: response.token });
          Cookies.set('authToken', token, { path: '/' });
          dispatch(checkAuthStatus());
          dispatch(setProfile());
          enqueueSnackbar('Signup Successful!', {
            variant: 'success',
            action: (key) => (
              <IoCloseOutline
                onClick={() => closeSnackbar(key)} 
                color="white"
                size={"24px"}
              >
              </IoCloseOutline>
            ),
          });
          dispatch(setIsLoginOpen(false));
        } else {
          console.log(response.data.message);
        }
       } catch (error) {
        console.log("Error",error)
        enqueueSnackbar('LogIn Failed!', {
          variant: 'error',
          action: (key) => (
            <IoCloseOutline
              onClick={() => closeSnackbar(key)} 
              color="white"
              size={"24px"}
            >
            </IoCloseOutline>
          ),
        });
       }
    },
  });

  const formikForgot = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async(values) => {
      try {
        const response = await apiPost('/auth/forgot-password', values)
        if (response.status) {
          setIsLogin(4)
          enqueueSnackbar(response.message, {
            variant: 'success',
            action: (key) => (
              <IoCloseOutline
                onClick={() => closeSnackbar(key)} 
                color="white"
                size={"24px"}
              >
              </IoCloseOutline>
            ),
          });
        } else {
          enqueueSnackbar(response.message, {
            variant: 'error',
            action: (key) => (
              <IoCloseOutline
                onClick={() => closeSnackbar(key)} 
                color="white"
                size={"24px"}
              >
              </IoCloseOutline>
            ),
          });
        }
       } catch (error) {
        enqueueSnackbar(error, {
          variant: 'error',
          action: (key) => (
            <IoCloseOutline
              onClick={() => closeSnackbar(key)} 
              color="white"
              size={"24px"}
            >
            </IoCloseOutline>
          ),
        });
       }
    },
  });

  const email = formikForgot.values.email;

  const formikReset = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async(values) => {
      try {
        const response = await apiPost('/auth/reset-password', {email, password : values.password})
        if (response.status) {
          enqueueSnackbar(response.message, {
            variant: 'success',
            action: (key) => (
              <IoCloseOutline
                onClick={() => closeSnackbar(key)} 
                color="white"
                size={"24px"}
              >
              </IoCloseOutline>
            ),
          });
          setIsLogin(1)
        } else {
          enqueueSnackbar(response.message, {
            variant: 'error',
            action: (key) => (
              <IoCloseOutline
                onClick={() => closeSnackbar(key)} 
                color="white"
                size={"24px"}
              >
              </IoCloseOutline>
            ),
          });
        }
       } catch (error) {
        enqueueSnackbar(error, {
          variant: 'error',
          action: (key) => (
            <IoCloseOutline
              onClick={() => closeSnackbar(key)} 
              color="white"
              size={"24px"}
            >
            </IoCloseOutline>
          ),
        });
       }
    },
  });

  const handlePaste = (e) => {
    const pasteData = e.clipboardData
      .getData("text")
      .split("")
      .filter((char) => !isNaN(char))
      .slice(0, 4);
    setOtp(pasteData.join(""));
  };

      const handleSubmit = async() => {
        alert(`OTP Submitted: ${otp}`);
        try {
          const response = await apiPost('/auth/verify-password', {otp, email})
          if (response.status) {
            setIsLogin(5)
            enqueueSnackbar(response.message, {
              variant: 'success',
              action: (key) => (
                <IoCloseOutline
                  onClick={() => closeSnackbar(key)} 
                  color="white"
                  size={"24px"}
                >
                </IoCloseOutline>
              ),
            });
          }
         } catch (error) {
          enqueueSnackbar(error, {
            variant: 'error',
            action: (key) => (
              <IoCloseOutline
                onClick={() => closeSnackbar(key)} 
                color="white"
                size={"24px"}
              >
              </IoCloseOutline>
            ),
          });
         }
      };
  
  return (
    <>
      <Button type="primary" className='text-primary py-4 px-8 border border-primary hover:!bg-primary hover:text-white md:text-[15px] text-sm font-bold rounded-md md:h-16 h-10 font-inter bg-transparent' onClick={() => dispatch(setIsLoginOpen(true))}>
      Login / Sign Up
      </Button>
      {
        isLogin === 1 && (<Modal centered title="" open={isLogin===1 && isModalOpen} width={400} footer={''} onCancel={() => dispatch(setIsLoginOpen(false))}>
        <h1 className='font-bold text-center text-3xl mb-4'>Login</h1>
        <p className='text-center mb-5'>Welcome back! Log in to your HABOT account to access resources, connect, and grow opportunities.</p>
        <form onSubmit={formikLogin.handleSubmit}>
  <div className="relative">
    <label htmlFor="email" className="block font-medium mb-1 text-sm">
      Email
    </label>
    <Input
      id="email"
      type="email"
      name="email"
      className="mb-3 outline-none"
      value={formikLogin.values.email}
      placeholder="Enter Email"
      onChange={formikLogin.handleChange}
      onBlur={formikLogin.handleBlur}
    />
    {formikLogin.touched.email && formikLogin.errors.email && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikLogin.errors.email}
      </span>
    )}
  </div>

  <div className="relative">
    <label htmlFor="password" className="block font-medium mb-1 text-sm">
      Password
    </label>
    <Input
      id="password"
      type={isPasswordVisible ? 'text' : 'password'}
      name="password"
      className="mb-3 outline-none"
      value={formikLogin.values.password}
      placeholder="Enter Password"
      onChange={formikLogin.handleChange}
      onBlur={formikLogin.handleBlur}
    />
    <div className='absolute right-2 top-[33px] text-primary' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}><ShowPassword show={isPasswordVisible}/></div>
    {formikLogin.touched.password && formikLogin.errors.password && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikLogin.errors.password}
      </span>
    )}
  </div>

<div className='text-end mb-5'>
<p className='text-primary font-semibold inline-block cursor-pointer' onClick={()=>setIsLogin(3)}>Forgot your password?</p>
</div>

  <button
    type="submit"
    className="w-full p-2 border border-primary rounded text-primary font-semibold hover:bg-primary hover:text-white transition-all"
  >
    Login
  </button>
</form>

    <SocialLogin />

    <p className='text-center mt-5 -mb-3'>Not a Member Yet? <span className='text-primary cursor-pointer' onClick={()=>setIsLogin(2)}>Signup</span>.</p>
      </Modal>)
    }
    {
      isLogin === 2 && (<Modal centered title="" open={isLogin===2 && isModalOpen} width={400} footer={''} onCancel={() => dispatch(setIsLoginOpen(false))}>
        <h1 className='font-bold text-center text-3xl mb-4'>Signup</h1>
        <p className='text-center mb-5'>Join HABOT to access tools, resources, and opportunities. Grow with a thriving community.</p>
        <form onSubmit={formikSignup.handleSubmit}>
  <div className="relative">
    <label htmlFor="name" className="block font-medium mb-1 text-sm">
      Name
    </label>
    <Input
      id="name"
      type="text"
      name="name"
      className="mb-3 outline-none"
      value={formikSignup.values.name}
      placeholder="Enter Name"
      onChange={formikSignup.handleChange}
      onBlur={formikSignup.handleBlur}
    />
    {formikSignup.touched.name && formikSignup.errors.name && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikSignup.errors.name}
      </span>
    )}
  </div>

  <div className="relative">
    <label htmlFor="email" className="block font-medium mb-1 text-sm">
      Email
    </label>
    <Input
      id="email"
      type="email"
      name="email"
      className="mb-3 outline-none"
      value={formikSignup.values.email}
      placeholder="Enter Email"
      onChange={formikSignup.handleChange}
      onBlur={formikSignup.handleBlur}
    />
    {formikSignup.touched.email && formikSignup.errors.email && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikSignup.errors.email}
      </span>
    )}
  </div>

  <div className="relative">
    <label htmlFor="password" className="block font-medium mb-1 text-sm">
      Password
    </label>
    <Input
      id="password"
      type={isPasswordVisible ? 'text' : 'password'}
      name="password"
      className="mb-3 outline-none"
      value={formikSignup.values.password}
      placeholder="Enter Password"
      onChange={formikSignup.handleChange}
      onBlur={formikSignup.handleBlur}
    />
    <div className='absolute right-2 top-[33px] text-primary' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}><ShowPassword show={isPasswordVisible}/></div>
    {formikSignup.touched.password && formikSignup.errors.password && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikSignup.errors.password}
      </span>
    )}
  </div>

  <div className="relative">
    <label htmlFor="confirmPassword" className="block font-medium mb-1 text-sm">
      Confirm Password
    </label>
    <Input
      id="confirmPassword"
      type={isPasswordConfirmVisible ? 'text' : 'password'}
      name="confirmPassword"
      className="mb-3 outline-none"
      value={formikSignup.values.confirmPassword}
      placeholder="Confirm Password"
      onChange={formikSignup.handleChange}
      onBlur={formikSignup.handleBlur}
    />
    <div className='absolute right-2 top-[33px] text-primary' onClick={()=>setIsPasswordConfirmVisible(!isPasswordConfirmVisible)}><ShowPassword show={isPasswordConfirmVisible}/></div>
    {formikSignup.touched.confirmPassword && formikSignup.errors.confirmPassword && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikSignup.errors.confirmPassword}
      </span>
    )}

<div className="relative">
    <label htmlFor="name" className="block font-medium mb-1 text-sm">
      Phone Number
    </label>
    <div className='flex'>
    <ReactFlagsSelect
    selected={formikSignup.values.country}
    onSelect={(code) => {
      formikSignup.setFieldValue('country', code);
    }}
    searchable
    searchPlaceholder="Search..."
    className='countryCode mb-3 !pb-0'
    showOptionLabel={false}
    fullWidth={false}
    showSelectedLabel={false}
    alignOptionsToRight
  />
    <Input
      id="phoneNumber"
      type="number"
      name="phoneNumber"
      className="mb-3 outline-none rounded-tl-none rounded-bl-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      value={formikSignup.values.phoneNumber}
      placeholder="Enter Phone Number"
      onChange={formikSignup.handleChange}
      onBlur={formikSignup.handleBlur}
    />
    </div>
    {formikSignup.touched.phoneNumber && formikSignup.errors.phoneNumber && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikSignup.errors.phoneNumber}
      </span>
    )}
  </div>
    
  </div>

  <button
    type="submit"
    className="w-full p-2 border border-primary rounded text-primary font-semibold hover:bg-primary hover:text-white transition-all"
  >
    Sign Up
  </button>
</form>

    <SocialLogin />

    <p className='text-center mt-5 -mb-3'>Already a Member? <span className='text-primary cursor-pointer' onClick={()=>setIsLogin(1)}>Login</span>.</p>
      </Modal>)
        }
        {
      isLogin === 3 && (<Modal centered title="" open={isLogin===3 && isModalOpen} width={400} footer={''} onCancel={() => dispatch(setIsLoginOpen(false))}>
        <h1 className='font-bold text-center text-3xl mb-4'>Forgot Passsword</h1>
        <p className='text-center mb-5'>
        Forgot your password? Enter your email to reset it.</p>
        <form onSubmit={formikForgot.handleSubmit}>
  <div className="relative">
    <label htmlFor="email" className="block font-medium mb-1 text-sm">
      Email
    </label>
    <Input
      id="email"
      type="email"
      name="email"
      className="mb-3 outline-none"
      value={formikForgot.values.email}
      placeholder="Enter Email"
      onChange={formikForgot.handleChange}
      onBlur={formikForgot.handleBlur}
    />
    {formikForgot.touched.email && formikForgot.errors.email && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikForgot.errors.email}
      </span>
    )}
  </div>
  <button
    type="submit"
    className="w-full p-2 border border-primary rounded text-primary font-semibold hover:bg-primary hover:text-white transition-all"
  >
    Send OTP
  </button>
</form>

    <p className='text-center mt-5 -mb-3'>Go back to <span className='text-primary cursor-pointer' onClick={()=>setIsLogin(1)}>Login</span>.</p>
      </Modal>)
        }
                {
      isLogin === 4 && (<Modal centered title="" open={isLogin===4 && isModalOpen} width={400} footer={''} onCancel={() => dispatch(setIsLoginOpen(false))}>
        <h1 className='font-bold text-center text-3xl mb-4'>Verify OTP</h1>
        <p className='text-center mb-5'>
        Enter the OTP sent to your email to verify your account.</p>
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

    <p className='text-center mt-5 -mb-3'>Go back to <span className='text-primary cursor-pointer' onClick={()=>setIsLogin(1)}>Login</span>.</p>
      </Modal>)
        }

{
      isLogin === 5 && (<Modal centered title="" open={isLogin===5 && isModalOpen} width={400} footer={''} onCancel={() => dispatch(setIsLoginOpen(false))}>
        <h1 className='font-bold text-center text-3xl mb-4'>Reset Passsword</h1>
        <p className='text-center mb-5'>
        Create a new password to secure your account.</p>
        <form onSubmit={formikReset.handleSubmit}>
        <div className="relative">
    <label htmlFor="password" className="block font-medium mb-1 text-sm">
      Password
    </label>
    <Input
      id="password"
      type={isPasswordVisible ? 'text' : 'password'}
      name="password"
      className="mb-3 outline-none"
      value={formikReset.values.password}
      placeholder="Enter Password"
      onChange={formikReset.handleChange}
      onBlur={formikReset.handleBlur}
    />
    <div className='absolute right-2 top-[33px] text-primary' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}><ShowPassword show={isPasswordVisible}/></div>
    {formikReset.touched.password && formikReset.errors.password && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikReset.errors.password}
      </span>
    )}
  </div>

  <div className="relative">
    <label htmlFor="confirmPassword" className="block font-medium mb-1 text-sm">
      Confirm Password
    </label>
    <Input
      id="confirmPassword"
      type={isPasswordConfirmVisible ? 'text' : 'password'}
      name="confirmPassword"
      className="mb-3 outline-none"
      value={formikReset.values.confirmPassword}
      placeholder="Confirm Password"
      onChange={formikReset.handleChange}
      onBlur={formikReset.handleBlur}
    />
    <div className='absolute right-2 top-[33px] text-primary' onClick={()=>setIsPasswordConfirmVisible(!isPasswordConfirmVisible)}><ShowPassword show={isPasswordConfirmVisible}/></div>
    {formikReset.touched.confirmPassword && formikReset.errors.confirmPassword && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikReset.errors.confirmPassword}
      </span>
    )}
    
  </div>
  <button
    type="submit"
    className="w-full p-2 border border-primary rounded text-primary font-semibold hover:bg-primary hover:text-white transition-all"
  >
    Send OTP
  </button>
</form>

    <p className='text-center mt-5 -mb-3'>Go back to <span className='text-primary cursor-pointer' onClick={()=>setIsLogin(1)}>Login</span>.</p>
      </Modal>)
        }

        
    </>
  );
};
export default LoginModal;