import type { Node, Edge } from '@xyflow/svelte';
import { writable, type Writable } from 'svelte/store';

export type FlowState = {
  color: string;
  zoom: number;
  shape: string;
};

export const flowState = writable<FlowState>({
  color: '#1fff9e',
  zoom: 17,
  shape: 'cube'
});

export type NodeData = {
  flowState: Writable<FlowState>;
  label: string;
};

// export const initialNodes: Node[] = [];
export const initialNodes: Node[] = [
  {
    id: 'color',
    type: 'colorpicker',
    position: { x: 50, y: -100 },
    data: {
      flowState,
      label: 'colorpicker',
      type: 'colorpicker'
    },
    class: 'w-[200px] lg:w-[100px]'
  },
  {
    id: 'object',
    type: 'objectselector',
    position: { x: 300, y: 50 },
    data: {
      flowState,
      label: 'object selector',
      type: 'objectselector'
    },
    class: 'w-[150px]'
  }];

const edgeStyle = 'stroke:#D2D2D2; stroke-width:2;';

// export const initialEdges: Edge[] = []
export const initialEdges: Edge[] = [
  {
    id: 'color->object',
    source: 'color',
    target: 'object',
    style: edgeStyle,
    animated: true
  }]