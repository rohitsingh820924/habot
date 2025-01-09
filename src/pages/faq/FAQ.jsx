import React from 'react'
import Banner from "../../assets/Images/banner.png";
import { Collapse } from 'antd';

const FAQ = () => {

    const items = [
        {
          key: '1',
          label: 'What is HABOT?',
          children: (<p>HABOT is a platform designed to empower entrepreneurs, creators, and businesses by providing access to a vibrant community, valuable resources, and tools for growth and success.</p>),
        },
        {
          key: '2',
          label: 'How do I sign up for HABOT?',
          children: (<p>Signing up is easy! Click on the "Sign Up" button on the homepage, fill in your details, and join our growing community in just a few steps.</p>),
        },
        {
          key: '3',
          label: 'Who can join HABOT?',
          children: (<p>HABOT is open to anyone with a passion for growth and innovation, whether you’re an entrepreneur, a small business owner, a creator, or someone with a great idea looking to bring it to life.</p>),
        },
        {
          key: '4',
          label: 'What benefits does HABOT offer?',
          children: (<><p>By joining HABOT, you gain access to:</p>
            <ul className='list-disc mt-3 pl-8'>
                <li className='mb-2'>A network of like-minded individuals.</li>
                <li className='mb-2'>Exclusive tools and resources for business growth.</li>
                <li className='mb-2'>Opportunities to collaborate and expand your reach.</li>
                <li>Insights and guidance to help you achieve your goals.</li>
            </ul></>
          ),
        },
        {
          key: '5',
          label: 'Is HABOT free to use?',
          children: (<p>HABOT offers both free and premium plans, depending on the tools and resources you want to access. Visit our pricing page for detailed information.</p>),
        },
        {
          key: '6',
          label: 'Can I collaborate with other members on HABOT?',
          children: (<p>Absolutely! HABOT encourages collaboration through community features that make it easy to connect, share ideas, and work on projects together.</p>),
        },
      ];
  return (
    <div className=''>
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
          Frequently Asked Question
          </h1>
        </div>
      </div>
      <div className='container mx-auto p-10'>
        <Collapse items={items} bordered={false} defaultActiveKey={['1']} />
        </div>
    </div>
  )
}

export default FAQ