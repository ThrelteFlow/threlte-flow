<script lang="ts">
  import { SvelteFlowProvider } from '@xyflow/svelte';

  import './tailwind.css';
  import '@xyflow/svelte/dist/style.css';

  import { Canvas } from '@threlte/core'
  import Scene from './components/Scene.svelte'
  import Flow from './components/Flow.svelte';
  import Docs from './docs/Documentation.svelte';
</script>

<style>
:global(.provider main) {
  height: 50vh !important;
}

.canvas {
  height: 50vh !important;
}

.grid-container {
     display: grid;
     grid-template-rows: 1fr 1fr;
     grid-template-columns: 1fr 1fr; /* One column takes up 1 fraction of the space, and two columns take up 2 fractions of the space */
     height: 100vh; /* Ensures the container takes full available height */
   }

   .left-column {
    overflow: auto;
    grid-column: 1 / 2; /* Starts at the first grid line and ends at the second, occupying the first column */
    grid-row: 1 / 3; /* Spans from the first to the third row */
    background-image: repeating-linear-gradient(
    45deg,
    #717171,
    #777777 10px,
    #6d6d6d 10px,
    #6c6c6c 20px
  );
  }

 .right-top {
    grid-column: 2 / 3; /* Starts at the second grid line and ends at the third, occupying the second column */
    grid-row: 1 / 2; /* Occupies the first row */
  }

 .right-bottom {
    grid-column: 2 / 3; /* Same as the top right, but occupies the second row */
    grid-row: 2 / 3;
  }
 </style>
 
 <div class="grid-container">

  <div class="left-column"><Docs /></div>

  <div class="provider right-top">
    <SvelteFlowProvider>
      <Flow />
    </SvelteFlowProvider>
  </div>
   
   <div class="canvas right-bottom">
     <Canvas>
       <Scene />
     </Canvas>
   </div>
 </div>