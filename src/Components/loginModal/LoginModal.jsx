import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useFormik } from "formik";
import * as Yup from "yup"

import { useSelector, useDispatch } from 'react-redux'
import { setIsLoginOpen } from '../../libs/store/features/loginSlice';

import { GrGoogle } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import ShowPassword from '../ShowPassword';
import ReactFlagsSelect from "react-flags-select";


const LoginModal = () => {
  const [isLogin, setIsLogin] = useState(true);
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
    onSubmit: (values) => {
      alert("Form submitted successfully: " + JSON.stringify(values));
    },
  });

  const formikSignup = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      countryCode: "IN",
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
    }),
    onSubmit: (values) => {
      alert("Signup successful: " + JSON.stringify(values));
      // You can handle the signup logic here, such as sending data to a backend
    },
  });
  
  return (
    <>
      <Button type="primary" className='text-primary py-4 px-8 border border-primary hover:!bg-primary hover:text-white md:text-[15px] text-sm font-bold rounded-md md:h-16 h-10 font-inter bg-transparent' onClick={() => dispatch(setIsLoginOpen(true))}>
      Login / Sign Up
      </Button>
      {
        isLogin ? 
      (<Modal centered title="" open={isLogin && isModalOpen} width={400} footer={''} onCancel={() => dispatch(setIsLoginOpen(false))}>
        <h1 className='font-bold text-center text-3xl mb-4'>Login</h1>
        <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, perferendis.</p>
        <form onSubmit={formikLogin.handleSubmit}>
  <div className="relative">
    <label htmlFor="email" className="block font-medium mb-2">
      Email
    </label>
    <input
      id="email"
      type="email"
      name="email"
      className="bg-green-300/50 px-2 py-1 rounded w-full mb-3 outline-none focus:ring-2 focus:ring-green-500"
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
    <label htmlFor="password" className="block font-medium mb-2">
      Password
    </label>
    <input
      id="password"
      type={isPasswordVisible ? 'text' : 'password'}
      name="password"
      className="bg-green-300/50 px-2 py-1 rounded w-full mb-4 outline-none focus:ring-2 focus:ring-green-500"
      value={formikLogin.values.password}
      placeholder="Enter Password"
      onChange={formikLogin.handleChange}
      onBlur={formikLogin.handleBlur}
    />
    <div className='absolute right-2 top-[38px] text-primary' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}><ShowPassword show={isPasswordVisible}/></div>
    {formikLogin.touched.password && formikLogin.errors.password && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikLogin.errors.password}
      </span>
    )}
  </div>

  <button
    type="submit"
    className="w-full p-2 border border-primary rounded text-primary font-semibold hover:bg-primary hover:text-white transition-all"
  >
    Login
  </button>
</form>

    <p className='text-center my-5'>or use a social network</p>

    <div className='flex justify-center items-center gap-5'>
        <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group'><GrGoogle className='text-secondary group-hover:text-white transition-all' /></div>
        <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group'><FaFacebookF className='text-secondary group-hover:text-white transition-all' /></div>
        <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group'><FaLinkedinIn className='text-secondary group-hover:text-white transition-all' /></div>
    </div>

    <p className='text-center mt-5 -mb-3'>Not a Member Yet? <span className='text-primary' onClick={()=>setIsLogin(false)}>Signup</span>.</p>
      </Modal>)
      :
      (<Modal centered title="" open={!isLogin && isModalOpen} width={400} footer={''} onCancel={() => dispatch(setIsLoginOpen(false))}>
        <h1 className='font-bold text-center text-3xl mb-4'>Signup</h1>
        <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, perferendis.</p>
        <form onSubmit={formikSignup.handleSubmit}>
  <div className="relative">
    <label htmlFor="name" className="block font-medium mb-2">
      Name
    </label>
    <input
      id="name"
      type="text"
      name="name"
      className="bg-green-300/50 px-2 py-1 rounded w-full mb-3 outline-none focus:ring-2 focus:ring-green-500"
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
    <label htmlFor="email" className="block font-medium mb-2">
      Email
    </label>
    <input
      id="email"
      type="email"
      name="email"
      className="bg-green-300/50 px-2 py-1 rounded w-full mb-3 outline-none focus:ring-2 focus:ring-green-500"
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
    <label htmlFor="password" className="block font-medium mb-2">
      Password
    </label>
    <input
      id="password"
      type={isPasswordVisible ? 'text' : 'password'}
      name="password"
      className="bg-green-300/50 px-2 py-1 rounded w-full mb-4 outline-none focus:ring-2 focus:ring-green-500"
      value={formikSignup.values.password}
      placeholder="Enter Password"
      onChange={formikSignup.handleChange}
      onBlur={formikSignup.handleBlur}
    />
    <div className='absolute right-2 top-[38px] text-primary' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}><ShowPassword show={isPasswordVisible}/></div>
    {formikSignup.touched.password && formikSignup.errors.password && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikSignup.errors.password}
      </span>
    )}
  </div>

  <div className="relative">
    <label htmlFor="confirmPassword" className="block font-medium mb-2">
      Confirm Password
    </label>
    <input
      id="confirmPassword"
      type={isPasswordConfirmVisible ? 'text' : 'password'}
      name="confirmPassword"
      className="bg-green-300/50 px-2 py-1 rounded w-full mb-4 outline-none focus:ring-2 focus:ring-green-500"
      value={formikSignup.values.confirmPassword}
      placeholder="Confirm Password"
      onChange={formikSignup.handleChange}
      onBlur={formikSignup.handleBlur}
    />
    <div className='absolute right-2 top-[38px] text-primary' onClick={()=>setIsPasswordConfirmVisible(!isPasswordConfirmVisible)}><ShowPassword show={isPasswordConfirmVisible}/></div>
    {formikSignup.touched.confirmPassword && formikSignup.errors.confirmPassword && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikSignup.errors.confirmPassword}
      </span>
    )}

<div className="relative">
    <label htmlFor="name" className="block font-medium mb-2">
      Name
    </label>
    <div className='flex'>
    <ReactFlagsSelect
    selected={formikSignup.values.countryCode}
    onSelect={(code) => {
      formikSignup.setFieldValue('countryCode', code);
    }}
    searchable
    searchPlaceholder="IND"
    className='w-[100px]'
    showOptionLabel={false}
    fullWidth={false}
    placeholder=" "
    showSelectedLabel={false}
    alignOptionsToRight
  />
    <input
      id="phoneNumber"
      type="number"
      name="phoneNumber"
      className="bg-green-300/50 px-2 py-1 rounded w-full mb-3 outline-none focus:ring-2 focus:ring-green-500"
      value={formikSignup.values.phoneNumber}
      placeholder="Enter Name"
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


    <p className='text-center my-5'>or use a social network</p>

    <div className='flex justify-center items-center gap-5'>
        <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group'><GrGoogle className='text-secondary group-hover:text-white transition-all' /></div>
        <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group'><FaFacebookF className='text-secondary group-hover:text-white transition-all' /></div>
        <div className='hover:bg-secondary border border-secondary p-2 rounded-full cursor-pointer transition-all group'><FaLinkedinIn className='text-secondary group-hover:text-white transition-all' /></div>
    </div>

    <p className='text-center mt-5 -mb-3'>Already a Member? <span className='text-primary' onClick={()=>setIsLogin(true)}>Login</span>.</p>
      </Modal>)
        }
    </>
  );
};
export default LoginModal;