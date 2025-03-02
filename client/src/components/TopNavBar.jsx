import { NavLink, useNavigate } from "react-router"
import Button from "./Button"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"

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
    <nav className="grid grid-cols-3 md:flex items-center bg-white px-6 py-2 sticky top-0 shadow-md font-serif z-10">
      <div className="z-10">
        <HamburgerMenu className="md:hidden" />
      </div>
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