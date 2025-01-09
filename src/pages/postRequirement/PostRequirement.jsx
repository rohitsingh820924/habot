import React from "react";
import Banner from "../../assets/Images/banner.png";
import { Select, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { apiPost } from "../../libs/api";

const PostRequirement = () => {
  const { TextArea } = Input;
  const email = useSelector((state) => state.auth.email)
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      service: "",
      location: "",
      referralCode: "",
      description: "",
    },
    validationSchema: Yup.object({
      jobTitle: Yup.string().required("Job Title is required"),
      service: Yup.string().required("Service is required"),
      location: Yup.string().required("Location is required"),
      referralCode: Yup.string(),
      description: Yup.string(),
    }),
    onSubmit: async(values) => {
      try {
        const response = await apiPost('http://localhost:5000/api/post-requirements', {values, email})
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
    <div className="">
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
          Post Requirements
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-4 bg-white">
        <div className="px-4 pt-6 pb-4 rounded-xl bg-white border">
          <h1 className="font-bold text-center text-3xl mb-4 text-secondary">
            Give your requirements
          </h1>
          <p className="text-center mb-5">
            Find the Perfect Supplier for Your Job
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="relative">
              <label htmlFor="jobTitle" className="block font-medium mb-2">
                Job Title
              </label>
              <Input
                id="jobTitle"
                type="text"
                name="jobTitle"
                className="mb-3"
                value={formik.values.jobTitle}
                placeholder="Enter Job Title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.jobTitle && formik.errors.jobTitle && (
                <span className="text-red-600 absolute text-xs right-0 top-2">
                  {formik.errors.jobTitle}
                </span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="service" className="block font-medium mb-2">
                Select Service
              </label>
              <Select
                showSearch
                placeholder="Select a service"
                className="w-full mb-3"
                value={formik.values.service || null}
                onChange={(value) => formik.setFieldValue("service", value)}
                onBlur={() => formik.setFieldTouched("service", true)}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options = {[
                  { value: 'Alternative/Special Education Services', label: 'Alternative/Special Education Services' },
                  { value: 'Arts Training', label: 'Arts Training' },
                  { value: 'Automobile Driving classes (Driving)', label: 'Automobile Driving classes (Driving)' },
                  { value: 'Bachelor of education', label: 'Bachelor of education' },
                  { value: 'Backlink creation', label: 'Backlink creation' },
                  { value: 'College', label: 'College' },
                  { value: 'Computer Training', label: 'Computer Training' },
                  { value: 'Content creation', label: 'Content creation' },
                  { value: 'Distance learning', label: 'Distance learning' },
                  { value: 'Education and Career Counseling', label: 'Education and Career Counseling' },
                  { value: 'Education Consultants', label: 'Education Consultants' },
                  { value: 'Education consulting', label: 'Education consulting' },
                  { value: 'Educational Support Services', label: 'Educational Support Services' },
                  { value: 'GCP Deployment', label: 'GCP Deployment' },
                  { value: 'Image/Video creation', label: 'Image/Video creation' },
                  { value: 'Language classes', label: 'Language classes' },
                  { value: 'Online Learning', label: 'Online Learning' },
                  { value: 'Private Tutoring', label: 'Private Tutoring' },
                  { value: 'School', label: 'School' },
                  { value: 'School counselor', label: 'School counselor' },
                  { value: 'Special education', label: 'Special education' },
                  { value: 'Sports Education and Coaching', label: 'Sports Education and Coaching' },
                  { value: 'Student assessment', label: 'Student assessment' },
                  { value: 'Student tutoring', label: 'Student tutoring' },
                  { value: 'Teacher Training', label: 'Teacher Training' },
                  { value: 'Trade school', label: 'Trade school' },
                ]
                }
              />
              {formik.touched.service && formik.errors.service && (
                <span className="text-red-600 absolute text-xs right-0 top-2">
                  {formik.errors.service}
                </span>
              )}
            </div>

            <div className="relative">
              <label htmlFor="location" className="block font-medium mb-2">
                Select Location
              </label>
              <Select
                showSearch
                placeholder="Select a location"
                className="w-full mb-3"
                value={formik.values.location || null}
                onChange={(value) => formik.setFieldValue("location", value)}
                onBlur={() => formik.setFieldTouched("location", true)}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options = {[
                  { value: 'Abu Dhabi', label: 'Abu Dhabi' },
                  { value: 'Dubai', label: 'Dubai' },
                  { value: 'Sharjah & Ajman', label: 'Sharjah & Ajman' },
                  { value: 'Fujairah', label: 'Fujairah' },
                  { value: 'Ras Al Khaimah', label: 'Ras Al Khaimah' },
                  { value: 'Umm Al Quwain', label: 'Umm Al Quwain' },
                ]}
              />
              {formik.touched.location && formik.errors.location && (
                <span className="text-red-600 absolute text-xs right-0 top-2">
                  {formik.errors.location}
                </span>
              )}
            </div>

            <div className="relative">
              <label htmlFor="referralCode" className="block font-medium mb-2">
                Referral Code (Optional)
              </label>
              <Input
                id="referralCode"
                type="text"
                name="referralCode"
                className="mb-3"
                value={formik.values.referralCode}
                placeholder="Enter referral code..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.referralCode && formik.errors.referralCode && (
                <span className="text-red-600 absolute text-xs right-0 top-2">
                  {formik.errors.referralCode}
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
                <div className="text-red-600 text-sm">
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
  );
};

export default PostRequirement;
