<script>
    import './docs-style.css'
    // import "https://cdn.jsdelivr.net/npm/fork-corner/dist/fork-corner.min.js"
</script>

<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-corner/dist/fork-corner.min.css"> -->


  <section>
    <h1><center><b>ThrelteFlow</b></center></h1>

    <h1>Description</h1>
    <p>This is a showcase usage of <a href="https://svelteflow.dev/">Svelte Flow</a> with <a href="https://threlte.xyz/">Threlte</a>.</p>
    <br />

    <h1>Reasoning</h1>
    <p>The <a href="https://svelteflow.dev/examples/misc/threlte-flow">example</a> on Svelte Flow website allows interaction with a node that incorporates the scene, but realistically, a main Scene might be used from another Svelte component. This repository shows how this can be achieved by passing required data from <a href="https://threejs.org/">ThreeJS</a> to nodes using a Svelte store.</p>
    <br />

    <h1>Structure</h1>
  
    <section>
        <h1>Components under the src folder:</h1>
        <ul>
          <li>📂nodes
            <ul>
              <li class="file-description">
                <span class="filename">📄ColorPickerNode.svelte</span>
                <span class="description">A node for selecting colors</span>
              </li>
              <li class="file-description">
                <span class="filename">📄NodeWrapper.svelte</span>
                <span class="description">A wrapper component for nodes, handling its look</span>
              </li>
              <li class="file-description">
                <span class="filename">📄ObjectSelectorNode.svelte</span>
                <span class="description">A specialized node for selecting objects from a list</span>
              </li>
            </ul>
          </li>
          
          <li class="file-description">
            <span class="filename">📄Flow.svelte</span>
            <span class="description">The main diagram and connection rules for valid connections</span>
          </li>
          <li class="file-description">
            <span class="filename">📄Scene.svelte</span>
            <span class="description">The main Threlte scene with named primitives</span>
          </li>
          <li class="file-description">
            <span class="filename">📄Sidebar.svelte</span>
            <span class="description">A sidebar with draggable components</span>
          </li>
          <li>📂stores
            <ul>
                <li class="file-description">
                    <span class="filename">📄node-state.ts</span>
                    <span class="description">Default nodes and parameters</span>
                </li>
                <li class="file-description">
                    <span class="filename">📄scene-state.js</span>
                    <span class="description">Allows nodes to access the scene and meshes</span>
                </li>
            </ul>
          </li>

          <li>📄App.svelte</li>
        </ul>
      </section>
  
    <h2>Usage</h2>
    <pre><code>
        &lt;SvelteFlowProvider&gt
          &lt;Flow /&gt
        &lt;/SvelteFlowProvider&gt
       
         &lt;Canvas&gt
           &lt;Scene /&gt
         &lt;/Canvas&gt
    </code></pre>
    <br />

    <h1>Help wanted!</h1>
    <p>
        There are many more nodes to add for animation and other property changes. Feel free to contribute by opening an issue or pull request in the <a href="https://github.com/ThrelteFlow/threlte-flow">threlte-flow</a> repository.
    </p>
    <br />

  </section>