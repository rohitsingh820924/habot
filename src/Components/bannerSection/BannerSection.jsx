import React, { useState } from "react";
import Banner from "../../assets/Images/banner.png";
import ServiceIone from "../../assets/icons/service-icon.svg";
import LocatinIone from "../../assets/icons/location-icon.svg";
const BannerSection = () => {
    const [data,setData] = useState({
        service: "",
        location: "",
    })
  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.service !== "" && data.location !== "") {
        console.log('FormData :', data)
        setData({
            service: "",
            location: "",
        })
    }
  };
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
        <h1 className="text-center text-2xl md:text-4xl lg:text-[55px] text-white lg:leading-[66px]"><b className="block">Are You a Supplier?</b> Explore Matching Opportunities.</h1>
        <div className="my-10 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-[10px]">
              <div className="relative w-full">
                <input
                  type="text"
                  className="text-[15px] font-light outline-primary placeholder:text-[#6B7280] py-5 pr-5 pl-14 w-full border border-[#D1D5DB] rounded-md"
                  name="service"
                  placeholder="Search your required service here"
                  value={data.service}
                  onChange={(e)=>setData((oldData)=>({...oldData, service: e.target.value}))}
                />
                <img
                  src={ServiceIone}
                  className="absolute top-[22px] left-5 h-auto w-5"
                  alt="service-icon"
                />
              </div>

              <div className="relative w-full">
                <input
                  type="text"
                  className="text-[15px] font-light outline-primary placeholder:text-[#6B7280] py-5 pr-5 pl-14 w-full border border-[#D1D5DB] rounded-md"
                  name="location"
                  placeholder="Search your desired location here"
                  value={data.location}
                  onChange={(e)=>setData((oldData)=>({...oldData, location: e.target.value}))}
                />
                <img
                  src={LocatinIone}
                  className="absolute top-[22px] left-5 h-auto w-5"
                  alt="location-icon"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white py-5 rounded-md border border-primary font-bold text-[15px] text-center w-full md:w-[120px] flex-shrink-0"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <p className="font-bold text-lg text-white text-center">Are you a buyer? <a className="underline font-normal" href="#">Click here if you are looking to post a requirements</a></p>
      </div>
    </div>
  );
};

export default BannerSection;
