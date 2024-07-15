import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import GLTFModel from "../assets/3d/Test";
import { Environment, Stars } from "@react-three/drei";

function ThreeComponent(props: any) {
  const ref = useRef();

  const defSpeed = 0.7;
  return (
    <Canvas flat linear className="absolute">
      <Suspense fallback={null}>
        <GLTFModel
          modelPath={`${props.name}.glb`}
          scale={1.2}
          posX={props.moonPos.x}
          posY={props.moonPos.y}
          posZ={props.moonPos.z}
          name={"moon"}
          speed={defSpeed / 29.5}
        />
        <GLTFModel
          modelPath={`${props.name}.glb`}
          scale={2.4}
          posX={props.marsPos.x}
          posY={props.marsPos.y}
          posZ={props.marsPos.z}
          name={"mars"}
          speed={defSpeed}
        />
        <GLTFModel
          modelPath={`${props.name}.glb`}
          scale={1.1}
          posX={props.europaPos.x}
          posY={props.europaPos.y}
          posZ={props.europaPos.z}
          name={"europa"}
          speed={defSpeed / 3.5}
        />
        <GLTFModel
          modelPath={`${props.name}.glb`}
          scale={2.1}
          posX={props.titanPos.x}
          posY={props.titanPos.y}
          posZ={props.titanPos.z}
          name={"titan"}
          speed={defSpeed / 15.9}
        />
      </Suspense>

      {/* <Earth /> */}
      <directionalLight position={[-5, 3, 2]} intensity={3} ref={ref} />
      <Environment preset="night" environmentIntensity={1} />
      <ambientLight intensity={0.2} />

      <Stars saturation={0.2} count={400} depth={50} />
      <Stars saturation={200} count={500} depth={100} speed={2} />
      <Stars saturation={500} count={300} depth={55} speed={1} />
      <Stars saturation={40} count={400} depth={20} speed={0.5} />
      <Stars saturation={0.2} count={400} depth={24} speed={3} />
      <Stars saturation={345} count={500} depth={140} speed={2.3} />
      <Stars saturation={520} count={300} depth={74} speed={1.2} />
      <Stars saturation={430} count={400} depth={330} speed={1.5} />
    </Canvas>
  );
}

export default ThreeComponent;
