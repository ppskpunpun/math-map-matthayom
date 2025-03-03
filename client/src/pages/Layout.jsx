import { Outlet } from "react-router"
import TopNavBar from "../components/TopNavBar"
import MathMap from "../components/MathMap"
import Footer from "../components/Footer"

export default function Layout() {
  return (
    <div className="font-serif">
      <TopNavBar /> 
      <div className="min-h-screen">
        <Outlet /> 
      </div>
      <Footer />
    </div>
  )
}