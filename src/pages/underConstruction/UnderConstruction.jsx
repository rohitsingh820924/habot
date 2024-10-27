import React from 'react'
import ConstructionImage from '../../assets/Images/under-construction.png'
import { Link, useParams } from 'react-router-dom'
const UnderConstruction = () => {
    const { slug } = useParams();
  return (
    <div className='py-[100px]'>
        <div className='container mx-auto px-4 text-center'>
            <img src={ConstructionImage} alt="" className='w-full h-auto max-w-2xl mx-auto' />
            <h1 className='text-primary text-xl md:text-5xl mt-10 mb-5 md:mb-10 text-center font-bold'>Page Under Construction</h1>
            <p className='text-primary mb-5 text-md'>{slug}</p>
            <Link to="/" className='bg-secondary inline-block py-4 px-10 text-white text-lg rounded-md'>Go To Home</Link>
        </div>
    </div>
  )
}

export default UnderConstruction