"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function JerseyModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  // Stylised jersey shape built from primitives since we don't have a GLB file.
  // Replace with useGLTF("/jersey.glb") once you upload a 3D model.
  return (
    <group ref={meshRef as any}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 1.8, 0.18]} />
        <meshStandardMaterial color="#5B4A7A" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Left sleeve */}
      <mesh position={[-0.95, 0.55, 0]} rotation={[0, 0, -0.4]}>
        <boxGeometry args={[0.6, 0.38, 0.16]} />
        <meshStandardMaterial color="#5B4A7A" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Right sleeve */}
      <mesh position={[0.95, 0.55, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.6, 0.38, 0.16]} />
        <meshStandardMaterial color="#5B4A7A" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Collar */}
      <mesh position={[0, 0.92, 0]}>
        <cylinderGeometry args={[0.25, 0.28, 0.15, 32, 1, true]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.8} side={THREE.DoubleSide} />
      </mesh>
      {/* Pink calligraphy stripe (represents Arabic text) */}
      <mesh position={[0, 0.05, 0.1]}>
        <boxGeometry args={[1.0, 0.28, 0.01]} />
        <meshStandardMaterial color="#FF2D9B" roughness={0.4} emissive="#FF2D9B" emissiveIntensity={0.3} />
      </mesh>
      {/* Left pink sleeve accent */}
      <mesh position={[-1.18, 0.55, 0]} rotation={[0, 0, -0.4]}>
        <boxGeometry args={[0.06, 0.38, 0.18]} />
        <meshStandardMaterial color="#FF2D9B" roughness={0.4} emissive="#FF2D9B" emissiveIntensity={0.2} />
      </mesh>
      {/* Right pink sleeve accent */}
      <mesh position={[1.18, 0.55, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.06, 0.38, 0.18]} />
        <meshStandardMaterial color="#FF2D9B" roughness={0.4} emissive="#FF2D9B" emissiveIntensity={0.2} />
      </mesh>
      {/* Bottom pink hem accents */}
      <mesh position={[-0.55, -0.9, 0.02]}>
        <boxGeometry args={[0.08, 0.18, 0.01]} />
        <meshStandardMaterial color="#FF2D9B" emissive="#FF2D9B" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.55, -0.9, 0.02]}>
        <boxGeometry args={[0.08, 0.18, 0.01]} />
        <meshStandardMaterial color="#FF2D9B" emissive="#FF2D9B" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-2 border-[#FF2D9B] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function JerseyViewer() {
  return (
    <div className="w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-[#111]">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 3.8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 4, 3]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-2, -1, -2]} intensity={0.4} color="#7B5EA7" />
          <pointLight position={[0, 0, 2]} intensity={0.6} color="#FF2D9B" />
          <Environment preset="studio" />
          <JerseyModel />
          <ContactShadows
            position={[0, -1.1, 0]}
            opacity={0.4}
            scale={4}
            blur={2}
            far={2}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.6}
            autoRotate={false}
          />
        </Canvas>
      </Suspense>
      <p className="text-center text-[#555] text-xs py-2">Drag to rotate</p>
    </div>
  );
}
