import { Excalidraw } from "@excalidraw/excalidraw";
import diagramJson from "../assets/excalidraw/math-map-v2.json";

// Roadmap of Matthayom Mathematics
export default function MathMap({ className }) {
  return (
    <div className={ className }>
      <Excalidraw 
        initialData={diagramJson}
        viewModeEnabled={true}
        gridModeEnabled={false}
      />
    </div>
  )
}