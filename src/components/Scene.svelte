<script>
  import { T, useThrelte } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras'
  import { globalScene, objectsGroup } from '../stores/scene-state.js';
  const { scene } = useThrelte();
  $globalScene = scene;
</script>

<T.PerspectiveCamera
  makeDefault
  position={[-10, 10, 10]}
  fov={15}
>
  <OrbitControls
    autoRotate
    enableZoom={false}
    enableDamping
    autoRotateSpeed={0.5}
    target.y={1.5}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={0.8}
  position.x={5}
  position.y={10}
/>
<T.AmbientLight intensity={0.2} />

<Grid
  position.y={-0.001}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={2}
/>

<ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/>

<T.Group bind:ref={$objectsGroup} name="scenePrimitivees">
  <T.Mesh
    position.y={1.2}
    position.z={-0.75}
    name="box"
  >
    <T.BoxGeometry/>
  </T.Mesh>

  <T.Mesh
    position={[1.2, 1.5, 0.75]}
    rotation.x={5}
    rotation.y={71}
    name="torus"
  >
    <T.TorusKnotGeometry args={[0.5, 0.15, 100, 12, 2, 3]} />
    <T.MeshStandardMaterial color="#F85122" />
  </T.Mesh>

  <T.Mesh
    position={[-1.4, 1.5, 0.75]}
    rotation={[-5, 128, 10]}
    name="icosahedron"
  >
    <T.IcosahedronGeometry />
    <T.MeshStandardMaterial color="#F8EBCE" />
  </T.Mesh>
</T.Group>