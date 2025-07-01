import React from 'react';
import { ReactFlow, Background, Controls, useNodesState } from '@xyflow/react';
import { useNavigate } from 'react-router';

import '@xyflow/react/dist/style.css';

import myNodes from '../assets/reactFlowNodes.json'

const levelStrokeWidth = 3

const initialNodes = myNodes.map((node) => {
  let newStyle = {}

  if (node.style) {
    newStyle = { ...node.style }
  }

  newStyle = {
    ...newStyle,
    borderRadius: 8,
    border: 0,
    fontFamily: 'Noto Serif Thai',
    color: '#252525'
  }

  node.style = newStyle

  return node
})

const initialEdges = [
  // grades
  { id: 'e1-2', source: '1', target: '2', style: {strokeWidth: levelStrokeWidth} },
  { id: 'e2-3', source: '2', target: '3', style: {strokeWidth: levelStrokeWidth} },
  { id: 'e3-4', source: '3', target: '4', style: {strokeWidth: levelStrokeWidth} },

  // m.4
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e6-7', source: '6', target: '7' },

  { id: 'e2-8', source: '2', target: '8' },
  { id: 'e8-9', source: '8', target: '9' },

  { id: 'e2-10', source: '2', target: '10' },


  // m.5
  { id: 'e3-11', source: '3', target: '11' },
  { id: 'e3-12', source: '3', target: '12' },
  { id: 'e3-13', source: '3', target: '13' },
  { id: 'e3-14', source: '3', target: '14' },
  { id: 'e14-15', source: '14', target: '15' },

  // m.6
  { id: 'e4-16', source: '4', target: '16' },
  { id: 'e4-17', source: '4', target: '17' },
  { id: 'e4-18', source: '4', target: '18' },
  { id: 'e18-19', source: '18', target: '19' },
  { id: 'e19-20', source: '19', target: '20' },
  { id: 'e20-21', source: '20', target: '21' },
].map((edge) => {
  edge.markerEnd = {
    type: 'arrow'
  }
  return edge
});

console.log(initialEdges)

export default function MathMap() {
  const navigate = useNavigate()
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)

  const handleNodeClick = (event, node) => {
    if (node.data.link) {
      navigate(node.data.link)
    }
  }

  // for development
  const positions = nodes.map((node) => {
    const x = {
      id: node.id,
      position: node.position
    }
    return x
  })
  console.log(JSON.stringify(myNodes.map((node) => {
    const id = node.id
    let pos;

    positions.forEach((n) => {
      if (n.id == id) {
        pos = n.position
      }
    })

    node.position = pos
    return node
  })))

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fffffe' }}>
      <ReactFlow nodes={nodes} onNodesChange={onNodesChange} edges={initialEdges} onNodeClick={handleNodeClick} fitView>
        <Background variant='dots' gap={24} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
