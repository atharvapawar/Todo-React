import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-500 py-4'>
        <div className="logo hover:scale-110 transition-all duration-200">
            <span className="font-bold text-xl mx-8">iTask</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:scale-110 transition-all duration-200'>Home</li>
        <li className='cursor-pointer hover:scale-110 transition-all duration-200'>Your Task</li>
      </ul>
    </nav>
  ) 
}

export default Navbar
