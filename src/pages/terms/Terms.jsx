import React from 'react'
import Banner from "../../assets/Images/banner.png";

const Terms = () => {
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
          Terms of Service
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-28 px-5">
        <p className='text-center'>Welcome to HABOT! By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before accessing or using our platform</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10">
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>1. Acceptance of Terms</h2>
                <p className='text-sm'>By accessing or using HABOT, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and any future modifications. If you do not agree to these terms, please refrain from using our services.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>2. User Responsibilities</h2>
                <p className='text-sm'>You agree to use our platform for lawful purposes only and in accordance with the guidelines set forth in these terms. You must not misuse our services or engage in activities that could harm, disrupt, or compromise the functionality of the platform or its security.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>3. Account Registration</h2>
                <p className='text-sm'>In order to access certain features of HABOT, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process. It is your responsibility to keep your account information secure, and you must notify us immediately if you believe your account has been compromised.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>4. Use of Services</h2>
                <p className='text-sm'>HABOT provides access to a variety of resources and tools for business growth and networking. You agree to use these resources responsibly and in a way that does not violate the rights of others or any applicable laws. We reserve the right to suspend or terminate your account if you violate these terms.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>5. Privacy and Data Collection</h2>
                <p className='text-sm'>Your use of HABOT is governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of your data as outlined in the Privacy Policy.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>6. Payment and Fees</h2>
                <p className='text-sm'>Certain services on HABOT may require payment. By using paid features, you agree to the associated fees and billing terms. Payments are processed through secure methods, and you are responsible for ensuring that the payment details you provide are accurate.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>7. Intellectual Property</h2>
                <p className='text-sm'>All content, logos, trademarks, and materials on the HABOT platform are the property of HABOT or its licensors and are protected by copyright and intellectual property laws. You may not use, copy, or distribute any content from HABOT without permission.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>8. Limitation of Liability</h2>
                <p className='text-sm'>HABOT strives to provide high-quality services, but we do not guarantee that the platform will be free from errors, interruptions, or viruses. In no event shall HABOT be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the platform.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>9. Termination</h2>
                <p className='text-sm'>We reserve the right to suspend or terminate your access to HABOT at any time, without prior notice, if you violate these terms or engage in activities that harm the platform or other users.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>10. Changes to the Terms</h2>
                <p className='text-sm'>HABOT reserves the right to update or modify these Terms of Service at any time. We will notify you of any significant changes, and your continued use of the platform after such changes constitutes your acceptance of the new terms.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>11. Governing Law</h2>
                <p className='text-sm'>These terms are governed by and construed in accordance with the laws of UAE. Any disputes related to these terms will be subject to the exclusive jurisdiction of the courts in UAE.</p>
            </div>
            <div className='p-4 text-center odd:bg-[#E8FBFF] even:bg-white'>
                <h2 className='mb-3 font-semibold text-lg'>12. Contact Us</h2>
                <p className='text-sm'>If you have any questions about these Terms of Service, please contact us at support@habot.com. We're here to help!</p>
            </div>
        </div>
        <p className='text-center'>By using HABOT, you agree to abide by these Terms of Service. Thank you for being a part of our community!</p>
      </div>
      </div>
  )
}

export default Terms