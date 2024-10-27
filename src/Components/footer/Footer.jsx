import React from 'react'
import Logo from '../../assets/Images/habot-logo-footer.svg'
import Linkedin from '../../assets/icons/linkedin-icon.svg'
import Twitter from '../../assets/icons/twitter-icon.svg'
import Facebook from '../../assets/icons/facebook-icon.svg'
import Instagram from '../../assets/icons/instagram-icon.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-secondary py-[40px]'>
        <div className="container mx-auto px-4 border-t border-b border-white/20 py-[30px]">    
            <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className='grid text-center md:text-start md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10'>
                    <div className='md:col-span-3 lg:col-span-2'>
                        <Link to="/">
                            <img src={Logo} alt="logo" className='w-[200px] h-auto mx-auto md:mx-0' />
                        </Link>
                        <p className='font-light text-white text-base mt-5'>© R Singhania</p>
                    </div>

                    <div>
                        <h2 className='text-[15px] text-white font-bold mb-3 font-inter'>Company</h2>
                        <ul>
                            <li><Link className='text-white font-light text-sm mb-2 font-inter' to="/about">About</Link></li>
                            <li><Link className='text-white font-light text-sm mb-2 font-inter' to="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-[15px] text-white font-bold mb-3 font-inter'>Terms</h2>
                        <ul>
                            <li><Link className='text-white font-light text-sm mb-2 font-inter' to="/data-privacy">Data privacy</Link></li>
                            <li><Link className='text-white font-light text-sm mb-2 font-inter' to="/terms">Terms</Link></li>
                            <li><Link className='text-white font-light text-sm mb-2 font-inter' to="/accessibility">Accessibility</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-[15px] text-white font-bold mb-3 font-inter'>Related</h2>
                        <ul>
                            <li><Link className='text-white font-light text-sm mb-2 font-inter' to="/find-buyer">Find Buyer</Link></li>
                            <li><Link className='text-white font-light text-sm mb-2 font-inter' to="/feedback">Feedback</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='flex gap-4 self-center'>
                    <div className='border transition-all delay-75 duration-300 hover:border-white cursor-pointer border-white/20 p-3 rounded-full'>
                        <img src={Linkedin} alt="linkedin" />
                    </div>
                    <div className='border transition-all delay-75 duration-300 hover:border-white cursor-pointer border-white/20 p-3 rounded-full'>
                        <img src={Twitter} alt="twitter" />
                    </div>
                    <div className='border transition-all delay-75 duration-300 hover:border-white cursor-pointer border-white/20 p-3 rounded-full'>
                        <img src={Facebook} alt="facebook" />
                    </div>
                    <div className='border transition-all delay-75 duration-300 hover:border-white cursor-pointer border-white/20 p-3 rounded-full'>
                        <img src={Instagram} alt="instagram" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer