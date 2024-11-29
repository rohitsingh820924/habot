import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Logo from "../../assets/Images/habot-logo.png";
import { Link } from "react-router-dom";
import DropdownIcon from "../../assets/icons/dropdown-icon.svg";
import LoginModal from "../loginModal/LoginModal";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const DropdownRef = useRef(null);
  const navRef = useRef(null);

  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/alternative-special-education-services"
        >
          Alternative/Special Education Services
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/arts-training"
        >
          Arts Training
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/automobile-driving-classes-driving"
        >
          Automobile Driving classes (Driving)
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/bachelor-of-education"
        >
          Bachelor of education
        </a>
      ),
      key: "4",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/backlink-creation"
        >
          Backlink creation
        </a>
      ),
      key: "5",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/college"
        >
          College
        </a>
      ),
      key: "6",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/computer-training"
        >
          Computer Training
        </a>
      ),
      key: "7",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/content-creation"
        >
          Content creation
        </a>
      ),
      key: "8",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/distance-learning"
        >
          Distance learning
        </a>
      ),
      key: "9",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/education-and-career-counseling"
        >
          Education and Career Counseling
        </a>
      ),
      key: "10",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/education-consultants"
        >
          Education Consultants
        </a>
      ),
      key: "11",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/education-consulting"
        >
          Education consulting
        </a>
      ),
      key: "12",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/educational-support-services"
        >
          Educational Support Services
        </a>
      ),
      key: "13",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/gcp-deployment"
        >
          GCP Deployment
        </a>
      ),
      key: "14",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/image-video-creation"
        >
          Image/Video creation
        </a>
      ),
      key: "15",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/language-classes"
        >
          Language classes
        </a>
      ),
      key: "16",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/online-learning"
        >
          Online Learning
        </a>
      ),
      key: "17",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/private-tutoring"
        >
          Private Tutoring
        </a>
      ),
      key: "18",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/school"
        >
          School
        </a>
      ),
      key: "19",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/school-counselor"
        >
          School counselor
        </a>
      ),
      key: "20",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/special-education"
        >
          Special education
        </a>
      ),
      key: "21",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/sports-education-and-coaching"
        >
          Sports Education and Coaching
        </a>
      ),
      key: "22",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/student-assessment"
        >
          Student assessment
        </a>
      ),
      key: "23",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/student-tutoring"
        >
          Student tutoring
        </a>
      ),
      key: "24",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/teacher-training"
        >
          Teacher Training
        </a>
      ),
      key: "25",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/trade-school"
        >
          Trade school
        </a>
      ),
      key: "26",
    },
  ];
  
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header ref={navRef} className="sticky top-0 bg-white z-10">
      <div className="container mx-auto p-4 bg-white">
        <div className="flex justify-between items-center">
          <div className="logo w-[120px] md:w-[180px]">
            <Link to="/">
              <img src={Logo} alt="Habot-Logo" className="w-full h-auto" />
            </Link>
          </div>
          <div className="">
            {isMobile ? (
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="h-6 w-7 focus:outline-none relative"
              >
                <span
                  className={`block absolute w-full h-0.5 rounded bg-primary transition-transform duration-300 ${
                    isNavOpen ? "transform rotate-45 top-1/2" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`block absolute w-full h-0.5 rounded bg-primary transition-opacity duration-300 ${
                    isNavOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block absolute w-full h-0.5 rounded bg-primary transition-transform duration-300 ${
                    isNavOpen ? "transform -rotate-45 top-1/2" : "translate-y-2"
                  }`}
                ></span>
              </button>
            ) : (
              ""
            )}
            <nav
              className={`flex flex-col md:flex-row gap-5 md:items-center justify-between bg-white ${
                isMobile
                  ? "fixed h-[calc(100dvh-62px)] w-[250px] transition-all duration-300 delay-100 top-[62px] right-0 z-10 p-4"
                  : ""
              } ${
                isMobile
                  ? isNavOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                  : ""
              }`}
            >
              <ul
                className={`flex flex-col md:flex-row gap-5 md:items-center relative`}
              >
                <li onClick={() => setIsNavOpen(false)}>
                  <Link className="text-[14.5px]" to="/find-suppliers">
                    Find Suppliers
                  </Link>
                </li>
                  <li>
                    <Dropdown
                menu={{
                  items,
                }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()} className="cursor-pointer text-[14.5px]">
                  <Space> Find Service Tags <DownOutlined /> </Space>
                </a>
              </Dropdown>
                  </li>
              </ul>
              <LoginModal onClick={() => setIsNavOpen(false)} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
