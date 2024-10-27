import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Logo from '../../assets/Images/habot-logo.png'
import { Link } from 'react-router-dom'
import DropdownIcon from '../../assets/icons/dropdown-icon.svg'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const boxRef = useRef(null);

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
          if (boxRef.current && !boxRef.current.contains(event.target)) {
            setOpen(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
  return (
    <header className='sticky top-0 bg-white z-10'>
        <div className="container mx-auto p-4 bg-white">
            <div className="flex justify-between items-center">
                <div className="logo w-[181px]">
                <Link to="/">
                    <img src={Logo} alt="Habot-Logo" className='w-full h-auto' />
                </Link>
                </div>
                <div className=''>
                    {isMobile ? (  <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="h-6 w-7 focus:outline-none relative"
      >
        <span
          className={`block absolute w-full h-0.5 rounded bg-primary transition-transform duration-300 ${
            isNavOpen ? 'transform rotate-45 top-1/2' : '-translate-y-2'
          }`}
        ></span>
        <span
          className={`block absolute w-full h-0.5 rounded bg-primary transition-opacity duration-300 ${
            isNavOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block absolute w-full h-0.5 rounded bg-primary transition-transform duration-300 ${
            isNavOpen ? 'transform -rotate-45 top-1/2' : 'translate-y-2'
          }`}
        ></span>
      </button>) : ''}
                <nav className={`flex flex-col md:flex-row gap-5 md:items-center justify-between bg-white ${isMobile ? 'fixed h-[calc(100svh-67px)] w-[200] transition-all duration-300 delay-100 top-[67px] translate-x-full right-0 -z-10 p-4' : ''} ${isNavOpen ? 'translate-x-0' : ''}`}>
                    <ul className={`flex flex-col md:flex-row gap-5 md:items-center relative`}>
                        <li><Link className="text-[14.5px]" to="/find-suppliers">Find Suppliers</Link></li>
                        <li><span className="text-[14.5px] flex gap-2 cursor-pointer h-[20px]" ref={boxRef} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>Find Service Tags <img src={DropdownIcon} className={`shrink-0 transition-all duration-300 ${open ? '-rotate-180' : ''}`} alt="drop-icon" /></span></li>
                        {
                            open ? (<ul className='md:absolute right-0 top-8 bg-white p-4 md:drop-shadow-md border md:shadow-2xl md:w-40 rounded-md flex flex-col gap-2'>
                                <li><Link className="text-[14.5px] text-black hover:text-primary transition-all duration-300 delay-75 font-m" to="/option-1">Option 1</Link></li>
                                <li><Link className="text-[14.5px] text-black hover:text-primary transition-all duration-300 delay-75 font-m" to="/option-2">Option 2</Link></li>
                                <li><Link className="text-[14.5px] text-black hover:text-primary transition-all duration-300 delay-75 font-m" to="/option-3">Option 3</Link></li>
                                <li><Link className="text-[14.5px] text-black hover:text-primary transition-all duration-300 delay-75 font-m" to="/option-4">Option 4</Link></li>
                                <li><Link className="text-[14.5px] text-black hover:text-primary transition-all duration-300 delay-75 font-m" to="/option-5">Option 5</Link></li>
                            </ul>) : ''
                        }
                    </ul>
                    <button className='text-primary py-4 px-8 border border-primary text-[15px] font-bold rounded-md font-inter'>Login / Sign Up</button>
                </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header