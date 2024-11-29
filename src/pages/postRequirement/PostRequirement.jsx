import React from "react";
import { Select, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

const PostRequirement = () => {
  const { TextArea } = Input;

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
    onSubmit: (values) => {
      alert("Signup successful: " + JSON.stringify(values));
    },
  });

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto p-4">
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
                placeholder="Enter Email"
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
                  { value: '1', label: 'Alternative/Special Education Services' },
                  { value: '2', label: 'Arts Training' },
                  { value: '3', label: 'Automobile Driving classes (Driving)' },
                  { value: '4', label: 'Bachelor of education' },
                  { value: '5', label: 'Backlink creation' },
                  { value: '6', label: 'College' },
                  { value: '7', label: 'Computer Training' },
                  { value: '8', label: 'Content creation' },
                  { value: '9', label: 'Distance learning' },
                  { value: '10', label: 'Education and Career Counseling' },
                  { value: '11', label: 'Education Consultants' },
                  { value: '12', label: 'Education consulting' },
                  { value: '13', label: 'Educational Support Services' },
                  { value: '14', label: 'GCP Deployment' },
                  { value: '15', label: 'Image/Video creation' },
                  { value: '16', label: 'Language classes' },
                  { value: '17', label: 'Online Learning' },
                  { value: '18', label: 'Private Tutoring' },
                  { value: '19', label: 'School' },
                  { value: '20', label: 'School counselor' },
                  { value: '21', label: 'Special education' },
                  { value: '22', label: 'Sports Education and Coaching' },
                  { value: '23', label: 'Student assessment' },
                  { value: '24', label: 'Student tutoring' },
                  { value: '25', label: 'Teacher Training' },
                  { value: '26', label: 'Trade school' },
                ]}
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
                  { value: '1', label: 'Abu Dhabi' },
                  { value: '2', label: 'Dubai' },
                  { value: '3', label: 'Sharjah & Ajman' },
                  { value: '4', label: 'Fujairah' },
                  { value: '5', label: 'Ras Al Khaimah' },
                  { value: '6', label: 'Umm Al Quwain' },
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
