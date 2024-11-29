import React, { useState, useRef } from "react";
import Banner from "../../assets/Images/banner.png";
import ServiceIone from "../../assets/icons/service-icon.svg";
import LocatinIone from "../../assets/icons/location-icon.svg";
import { Select } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { MdErrorOutline } from "react-icons/md";

const BannerSection = () => {

  const navigate = useNavigate();

    const formik = useFormik({
      initialValues: {
        service: "",
        location: "",
      },
      validationSchema: Yup.object({
        service: Yup.string().required("Service is required"),
        location: Yup.string().required("Location is required"),
      }),
      onSubmit: (values) => {
      // Combine service and location into a slug
      const slug = `${values.service}-${values.location}`
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

      // Navigate to the search page with the slug
      navigate(`/search/${slug}`);
    },
    });

  return (
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
        <h1 className="text-center text-xl md:text-4xl lg:text-[55px] text-white lg:leading-[66px]"><b className="block">Are You a Supplier?</b> Explore Matching Opportunities.</h1>
        <div className="my-10 max-w-5xl mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col md:flex-row gap-[10px]">
              <div className="relative w-full">
              <Select
    showSearch
    className="text-[15px] font-light outline-none placeholder:text-[#6B7280] h-full w-full service-select border border-[#D1D5DB] rounded-md"
    placeholder="Select a service"
    value={formik.values.service || null}
                onChange={(value) => formik.setFieldValue("service", value)}
                onBlur={() => formik.setFieldTouched("service", true)}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
    const options = {[
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
                <img
                  src={ServiceIone}
                  className="absolute md:top-[22px] top-[10px] md:left-5 left-3 h-auto md:w-5 w-4"
                  alt="service-icon"
                />
                {formik.touched.service && formik.errors.service && (
                <span className="text-red-600 absolute right-8 md:top-[22px] top-[10px]">
                  <MdErrorOutline />
                </span>
              )}
              </div>

              <div className="relative w-full">
              <Select
    showSearch
    className="text-[15px] font-light outline-none placeholder:text-[#6B7280] h-full w-full service-select border border-[#D1D5DB] rounded-md"
    placeholder="Select a location"
    value={formik.values.location || null}
                onChange={(value) => formik.setFieldValue("location", value)}
                onBlur={() => formik.setFieldTouched("location", true)}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
    const options = {[
      { value: '1', label: 'Abu Dhabi' },
      { value: '2', label: 'Dubai' },
      { value: '3', label: 'Sharjah & Ajman' },
      { value: '4', label: 'Fujairah' },
      { value: '5', label: 'Ras Al Khaimah' },
      { value: '6', label: 'Umm Al Quwain' },
    ]}
  />
                <img
                  src={LocatinIone}
                  className="absolute md:top-[22px] top-[10px] md:left-5 left-3 h-auto md:w-5 w-4"
                  alt="location-icon"
                />
                {formik.touched.location && formik.errors.location && (
                <span className="text-red-600 absolute right-8 md:top-[22px] top-[10px]">
                  <MdErrorOutline />
                </span>
              )}
              </div>

              <button
                type="submit"
                className="bg-primary text-white md:py-5 py-2 rounded-md border border-primary font-semibold md:text-[15px] text-sm text-center w-full md:w-[120px] flex-shrink-0"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <p className="font-bold text-lg text-white text-center">Are you a buyer? <Link className="underline font-normal" to="/post-requirement">Click here if you are looking to post a requirements</Link></p>
      </div>
    </div>
  );
};

export default BannerSection;
