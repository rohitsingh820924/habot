import React from "react";
import ServiceIone from "../../assets/icons/service-icon.svg";
import LocatinIone from "../../assets/icons/location-icon.svg";
import { Select, Col, Divider, Row, Flex, Button, Card, Tag } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactStarRatings from "react-star-ratings";

import { MdErrorOutline } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import VerifiedSection from "../../Components/verifiedSection/VerifiedSection";
import { useParams } from "react-router-dom";

const Requirements = () => {

  const { slug } = useParams();

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
    },
  });
  return (
    <>
      <div className="container p-4 mx-auto mb-10">
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
                  const
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
                  const
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

        <Divider orientation="left">
          Find your <span className="text-secondary">Supplier</span>
        </Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
              <div className="flex justify-between items-center">
              <p className="text-lg">Result for <span className="text-secondary">"{slug}"</span></p>
              <Flex justify="center" gap="14px">
                <Button type="primary" className="!bg-secondary !px-8">
                  All Jobs
                </Button>
                <Select
                  showSearch
                  placeholder="Select a location"
                  className="select-box-search w-full"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    { value: "1", label: "Abu Dhabi" },
                    { value: "2", label: "Dubai" },
                    { value: "3", label: "Sharjah & Ajman" },
                    { value: "4", label: "Fujairah" },
                    { value: "5", label: "Ras Al Khaimah" },
                    { value: "6", label: "Umm Al Quwain" },
                  ]}
                />
              </Flex>
              </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div className="mt-8 flex flex-col gap-5">
              <Card hoverable>
                <h2 className="text-xl font-semibold mb-4">
                  TUTION FOR KIDS 1ST 12 STANDARD
                </h2>
                <p className="mb-1">
                  <b>Created by :</b> SUKUR AHAMED MONDAL
                </p>
                <p className="flex mb-1">
                  <b>Average rating :</b>{" "}
                  <span className="pl-3">
                    <ReactStarRatings
                      rating={3.5}
                      starRatedColor="#00732f"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </span>
                </p>
                <p>Abu Dhabi</p>

                <Button type="primary" className="my-5" icon={<FaBriefcase />}>
                  Full-time
                </Button>

                <p className="mb-1">
                  TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                  SUBJECTS
                </p>
                <p className="text-gray-400">a year ago</p>
              </Card>

              <Card hoverable>
                <h2 className="text-xl font-semibold mb-4">
                  TUTION FOR KIDS 1ST 12 STANDARD
                </h2>
                <p className="mb-1">
                  <b>Created by :</b> SUKUR AHAMED MONDAL
                </p>
                <p className="flex mb-1">
                  <b>Average rating :</b>{" "}
                  <span className="pl-3">
                    <ReactStarRatings
                      rating={3.5}
                      starRatedColor="#00732f"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </span>
                </p>
                <p>Abu Dhabi</p>

                <Button type="primary" className="my-5" icon={<FaBriefcase />}>
                  Full-time
                </Button>

                <p className="mb-1">
                  TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                  SUBJECTS
                </p>
                <p className="text-gray-400">a year ago</p>
              </Card>
              <Card hoverable>
                <h2 className="text-xl font-semibold mb-4">
                  TUTION FOR KIDS 1ST 12 STANDARD
                </h2>
                <p className="mb-1">
                  <b>Created by :</b> SUKUR AHAMED MONDAL
                </p>
                <p className="flex mb-1">
                  <b>Average rating :</b>{" "}
                  <span className="pl-3">
                    <ReactStarRatings
                      rating={3.5}
                      starRatedColor="#00732f"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </span>
                </p>
                <p>Abu Dhabi</p>

                <Button type="primary" className="my-5" icon={<FaBriefcase />}>
                  Full-time
                </Button>

                <p className="mb-1">
                  TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                  SUBJECTS
                </p>
                <p className="text-gray-400">a year ago</p>
              </Card>

              <Card hoverable>
                <h2 className="text-xl font-semibold mb-4">
                  TUTION FOR KIDS 1ST 12 STANDARD
                </h2>
                <p className="mb-1">
                  <b>Created by :</b> SUKUR AHAMED MONDAL
                </p>
                <p className="flex mb-1">
                  <b>Average rating :</b>{" "}
                  <span className="pl-3">
                    <ReactStarRatings
                      rating={3.5}
                      starRatedColor="#00732f"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </span>
                </p>
                <p>Abu Dhabi</p>

                <Button type="primary" className="my-5" icon={<FaBriefcase />}>
                  Full-time
                </Button>

                <p className="mb-1">
                  TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                  SUBJECTS
                </p>
                <p className="text-gray-400">a year ago</p>
              </Card>
              <Card hoverable>
                <h2 className="text-xl font-semibold mb-4">
                  TUTION FOR KIDS 1ST 12 STANDARD
                </h2>
                <p className="mb-1">
                  <b>Created by :</b> SUKUR AHAMED MONDAL
                </p>
                <p className="flex mb-1">
                  <b>Average rating :</b>{" "}
                  <span className="pl-3">
                    <ReactStarRatings
                      rating={3.5}
                      starRatedColor="#00732f"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </span>
                </p>
                <p>Abu Dhabi</p>

                <Button type="primary" className="my-5" icon={<FaBriefcase />}>
                  Full-time
                </Button>

                <p className="mb-1">
                  TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                  SUBJECTS
                </p>
                <p className="text-gray-400">a year ago</p>
              </Card>

              <Card hoverable>
                <h2 className="text-xl font-semibold mb-4">
                  TUTION FOR KIDS 1ST 12 STANDARD
                </h2>
                <p className="mb-1">
                  <b>Created by :</b> SUKUR AHAMED MONDAL
                </p>
                <p className="flex mb-1">
                  <b>Average rating :</b>{" "}
                  <span className="pl-3">
                    <ReactStarRatings
                      rating={3.5}
                      starRatedColor="#00732f"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </span>
                </p>
                <p>Abu Dhabi</p>

                <Button type="primary" className="my-5" icon={<FaBriefcase />}>
                  Full-time
                </Button>

                <p className="mb-1">
                  TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                  SUBJECTS
                </p>
                <p className="text-gray-400">a year ago</p>
              </Card>
              <Card hoverable>
                <h2 className="text-xl font-semibold mb-4">
                  TUTION FOR KIDS 1ST 12 STANDARD
                </h2>
                <p className="mb-1">
                  <b>Created by :</b> SUKUR AHAMED MONDAL
                </p>
                <p className="flex mb-1">
                  <b>Average rating :</b>{" "}
                  <span className="pl-3">
                    <ReactStarRatings
                      rating={3.5}
                      starRatedColor="#00732f"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </span>
                </p>
                <p>Abu Dhabi</p>

                <Button type="primary" className="my-5" icon={<FaBriefcase />}>
                  Full-time
                </Button>

                <p className="mb-1">
                  TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                  SUBJECTS
                </p>
                <p className="text-gray-400">a year ago</p>
              </Card>

              <Card hoverable>
                <h2 className="text-xl font-semibold mb-4">
                  TUTION FOR KIDS 1ST 12 STANDARD
                </h2>
                <p className="mb-1">
                  <b>Created by :</b> SUKUR AHAMED MONDAL
                </p>
                <p className="flex mb-1">
                  <b>Average rating :</b>{" "}
                  <span className="pl-3">
                    <ReactStarRatings
                      rating={3.5}
                      starRatedColor="#00732f"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </span>
                </p>
                <p>Abu Dhabi</p>

                <Button type="primary" className="my-5" icon={<FaBriefcase />}>
                  Full-time
                </Button>

                <p className="mb-1">
                  TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                  SUBJECTS
                </p>
                <p className="text-gray-400">a year ago</p>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={14}>
            <Card className="sticky top-[120px] h-[calc(100svh-140px)] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/50 scrollbar-track-gray-100 border mt-8">
              <h2 className="text-xl font-semibold mb-4">Job Details</h2>
              <p className="mb-1">
                <b>Name : </b> TUTION FOR KIDS 1ST 12 STANDARD
              </p>
              <p className="mb-1">
                <b>Created by :</b> SUKUR AHAMED MONDAL
              </p>
              <p className="flex mb-1">
                <b>Average rating :</b>{" "}
                <span className="pl-3">
                  <ReactStarRatings
                    rating={3.5}
                    starRatedColor="#00732f"
                    starEmptyColor="gray"
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="1px"
                  />
                </span>
              </p>
              <p>
                <b>Location :</b> Abu Dhabi
              </p>

              <Button type="primary" className="mt-5">
                Apply now
              </Button>

              <hr className="my-5" />

              <h3 className="text-lg mb-3">Full Job Description</h3>

              <p className="mb-1">
                TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                SUBJECTS Well experienced and best teaching techniques with 12
                years of Tuition for school going and online student's, tuition
                available at a very reasonable price Abu Dhabi (mussaffah)
                Please feel free to contact me for further details +971561220642
                or WhatsApp

                TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                SUBJECTS Well experienced and best teaching techniques with 12
                years of Tuition for school going and online student's, tuition
                available at a very reasonable price Abu Dhabi (mussaffah)
                Please feel free to contact me for further details +971561220642
                or WhatsApp

                TUITION FOR KIDS AVAILABLE FROM 1ST TO 12TH STANDARD FOR ALL
                SUBJECTS Well experienced and best teaching techniques with 12
                years of Tuition for school going and online student's, tuition
                available at a very reasonable price Abu Dhabi (mussaffah)
                Please feel free to contact me for further details +971561220642
                or WhatsApp
              </p>

              <h3 className="text-md mb-2">Job Type</h3>
              <Flex gap={4} wrap align="center">
                  <Tag.CheckableTag checked>
                    Hero
                  </Tag.CheckableTag>
                  <Tag.CheckableTag checked>
                    Hero
                  </Tag.CheckableTag>
                  <Tag.CheckableTag checked>
                    Hero
                  </Tag.CheckableTag>
                  <Tag.CheckableTag checked>
                    Hero
                  </Tag.CheckableTag>
                  <Tag.CheckableTag checked>
                    Hero
                  </Tag.CheckableTag>
              </Flex>
              <p className="text-gray-400 mt-2">a year ago</p>
            </Card>
          </Col>
        </Row>
      </div>
      <VerifiedSection />
    </>
  );
};

export default Requirements;
