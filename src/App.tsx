import { BaggageClaim, Search, User } from 'lucide-react'
import './App.css'
import logoImage from '/PETERSONS-logo.png'

function App() {
  return (
    <div className='flex justify-between items-center px-10 text-xl'>
      <div className='w-24'>
        <img className='w-full h-full object-cover' src={logoImage}></img>
      </div>
      <div className='flex gap-5 font-playfair'>
        <span className='navItems navItems:hover'>NEW & FEATURED</span>
        <span className='navItems navItems:hover'>SUITS</span>
        <span className='navItems navItems:hover'>ACCESSORIES</span>
        <span className='navItems navItems:hover'>SHOES</span>
      </div> 
      <div className='flex gap-5'>
        <span className='cursor-pointer'><Search/></span>
        <span className='cursor-pointer'><User/></span>
        <span className='cursor-pointer'><BaggageClaim/></span>
      </div>
    </div>
  )
}

export default App
