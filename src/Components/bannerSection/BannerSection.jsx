import React from "react";
import Banner from "../../assets/Images/banner.png";
import ServiceIone from "../../assets/icons/service-icon.svg";
import LocatinIone from "../../assets/icons/location-icon.svg";
import { Select } from "antd";
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
      const slug = `${values.service}-${values.location}`
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

      navigate(`/requirements/${slug}`);
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
        <h1 className="text-center text-xl md:text-4xl lg:text-[55px] text-white lg:leading-[66px]">
          <b className="block">Are You a Supplier?</b> Explore Matching
          Opportunities.
        </h1>
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
                  options={[
                    {
                      value: "alternative-special-education-services",
                      label: "Alternative/Special Education Services",
                    },
                    { value: "arts-training", label: "Arts Training" },
                    {
                      value: "automobile-driving-classes-driving",
                      label: "Automobile Driving classes (Driving)",
                    },
                    {
                      value: "bachelor-of-education",
                      label: "Bachelor of education",
                    },
                    { value: "backlink-creation", label: "Backlink creation" },
                    { value: "college", label: "College" },
                    { value: "computer-training", label: "Computer Training" },
                    { value: "content-creation", label: "Content creation" },
                    { value: "distance-learning", label: "Distance learning" },
                    {
                      value: "education-and-career-counseling",
                      label: "Education and Career Counseling",
                    },
                    {
                      value: "education-consultants",
                      label: "Education Consultants",
                    },
                    {
                      value: "education-consulting",
                      label: "Education consulting",
                    },
                    {
                      value: "educational-support-services",
                      label: "Educational Support Services",
                    },
                    { value: "gcp-deployment", label: "GCP Deployment" },
                    {
                      value: "image-video-creation",
                      label: "Image/Video creation",
                    },
                    { value: "language-classes", label: "Language classes" },
                    { value: "online-learning", label: "Online Learning" },
                    { value: "private-tutoring", label: "Private Tutoring" },
                    { value: "school", label: "School" },
                    { value: "school-counselor", label: "School counselor" },
                    { value: "special-education", label: "Special education" },
                    {
                      value: "sports-education-and-coaching",
                      label: "Sports Education and Coaching",
                    },
                    {
                      value: "student-assessment",
                      label: "Student assessment",
                    },
                    { value: "student-tutoring", label: "Student tutoring" },
                    { value: "teacher-training", label: "Teacher Training" },
                    { value: "trade-school", label: "Trade school" },
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
                  options={[
                    { value: "abu-dhabi", label: "Abu Dhabi" },
                    { value: "dubai", label: "Dubai" },
                    { value: "sharjah-ajman", label: "Sharjah & Ajman" },
                    { value: "fujairah", label: "Fujairah" },
                    { value: "ras-al-khaimah", label: "Ras Al Khaimah" },
                    { value: "umm-al-quwain", label: "Umm Al Quwain" },
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
        <p className="font-bold text-lg text-white text-center">
          Are you a buyer?{" "}
          <Link className="underline font-normal" to="/post-requirement">
            Click here if you are looking to post a requirements
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
