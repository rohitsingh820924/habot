import React, { useState } from 'react'
import CheckIcon from '../../assets/icons/checked-icon.svg'

const VideoSection = () => {
    const [active, setActive] = useState(1)
  return (
    <div>
        <div className="container rounded-md mx-auto lg:px-[70px] lg:py-[140px] md:p-[40px] p-4 bg-[#072F57]">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
                <div>
                    <iframe className='w-full h-auto aspect-video' width="560" height="315" src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=JveqdYrHjhNVfo00" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div>
                    <div className='mb-10'>
                        <ul className='flex w-full mb-3'>
                            <li className={`md:text-[26px] text-lg transition-all duration-300 delay-75 font-bold w-1/2 text-center cursor-pointer ${active===1 ? 'text-[#EB7150]' : 'text-white'}`} onClick={()=> setActive(1)}>Buyer</li>
                            <li className={`md:text-[26px] text-lg transition-all duration-300 delay-75 font-bold w-1/2 text-center cursor-pointer ${active===2 ? 'text-[#EB7150]' : 'text-white'}`} onClick={()=> setActive(2)}>Supplier</li>
                        </ul>
                        <div className={`h-1 w-1/2 transition-all duration-300 delay-75 bg-[#EB7150] rounded ${active===1 ? '' : 'translate-x-full'}`}></div>
                    </div>
                    <div>
                    {active===1 ? (<ul className='flex flex-col gap-4'>
                            <li className='flex gap-3 text-white font-medium text-sm md:text-lg items-start'><img src={CheckIcon} className='md:mt-1.5 mt-0.5 w-3 md:w-auto h-auto' alt="" />Post your requirements.</li>
                            <li className='flex gap-3 text-white font-medium text-sm md:text-lg items-start'><img src={CheckIcon} className='md:mt-1.5 mt-0.5 w-3 md:w-auto h-auto' alt="" />Sit back for multiple suppliers to contact you.</li>
                            <li className='flex gap-3 text-white font-medium text-sm md:text-lg items-start'><img src={CheckIcon} className='md:mt-1.5 mt-0.5 w-3 md:w-auto h-auto' alt="" />Choose among the suppliers based on the ratings and reviews.</li>
                        </ul>) : (<ul className='flex flex-col gap-4'>
                            <li className='flex gap-3 text-white font-medium text-sm md:text-lg items-start'><img src={CheckIcon} className='md:mt-1.5 mt-0.5 w-3 md:w-auto h-auto' alt="" />Buyer your requirements.</li>
                            <li className='flex gap-3 text-white font-medium text-sm md:text-lg items-start'><img src={CheckIcon} className='md:mt-1.5 mt-0.5 w-3 md:w-auto h-auto' alt="" />Sit back for multiple Buyer to contact you.</li>
                            <li className='flex gap-3 text-white font-medium text-sm md:text-lg items-start'><img src={CheckIcon} className='md:mt-1.5 mt-0.5 w-3 md:w-auto h-auto' alt="" />Choose among the Buyer based on the ratings and reviews.</li>
                        </ul>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoSection