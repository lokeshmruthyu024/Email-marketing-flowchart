import { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  Background,
  Controls,
  type Connection,
  type Edge,
  type Node,
  Position,
  BackgroundVariant,
} from '@xyflow/react';

import CustomNode from './reactflowtools/CustomNode';
import Backgrounds from './reactflowtools/backgroundindex';
import '@xyflow/react/dist/style.css';
// import CustomNodeFlow, { Custom } from './reactflowtools/subindex/index'


const nodeSize = {
  width: 200,
  height: 40,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Send Email' },
    position: { x: 450, y: 0 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
    ],
  },
  {
    id: '2',
    data: { label: 'Group or Ungroup' },
    position: { x: -250, y: 50 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },
    ],
  },
  {
    id: '3',
    data: { label: 'Tag or UnTag' },
    position: { x: -250, y: 100 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },
    ],
  },
  {
    id: '4',
    data: { label: 'Unsubsriber' },
    position: { x: -250, y: 150 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },
    ],
  },

  {
    id: '6',
    data: { label: 'Update/Archive Contact' },
    position: { x: -250, y: 200 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },
    ],
  },
  {
    id: '7',
    data: { label: 'Add Survey' },
    position: { x: -250, y: 250 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },
    ],
  },
  {
    id: '8',
    data: { label: 'Add Multimedia files' },
    position: { x: -250, y: 300 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },
    ],
  },
  {
    id: '9',
    data: { label: 'Set Schedule to send' },
    position: { x: -250, y: 350 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },
    ],
  },
  {
    id: '10',
    data: { label: 'Wait' },
    position: { x: -250, y: 400 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },

    ],
  },
  {
    id: '11',
    data: { label: 'Send Email' },
    position: { x: -250, y: 450 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },

    ],
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  // { id: 'e1-3', source: '1', target: '3', animated: true },
];

const nodeTypes = {
  custom: CustomNode,
};

function KYC() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: 1300, height: 720 }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        width={700}
        height={400}
      >
        {/* <BasicFlow /> */}
        <Backgrounds />
        <Controls />
        {/* <CustomNodeFlow /> */}
      </ReactFlow>
    </div>
  );
}

export default KYC;
