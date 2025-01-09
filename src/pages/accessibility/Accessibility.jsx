import React from 'react'
import Banner from "../../assets/Images/banner.png";

const Accessibility = () => {
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
          Accessibility
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-5">
            <p className="mb-5 text-sm">At HABOT, we are committed to providing a website that is accessible to all users, including individuals with disabilities. We believe that everyone should have equal access to information and opportunities, and we are dedicated to improving the user experience for all visitors.</p>
            <h2 className='text-secondary font-semibold mb-5'>Our Commitment to Accessibility</h2>
            <p className="mb-5 text-sm">We strive to ensure that our website is fully accessible and usable for individuals with various disabilities, including those with visual, hearing, motor, or cognitive impairments. Our goal is to meet or exceed the accessibility standards outlined by the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level.</p>
            <h2 className='text-secondary font-semibold mb-5'>Efforts to Improve Accessibility</h2>
            <p className="mb-5 text-sm">We continually monitor and improve the accessibility of our website by:</p>
            <ul className='list-disc pl-10 text-sm mb-5'>
                <li className='mb-3'>Implementing accessible design practices and ensuring compatibility with screen readers, keyboard navigation, and other assistive technologies.</li>
                <li className='mb-3'>Providing alternative text for images, videos, and other multimedia elements.</li>
                <li>Ensuring that all interactive elements, such as forms and buttons, are fully accessible to keyboard and screen reader users.</li>
            </ul>
            <h2 className='text-secondary font-semibold mb-5'>Feedback and Assistance</h2>
            <p className="mb-3 text-sm">We are committed to making HABOT accessible to all users. If you experience any difficulty accessing content or have suggestions on how we can improve accessibility, please reach out to us. Your feedback is invaluable in helping us improve the experience for everyone.</p>
            <p className="mb-3 text-sm">You can contact our accessibility team at accessibility@habot.com for assistance or to provide feedback.
            <p className="text-sm">We are dedicated to ensuring that our website is accessible and user-friendly for everyone, and we will continue to work towards improving accessibility standards across all aspects of our platform.</p>
            </p>
          </div>
        </div>
  )
}

export default Accessibility