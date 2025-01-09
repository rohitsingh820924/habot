import React from "react";
import Banner from "../../assets/Images/banner.png";
import img1 from "../../assets/Images/about1.jpg";

const AboutUs = () => {
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
            About Us
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
            <p className="mb-5 font-semibold text-secondary">
              Welcome to HABOT, where innovation meets opportunity.
            </p>
            <p className="mb-3 text-sm">
              At HABOT, we believe in empowering individuals and businesses to
              reach their full potential. By joining our platform, you step into
              a thriving community of like-minded entrepreneurs, creators, and
              visionaries all working towards their dreams.
            </p>
            <p className="mb-3 text-sm">
              We provide more than just a platform; we offer tools, resources,
              and connections that foster growth and inspire success. Whether
              you're looking to expand your network, access valuable business
              insights, or turn your entrepreneurial aspirations into reality,
              HABOT is here to guide you every step of the way.
            </p>
            <p className="mb-3 text-sm">
              Our mission is to create a space where creativity and
              collaboration drive progress.
            </p>
            <p className="mb-3 text-sm">
            With HABOT, you're not just signing
              up - you're opening the door to a world of possibilities. 
            </p>
            <p className="mb-3 text-sm">
            Let's grow, innovate, and succeed together. 
            </p>
            <p className="mb-3 text-sm">
            Welcome to HABOT! Would you like further tweaks or a specific tone adjustment?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
