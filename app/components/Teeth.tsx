"use client";

import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

export function Teeth(props: React.ComponentProps<"group">) {
  const { scene } = useGLTF("/pile_of_teeth.glb");

  // Make a separate copy of the teeth model
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <group {...props}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/pile_of_teeth.glb");
