import { Outlet } from "react-router"
import TopNavBar from "../components/TopNavBar"
import MathMap from "../components/MathMap"

export default function Layout() {
  return (
    <div className="font-serif">
      <TopNavBar /> 
      <Outlet /> 
    </div>
  )
}