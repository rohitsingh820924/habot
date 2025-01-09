import React from 'react'
import Banner from "../../assets/Images/banner.png";
import img1 from "../../assets/Images/about2.jpg";

const DataPrivacy = () => {
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
          Data Privacy Policy
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-28 px-5">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="bg-secondary lg:w-[600px] md:mr-10 md:mb-10 mr-5 mb-5">
            <img
              src={img1}
              alt=""
              className="w-full h-auto aspect-square object-cover md:translate-x-10 md:translate-y-10 translate-x-5 translate-y-5"
            />
          </div>
          <div className="w-full">
            <p className="mb-3 text-sm">
            At HABOT, your privacy is our top priority. We are dedicated to safeguarding your personal information and ensuring that your data is handled with the utmost care and transparency. When you sign up or interact with our platform, we collect certain personal details such as your name, email address, and contact information, along with usage data about how you interact with our website and services. This information is used to improve your experience, provide personalized services, and communicate updates or promotions that may be of interest to you. We may also collect payment information when necessary for premium services.
            </p>
            <p className="mb-3 text-sm">
            We value your trust and assure you that we do not sell or rent your personal data to third parties. However, we may share your information with trusted service providers who assist in delivering our services, or with authorities when required by law or to protect the integrity of our platform. We employ industry-standard security measures, including encryption and secure servers, to protect your data from unauthorized access or misuse.
            </p>
            <p className="mb-3 text-sm">
            You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving promotional communications from us. In addition, we use cookies and similar tracking technologies to enhance your experience and analyze how our website is used. You can manage your cookie preferences through your browser settings.
            </p>
            <p className="mb-3 text-sm">
            We are committed to keeping this policy up to date, and any changes will be posted here with the updated effective date. If you have any questions or concerns regarding our data privacy practices, please contact us at privacy@habot.com. We take your privacy seriously and are dedicated to ensuring your data is protected every step of the way.
            </p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default DataPrivacy