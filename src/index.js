import { Suspense } from "react"
import ReactDOM from "react-dom"
import { Canvas } from "@react-three/fiber"
import { useGLTF, Stage, OrbitControls, Edges } from "@react-three/drei"
import "./styles.css"

function Model() {
  const { nodes } = useGLTF("/headless.glb")
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube.geometry}>
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
    </group>
  )
}

ReactDOM.render(
  <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 50 }}>
    <Suspense fallback={null}>
      <Stage contactShadow={{ resolution: 1024, scale: 10 }}>
        <Model />
      </Stage>
    </Suspense>
    <OrbitControls makeDefault dampingFactor={0.3} />
  </Canvas>,
  document.getElementById("root")
)
