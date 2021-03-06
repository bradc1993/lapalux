import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
// import { Loader } from "@react-three/drei"
import {
  EffectComposer,
  DotScreen,
  ChromaticAberration,
} from "@react-three/postprocessing"
import { isMobile } from "react-device-detect"
// import { BlendFunction } from "postprocessing"
// import { Html } from "@react-three/drei"

// const CameraControls = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree()

//   const controls = useRef()
//   useEffect(() => console.log(controls.current), [])
//   useFrame(() => controls.current.update())
//   return <OrbitControls ref={controls} args={[camera, domElement]} />
// }

const Scene = ({ children }) => {
  return (
    <div className="canvas-wrapper">
      <Canvas
        // colorManagement={true}
        orthographic={true}
        // camera={{ position: [0, 0, 1], far: 1, near: 0.1 }}
        gl={{ alpha: false }}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <EffectComposer>
          {/* <SSAO /> */}
          {/* <ToneMapping middleGrey={3} /> */}
          {/* <Scanline /> */}
          {/* <Glitch active /> */}
          {/* <Noise /> */}
          {/* <Pixelation /> */}
          {/* <ChromaticAberration /> */}
          {/* <Bloom /> */}
          <DotScreen scale={isMobile ? 1.5 : 1.0} />
          {/* <Grid /> */}
          {/* <ChromaticAberration /> */}
          {/* <Noise /> */}
          {/* <Bloom /> */}
          {/* <Scanline /> */}
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default Scene
