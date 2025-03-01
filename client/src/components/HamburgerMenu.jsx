import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { FaHouse, FaCalculator, FaMapLocationDot, FaCircleQuestion, FaTrophy  } from 'react-icons/fa6';
import Button from './Button';
import MMM from '../assets/MMM2.svg';

function HamburgerBtn({ className, isOpen, onClick }) {
  return (
    <button 
      className={`py-2 hover:py-1 w-10 h-10 ${isOpen ? 'bg-white' : 'bg-slate-200' } rounded-full flex flex-col justify-evenly items-center transition-all duration-200 hover:bg-slate-300 hover:cursor-pointer z-50` + " " + className}
      onClick={ onClick }
    >
      <div className={`transition-all duration-400 rounded-full h-[3px] bg-slate-500 w-5 ${isOpen ? 'absolute rotate-45' : ''}`}></div>
      <div className={`transition-all duration-400 rounded-full h-[3px] bg-slate-500 w-5 ${isOpen ? 'opacity-0 rotate-45' : ''}`}></div>
      <div className={`transition-all duration-400 rounded-full h-[3px] bg-slate-500 w-5 ${isOpen ? 'absolute -rotate-45' : ''}`}></div>
    </button>
  )
}

function SideBarLink({ children, to }) {
  return (
    <li>
      <NavLink className={({ isActive }) => `flex px-8 py-4 gap-5 text-slate-700 rounded-2xl ${isActive ? 'bg-primary-500 text-white shadow-sm' : ''}`} to={to} end>{ children }</NavLink>
    </li>  
  )
}

function Sidebar({ isOpen }) {
  const [ isHidden, setIsHidden ] = useState(true);

  // handle close animation
  // isOpen state controls opacity (for animation)
  // isHidden state controls visibility (wait for closing animation then close)
  useEffect(() => {
    if (isOpen == false) {
      setTimeout(() => setIsHidden(true), 400);
    } else {
      setIsHidden(false);
    }
  }, [isOpen]);

  return (
    <div className={`${isHidden && 'hidden'} flex flex-col fixed top-0 left-0 w-screen h-screen bg-backdrop transition-all duration-400 z-40 ${isOpen ? 'opacity-100' : 'opacity-0' }`}>
      <aside className={`flex flex-col items-center fixed top-0 left-0 w-[300px] h-screen bg-gray-50 transition-all duration-400 ${isOpen ? 'translate-x-0' : '-translate-x-[100%]'}`}>
        <ul className='pt-[70px] px-4 gap-2 w-full'>
          <SideBarLink to='/'><FaHouse size='20'/>Home</SideBarLink>
          <SideBarLink to='/contents'><FaCalculator size='20'/>Contents</SideBarLink>
          <SideBarLink to='/roadmap'><FaMapLocationDot size='20'/>Roadmap</SideBarLink>
          <SideBarLink to='/leaderboard'><FaTrophy size='20'/>Leaderboard</SideBarLink>
          <SideBarLink to='/about'><FaCircleQuestion size='20' />About</SideBarLink>
        </ul> 
        <div className='flex items-end grow'>
          <img className="w-55 mb-20 bg-white rounded-full pt-4 px-2" src={MMM} />
        </div>
      </aside>
    </div>
  )
}

export default function HamburgerMenu({ className }) {
  const [ isOpen, setIsOpen ] = useState(false);
 
  return (
    <>
      <HamburgerBtn className={className} isOpen={ isOpen } onClick={ () => setIsOpen((val) => !val) }/>
      <Sidebar isOpen={ isOpen } />
    </>
  )
}