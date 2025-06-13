import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CapsuleModel = () => {
  const capsuleRef = useRef();
  const rotationSpeed = useRef(0.2);
  const hoverState = useRef(false);

  useFrame(({ clock }) => {
    // Smooth rotation with easing
    if (hoverState.current) {
      rotationSpeed.current = THREE.MathUtils.lerp(rotationSpeed.current, 0.5, 0.05);
    } else {
      rotationSpeed.current = THREE.MathUtils.lerp(rotationSpeed.current, 0.2, 0.05);
    }
    
    capsuleRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed.current;
  });

  return (
    <mesh 
      ref={capsuleRef}
      onPointerOver={() => hoverState.current = true}
      onPointerOut={() => hoverState.current = false}
    >
      <capsuleGeometry args={[1, 1.5, 16, 32]} />
      <meshStandardMaterial 
        color="#2dd4bf" 
        metalness={0.7}
        roughness={0.15}
        emissive="#2dd4bf"
        emissiveIntensity={0.8}
        transparent={true}
        opacity={0.95}
      />
    </mesh>
  );
};

export default CapsuleModel;