"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Keyboard(props: React.ComponentProps<"group">) {
  const { scene } = useGLTF("/apple_1984_keyboard.glb");

  return (
    <group {...props}>
      <primitive object={scene.clone()} />
    </group>
  );
}

useGLTF.preload("/keyboard.glb");
