<script lang="ts">
  import { Handle, Position, type NodeProps } from '@xyflow/svelte';
  import NodeWrapper from './NodeWrapper.svelte';
  import type { NodeData } from '../stores/node-state';

  type $$Props = NodeProps;
  export let data: NodeData;
  const { label, flowState, type } = data;

  let value = $flowState.color;
  $: {
    $flowState.color = value;
    data['color'] = value;
  }
</script>

<NodeWrapper {label} {type}>
  <div class="flex items-center space-x-2">
    <input bind:value class="nodrag border-md w-6 h-6" type="color" />
    <b>{value}</b>
  </div>
  <Handle type="source" position={Position.Right} />
</NodeWrapper>
