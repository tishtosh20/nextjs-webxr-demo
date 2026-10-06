"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Desk(props: React.ComponentProps<"group">) {
  const { scene } = useGLTF("/desk.glb");

  return (
    <group {...props}>
      <primitive object={scene.clone()} />
    </group>
  );
}

useGLTF.preload("/desk.glb");
