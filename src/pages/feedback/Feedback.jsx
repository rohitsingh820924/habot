import React from 'react'
import Banner from "../../assets/Images/banner.png";
import { Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { apiPost } from "../../libs/api";

const Feedback = () => {
    const { TextArea } = Input;
    const email = useSelector((state) => state.auth.email)
    
    const formik = useFormik({
      initialValues: {
        subject: "",
        description: "",
      },
      validationSchema: Yup.object({
        subject: Yup.string().required("Subject is required"),
        description: Yup.string().required("Description is required"),
      }),
      onSubmit: async(values) => {
        try {
          const response = await apiPost('/api/feedback', {values, email})
          if (response.token) {
            const token = JSON.stringify({ jwt: response.token });
            Cookies.set('authToken', token, { path: '/' });
            dispatch(checkAuthStatus());
            dispatch(setIsLoginOpen(false));
          } else {
            console.log(response.data.message);
          }
         } catch (error) {
          console.log("Error",error)
         }
      },
    });
  return (
    <div>
        <div className="relative">
        <div className="absolute h-full w-full -z-10">
          <div className="absolute inset-0 bg-[#072F57]/45"></div>
          <div className="bg-gradient-to-r inset-0 absolute from-[#072F57]/75 to-[#072F57]/0"></div>
          <img
            src={Banner}
            className="h-full w-full object-cover"
            alt="Banner-Image"
          />
        </div>
        <div className="container mx-auto px-4 py-[60px] lg:py-[120px]">
          <h1 className="text-center text-xl md:text-4xl lg:text-[55px] text-white lg:leading-[66px] font-bold">
          Feedback
          </h1>
        </div>
      </div>
      <div className='bg-green-50'>
      <div className="container mx-auto py-28 px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className='lg:col-span-2 md:order-1'>
                <p className='text-sm mb-4'>At HABOT, your opinions and suggestions matter to us. We are committed to creating a platform that meets your needs and exceeds your expectations. Whether you have ideas for improvement, encountered an issue, or simply want to share your thoughts, we'd love to hear from you!</p>
                <p className='text-sm mb-4'>Please fill out the form to let us know what's on your mind. Be as detailed as possible so we can better understand and address your feedback.</p>
                <p className='text-sm'>Your feedback is reviewed by our team to help us improve our platform and services. While we may not respond to every submission, please know that your input is highly valued and contributes to making HABOT better for everyone.</p>
            </div>
            <div className='bg-primary p-5 rounded-lg mdorder-2'>
            <form className='bg-white p-5 rounded-lg' onSubmit={formik.handleSubmit}>
            <div className="relative">
              <label htmlFor="subject" className="block font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                name="subject"
                className="mb-3"
                value={formik.values.subject}
                placeholder="Enter Subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.subject && formik.errors.subject && (
                <span className="text-red-600 absolute text-xs right-0 top-2">
                  {formik.errors.subject}
                </span>
              )}
            </div>

            <div className="relative">
              <label htmlFor="description" className="block font-medium mb-2">
                Description
              </label>
              <TextArea
                id="description"
                name="description"
                rows={4}
                placeholder="Enter your description here"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full mb-3 !resize-none"
              />
              {formik.touched.description && formik.errors.description && (
                <div className="text-red-600 absolute text-xs right-0 top-2">
                  {formik.errors.description}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-2 border border-primary rounded text-primary font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Post Requirement
            </button>
          </form>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Feedback