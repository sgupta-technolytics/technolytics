"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function EnergyParticles() {
  const particlesRef = useRef();
  const particleCount = 140;

  useEffect(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 3.6 + Math.random() * 1.6;
      const a1 = Math.random() * Math.PI * 2;
      const a2 = Math.random() * Math.PI;

      positions[i * 3] = r * Math.sin(a2) * Math.cos(a1);
      positions[i * 3 + 1] = r * Math.sin(a2) * Math.sin(a1);
      positions[i * 3 + 2] = r * Math.cos(a2);
    }

    particlesRef.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  useFrame(({ clock }) => {
    particlesRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial size={0.075} opacity={0.9} transparent color="#00eaff" />
    </points>
  );
}

function BlueCubeModel() {
  const groupRef = useRef();
  const { mouse } = useThree();
  const [isMobile, setIsMobile] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleTilt = (e) => {
      setTilt({
        x: (e.gamma || 0) / 30,
        y: (e.beta || 0) / 30,
      });
    };
    window.addEventListener("deviceorientation", handleTilt);
    return () => window.removeEventListener("deviceorientation", handleTilt);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.3;
    groupRef.current.rotation.y = t * 0.5;

    const movX = isMobile ? tilt.y : mouse.y;
    const movY = isMobile ? tilt.x : mouse.x;

    groupRef.current.rotation.x += movX * 0.25;
    groupRef.current.rotation.y += movY * 0.25;
  });

  return (
    <group ref={groupRef}>
      {[...Array(30)].map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[6 - i * 0.1, 6 - i * 0.1, 6 - i * 0.1]} />
          <meshBasicMaterial
            wireframe
            opacity={0.05 + i * 0.02}
            transparent
            color="#00d5ff"
          />
        </mesh>
      ))}

      <mesh>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshStandardMaterial
          emissive="#00eaff"
          emissiveIntensity={100}
          metalness={1}
          roughness={0.1}
          transparent
        />
      </mesh>

      <EnergyParticles />
    </group>
  );
}

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 bg-gradient-to-br from-[#050A15] via-[#020A16] to-[#000308] overflow-hidden">

      <div className="flex-1 z-10 max-w-xl mt-24 md:mt-0 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_0_25px_rgba(0,150,255,0.4)]">
          Intelligence. <br className="hidden md:block" />
          Transformed.
        </h1>
        <p className="mt-6 text-blue-200 opacity-90 text-lg md:text-xl">
          AI • Machine Learning • Data Analytics — powering intelligent automation
          and future-ready businesses.
        </p>
        <button className="mt-10 px-9 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,200,255,0.7)]">
          Explore Solutions →
        </button>
      </div>

      {/* Cube */}
      <div className="flex-1 flex justify-center items-center relative w-full h-[380px] md:h-full mt-10 md:mt-0">

        {/* Glow */}
        <div className="absolute w-[520px] h-[520px] md:w-[900px] md:h-[900px]
        bg-[radial-gradient(circle_at_center,_rgba(0,150,255,0.35)_0%,_rgba(0,70,160,0.3)_50%,_transparent_90%)]
        blur-[140px] md:blur-[220px] opacity-90 rounded-full"></div>

        <div className="relative w-[290px] h-[290px] md:w-[520px] md:h-[520px]">
          <Canvas camera={{ position: [7, 7, 10], fov: 70 }}>
            <ambientLight intensity={1.6} />
            <pointLight position={[6, 6, 6]} intensity={80} color="#00eaff" />
            <BlueCubeModel />
          </Canvas>
        </div>
      </div>

    </section>
  );
}
