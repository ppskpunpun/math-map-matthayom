import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
          className="fixed top-0 left-0 w-screen h-screen bg-backdrop z-40"
        >
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { x: 0, opacity: 1, transition: { type: 'tween', duration: 0.25, ease: 'easeInOut' } },
              closed: { x: '-100%', opacity: 0, transition: { type: 'tween', duration: 0.25, ease: 'easeInOut' } }
            }}
            className="flex flex-col items-center fixed top-0 left-0 w-[300px] h-screen bg-gray-50"
          >
            <ul className='pt-[70px] px-4 gap-2 w-full'>
              <SideBarLink to='/'><FaHouse size='20' />Home</SideBarLink>
              <SideBarLink to='/contents'><FaCalculator size='20' />Contents</SideBarLink>
              <SideBarLink to='/roadmap'><FaMapLocationDot size='20' />Roadmap</SideBarLink>
              <SideBarLink to='/leaderboard'><FaTrophy size='20' />Leaderboard</SideBarLink>
              <SideBarLink to='/about'><FaCircleQuestion size='20' />About</SideBarLink>
            </ul>
            <div className='flex items-end grow'>
              <img className="w-55 mb-20 bg-white rounded-full pt-4 px-2" src={MMM} alt="Profile" />
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
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