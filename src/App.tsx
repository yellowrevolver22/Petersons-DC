import './App.css'
import logoImage from '/PETERSONS-logo.png'

function App() {
  return (
    <div className='flex justify-between items-center px-10 text-xl'>
      <div className='w-30'>
        <img className='w-full h-full object-cover' src={logoImage}></img>
      </div>
      <div className='flex gap-5'>
        <span>NEW & FEATURED</span>
        <span>BAGS</span>
        <span>SLINGS</span>
        <span>ACCESSORIES</span>
        <span>SHOES</span>
      </div>
      <div>
        icons
      </div>
    </div>
  )
}

export default App
