import { NavLink, useNavigate } from "react-router"
import Button from "./Button"
import HamburgerMenu from "./HamburgerMenu"
import MMM from '../assets/MMM1.svg'

function Logo() {
  return (
    <div className="h-0">
      <img className="w-16 -translate-y-8" src={MMM} />
    </div>
  )

  return (
    <div className="font-bold text-4xl flex gap-2">
      <span className="text-primary-500">M</span>
      <span className="text-accent-1">M</span>
      <span className="text-secondary-500">M</span>
    </div>
  )
}

function NavLinkItem({ children, to='/' }) {
  return (
    <NavLink to={to} end 
      className={({ isActive }) => 'transition-all duration-300 hover:text-secondary-500 ' + (isActive && 'border-b-2 border-secondary-500 text-secondary-500')}
    >
      { children }
    </NavLink>
  )
}

export default function TopNavBar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center bg-white px-6 py-2 sticky top-0 shadow-md font-serif z-10">
      <HamburgerMenu className="md:hidden mr-3" />
      <NavLink className="flex grow justify-center md:grow-0" to='/'>
        <Logo />
      </NavLink>
      <div className="hidden md:flex md:gap-5 lg:gap-12 justify-center text-slate-500 grow">
        <NavLinkItem to='/'>Home</NavLinkItem>
        <NavLinkItem to='/contents'>Contents</NavLinkItem>
        <NavLinkItem to='/roadmap'>Roadmap</NavLinkItem>
        <NavLinkItem to='/practice'>Practice</NavLinkItem>
        <NavLinkItem to='/leaderboard'>Leaderboard</NavLinkItem>
        <NavLinkItem to='/about'>About</NavLinkItem>
      </div> 
      <div className="flex justify-end">
        <Button variant='outline_primary' onClick={ () => { navigate('/login') } }>Login &rarr;</Button> 
      </div>
    </nav>
  )
}