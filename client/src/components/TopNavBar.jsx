import { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link } from "react-router"
import { useAuth } from "../provider/authProvider"
import Button from "./Button"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import { FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaHouse, FaBookOpen, FaMapLocationDot, FaCircleQuestion, FaTrophy, FaDumbbell  } from 'react-icons/fa6';
import { MdOutlineExitToApp } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";

function NavLinkItem({ children, to='/' }) {
  return (
    <NavLink to={to} end
      className={({ isActive }) => 'transition-all duration-300 hover:text-secondary-500 flex gap-1 ' + (isActive && 'border-b-2 border-secondary-500 text-secondary-500')}
    >
      { children }
    </NavLink>
  )
}

function DropDownItem({ children, onClick }) {
  return (
    <li>
      <button className='flex gap-2 items-center p-3 w-full hover:cursor-pointer bg-primary-400 hover:bg-primary-500 text-slate-800 hover:text-white transition-all duration-100' onClick={onClick}>{ children }</button>
    </li>
  )
}

function UserDropDown({ username }) {
  const [ isDrop, setIsDrop ] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <div>
      <button onClick={ () => setIsDrop((val) => !val) } className='flex hover:cursor-pointer items-stretch gap-2 text-slate-700'>
        <FaUser />
        {username}
        {
          isDrop
          ? <FaChevronUp className='translate-y-0.5' />
          : <FaChevronDown className='translate-y-0.5' />
        }
      </button>
      { isDrop &&
        <ul className='fixed flex flex-col top-[50px] right-2 w-[150px] border-1 border-gray-200 gap-[1px] bg-gray-200 rounded-sm overflow-hidden'>
          <DropDownItem onClick={() => navigate('/profile') }><AiOutlineProfile />Profile</DropDownItem>
          <DropDownItem onClick={auth.logout}><MdOutlineExitToApp />Log out</DropDownItem>
        </ul>
      }
    </div>

  )
}

export default function TopNavBar() {
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <nav className="grid grid-cols-3 md:flex items-center h-[56px] bg-white px-6 py-2 sticky top-0 shadow-md font-serif z-10">
      <div className="z-10">
        <HamburgerMenu className="md:hidden" />
      </div>
      <NavLink className="flex grow justify-center md:grow-0" to='/'>
        <Logo />
      </NavLink>
      <div className="hidden md:flex md:gap-5 lg:gap-12 justify-center text-slate-500 grow">
        <NavLinkItem to='/'><FaHouse size='20' />Home</NavLinkItem>
        <NavLinkItem to='/contents'><FaBookOpen size='20' />Contents</NavLinkItem>
        <NavLinkItem to='/roadmap'><FaMapLocationDot size='20' />Roadmap</NavLinkItem>
        <NavLinkItem to='/practice'><FaDumbbell size='20' />Practice</NavLinkItem>
        <NavLinkItem to='/leaderboard'><FaTrophy size='20' />Leaderboard</NavLinkItem>
        <NavLinkItem to='/about'><FaCircleQuestion size='20' />About</NavLinkItem>
      </div>
      <div className="flex justify-end">
        {
          auth.isLogin
          ? <UserDropDown username={auth.userData?.username} />
          : <Button variant='outline_primary' onClick={ () => { navigate('/login') } }>Login &rarr;</Button>
        }
      </div>
    </nav>
  )
}
