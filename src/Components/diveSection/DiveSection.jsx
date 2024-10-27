import React from 'react'
import { Link } from 'react-router-dom'

const DiveSection = () => {
    const Locations = [
        {
            city: "Abu Dhabi",
            url: "#"
        },
        {
            city: "Dubai",
            url: "#"
        },
        {
            city: "Sharjah & Ajman",
            url: "#"
        },
        {
            city: "Fujairah",
            url: "#"
        },
        {
            city: "Ras Al Khaimah",
            url: "#"
        },
        {
            city: "Umm Al Quwain",
            url: "#"
        },
    ]
  return (
    <div className='py-[40px] md:py-[100px]'>
        <div className="container mx-auto p-4">
            <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-20 lg:gap-40">
                <div>
                    <h2 className='text-2xl md:text-4xl font-bold'>Ready to dive into <span className='text-[#271555]'>HABOT?</span></h2>
                    <p className='font-light my-9 text-sm md:text-lg'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>

                    <a href="#" className='group bg-primary w-full block p-5 text-white text-center font-bold text-lg rounded-md relative max-w-[320px] '>Sign up Today !
                    <svg className='absolute top-[26px] right-10 transition-transform duration-300 group-hover:translate-x-2' width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.7885 7.52684L24.5159 0.254223C24.2547 -0.050834 23.7956 -0.0863957 23.4905 0.174912C23.1855 0.436157 23.1499 0.895274 23.4112 1.20033C23.4356 1.22877 23.4621 1.25533 23.4905 1.27964L29.5195 7.31591H0.727237C0.325619 7.31591 0 7.64153 0 8.04321C0 8.44489 0.325619 8.77045 0.727237 8.77045H29.5195L23.4905 14.7994C23.1855 15.0606 23.1499 15.5198 23.4112 15.8248C23.6725 16.1299 24.1316 16.1654 24.4366 15.9041C24.4651 15.8798 24.4916 15.8533 24.5159 15.8248L31.7886 8.5522C32.0705 8.26864 32.0705 7.81052 31.7885 7.52684Z" fill="white"/>
                    </svg>

                    </a>
                </div>
                <div className='grid md:grid-cols-2 gap-6'>
                    {
                        Locations?.map((item,i) => <Link to={item.url} key={i} className='block bg-white transition-all delay-100 duration-300 hover:bg-[#E7760D] border font-medium text-[#3E3E3E] hover:text-white text-lg text-center rounded-md border-[#E7760D] p-4'>{item.city}</Link>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiveSection