import { Excalidraw } from "@excalidraw/excalidraw"
import diagramJson from "./assets/excalidraw/math-map-v1.json"

export default function App() {
  return (
    <div>
      <div className="h-screen">
        <Excalidraw 
          initialData={diagramJson}
          viewModeEnabled={true}
          gridModeEnabled={false}
        />
      </div>
    </div>
  )
}