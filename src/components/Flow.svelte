<script lang="ts">
  import { writable } from 'svelte/store';
  import {
    SvelteFlow,
    Controls,
    Background,
    BackgroundVariant,
    MiniMap,
    useSvelteFlow,
    type Node, type Edge,
    type IsValidConnection
  } from '@xyflow/svelte';
  import Sidebar from './Sidebar.svelte';
  import '@xyflow/svelte/dist/style.css';
  
  import { initialNodes, initialEdges, flowState } from '../stores/node-state.ts';
  import ColorPickerNode from './nodes/ColorPickerNode.svelte';
  import ObjectSelectorNode from './nodes/ObjectSelectorNode.svelte';

  let allowConnection;
  const nodes = writable<Node[]>(initialNodes);
  const edges = writable<Edge[]>(initialEdges);

  const nodeTypes = {
    colorpicker: ColorPickerNode,
    objectselector: ObjectSelectorNode
  };

  // Define a function that sets up the subscription logic
function subscribeToNodes(connection) {
  // Capture connection.source and connection.target in the closure
  const sourceNodeId = connection.source;
  const targetNodeId = connection.target;

  // Subscribe to nodes
  const unsubscribe = nodes.subscribe(value => {
    // Find the source and target nodes by ID
    const sourceNode = value.find(node => node.id === sourceNodeId);
    const targetNode = value.find(node => node.id === targetNodeId);

    // Log or otherwise handle the connection based on the node types
    if (sourceNode?.type === 'colorpicker' && targetNode?.type === 'objectselector') {
      // console.log('Valid connection:', sourceNode.type, "+", targetNode.type);
      allowConnection = true;
    } else {
      // console.log('Invalid connection:', sourceNode?.type, "+", targetNode?.type);
      allowConnection = false;
    }
  });
}

  // Define the isValidConnection function
  const isValidConnection: IsValidConnection = (connection) => {
    // Extract the source and target node IDs from the connection
    subscribeToNodes(connection)
    return allowConnection      
  // onDestroy(subs)
  };

  const { screenToFlowPosition } = useSvelteFlow();
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    if (!event.dataTransfer) {
      return null;
    }

    const type = event.dataTransfer.getData('application/svelteflow');

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY
    });

    const newNode = {
      id: `${Math.random()}`,
      type,
      position,
      data: {
        flowState,
        label: `${Math.random()}`,
        type: type
      },
      origin: [0.5, 0.0]
    } satisfies Node;

    $nodes.push(newNode);
    $nodes = $nodes;
  };
</script>

<main>
  <SvelteFlow {nodes} {nodeTypes} {edges} fitView on:dragover={onDragOver} on:drop={onDrop}>
    <Controls />
    <Background variant={BackgroundVariant.Dots} />
    <!-- <MiniMap /> -->
  </SvelteFlow>
  <Sidebar />
</main>

<style>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
