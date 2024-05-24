<script lang="ts">
    import { Handle, Position, type NodeProps, type IsValidConnection, useNodes, useEdges } from '@xyflow/svelte';
    import NodeWrapper from './NodeWrapper.svelte';
    import type { NodeData } from '../stores/node-state';
    import { globalScene, objectsGroup } from '../../stores/scene-state.js';

    const isValidConnection: IsValidConnection = (connection) => connection.target === 'B';
    const nodes = useNodes();
    const edges = useEdges();

    let prevColor, prevSelectedObject
    let myItems = [];

    let selectedOption;

    $: {
        if(selectedOption && selectedOption != "-None-") {
          let object = $globalScene.getObjectByProperty( 'uuid' , selectedOption);

          // Subscribe to changes in the flow's state
          const unsubscribe = nodes.subscribe(newNodes => {
            // Check if a specific node is already connected
            const sourceNode = newNodes.find(node => node.data.label === label);
            const nodeId = sourceNode?.id; //labels are unique as a simple workaround as cannot use useNodeId() in Svelte

            edges.subscribe(newEdges => {
              const isConnected = newEdges.some(edge => edge.source === nodeId || edge.target === nodeId);
              console.log(newEdges.find(edge => edge.target === nodeId))
              const sourcePickerId = newEdges.find(edge => edge.target === nodeId)?.source
              const sourcePickerData = newNodes.find(node => node.id === sourcePickerId);

              if (isConnected) {
                object.material.color.set(sourcePickerData?.data.color);
              } else {
                console.log(`Node ${nodeId} is not connected.`);
              }
            })
          });
        // Cleanup on unmount
        // return () => unsubscribe();
        }
    }


    $: {
      if($objectsGroup)
      $objectsGroup.children.forEach( (child) => {
        console.log("AND PASSED!" + child.uuid)
        //some method is used to check if myItems already
        //contains an item with an id that matches child.uuid.
        if (myItems.length != $objectsGroup.children.length) //clumsy way of avoiding error when dragging
        if (!myItems.some(item => item.id === child.uuid))
        updateMyItems(child.uuid, child.name);
    })
    }

    function updateMyItems(uuid,name){
      myItems = [...myItems, {id: uuid, name: name}]
      // myItems.push({id: uuid, name: name})
    }
    type $$Props = NodeProps;
    export let data: NodeData;
    const { label, type } = data;
    
    export let props: NodeProps;

    console.log("MY ID:")
    console.log(props)

  </script>
  
  <NodeWrapper {label} {type}>
    <div class="flex items-center space-x-2">
      <select bind:value={selectedOption}>
        <option>-None-</option>
      {#each myItems as option}
        <option value={option.id}>{option.name}</option>
      {/each}
      </select>
    </div>
    <!-- <p>Selected Option: {selectedOption? selectedOption : 'None'}</p> -->
    <Handle type="target" position={Position.Left} />
  </NodeWrapper>