<script lang="ts">
    const onDragStart = (event: DragEvent, nodeType: string) => {
      if (!event.dataTransfer) {
        return null;
      }
  
      event.dataTransfer.setData('application/svelteflow', nodeType);
      event.dataTransfer.effectAllowed = 'move';
    };
  </script>
  
  <aside>
    <div class="label">You can drag these nodes to the pane below.</div>
    <div class="nodes-container">
      <div
        class="object-node node"
        on:dragstart={(event) => onDragStart(event, 'objectselector')}
        draggable={true}
      >
        Object Node
      </div>
      <div
        class="color-node node"
        on:dragstart={(event) => onDragStart(event, 'colorpicker')}
        draggable={true}
      >
        Color Node
      </div>
      <div
        class="output-node node"
        on:dragstart={(event) => onDragStart(event, 'output')}
        style="background: grey"
        draggable={false}
      >
        Output Node
      </div>
    </div>
  </aside>
  
  <style>
    aside {
      width: 100%;
      background: #f4f4f4;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .label {
      /* margin: 1rem 0; */
      font-size: 0.9rem;
    }
  
    .nodes-container {
      display: flex;
      /* position: absolute; */
      top: 0;
      align-items: center;
      justify-content: center;
    }
  
    .node {
      margin: 0.5rem;
      border: 1px solid #111;
      padding: 0.5rem 1rem;
      font-weight: 700;
      border-radius: 3px;
      text-align: center;
      cursor: grab;
      width: 150px;
    }
  </style>