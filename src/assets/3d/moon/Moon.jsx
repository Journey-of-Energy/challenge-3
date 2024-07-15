/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 moon.gltf 
Author: Akshat (https://sketchfab.com/shooter24994)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/moon-4db2273f6dd943b8ad7fa5e3b1b2431a
Title: Moon
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/moon.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.2}
      />
    </group>
  );
}

useGLTF.preload("/moon.gltf");
