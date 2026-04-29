import { useEffect, useState } from 'react';
import LogoImage from '../assets/icon.svg?react'
import { BaggageClaim, Menu, Search, User } from 'lucide-react'

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 10) //check if scroll y is more than 10 px means it moved
    }
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])


  return (
    <nav>
      <div className={`w-full flex justify-between items-center px-15 py-2 text-xl z-20 fixed top-0
      transition duration-300 ${visible ? 'bg-white' : 'bg-transparent text-white'}`}>
        <div className='flex gap-2 items-center'>
          <span><Menu></Menu></span>
          <span className='font-archivo'>Menu</span>
        </div>
        {/* <div className='flex gap-5 font-playfair'>
          <span className='navItems navItems:hover'>NEW & FEATURED</span>
          <span className='navItems navItems:hover'>SUITS</span>
          <span className='navItems navItems:hover'>ACCESSORIES</span>
          <span className='navItems navItems:hover'>SHOES</span>
        </div> */}
        <div className='w-30'>
          <LogoImage className={`w-30 h-auto ${visible ? 'text-black' : 'text-white'}`}></LogoImage>
        </div>
        <div className='flex gap-5'>
          <span className='cursor-pointer'><Search /></span>
          <span className='cursor-pointer'><User /></span>
          <span className='cursor-pointer'><BaggageClaim /></span>
        </div>
      </div>
    </nav>
  )
}