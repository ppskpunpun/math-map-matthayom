import { Excalidraw } from '@excalidraw/excalidraw'
import diagramJson from "../assets/excalidraw/math-map-v1.json";
import MathMap from '../components/MathMap'
import TopNavBar from '../components/TopNavBar';

export default function Roadmap() {
  return (
    <div className='flex flex-col h-screen'> 
      <TopNavBar />
      <MathMap className='grow' />
    </div>
  )
}