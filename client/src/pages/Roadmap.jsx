import { Excalidraw } from '@excalidraw/excalidraw'
import diagramJson from "../assets/excalidraw/math-map-v1.json";
import MathMap from '../components/MathMap'
import TopNavBar from '../components/TopNavBar';

function Circle({ color }) {
  return (
    <div className={"w-5 h-5 rounded-full border-1 border-slate-500/50"} style={{backgroundColor: color}} />
  )
}


function ColorDef({ colors, title }) {
  return (
    <div className="grid grid-cols-2 gap-2 items-center">
      <div className="flex gap-2">
        { colors.map((color) => <Circle key={color} color={color} />) }
      </div>
      { title }
    </div>
  )
}

function ColorsDefinition() {

  return (
    <div className="fixed bottom-4 right-4 bg-slate-200/20 rounded-md z-10 text-xs p-4 text-slate-500 flex flex-col gap-2">
      <ColorDef colors={["lightblue", "lightskyblue", "lightgreen"]} title="จำนวนและพีชคณิต"/>
      <ColorDef colors={["moccasin", "lemonchiffon"]} title="สติถิและความน่าจะเป็น"/>
      <ColorDef colors={["pink"]} title="การวัดและเรขาคณิต"/>
      <ColorDef colors={["lightcoral"]} title="แคลคูลัส"/>
    </div>
  )
}

export default function Roadmap() {
  return (
    <div className='flex flex-col h-screen'>
      <TopNavBar />
      <ColorsDefinition />
      <MathMap className='grow' />
    </div>
  )
}
