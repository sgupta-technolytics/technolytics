"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";

/* ===========================
   PARTICLE FACE
=========================== */
function FaceFormation() {
  const pointsRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "/face.png");

  const { positions, targets } = useMemo(() => {
    const canvas = document.createElement("canvas");
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(texture.image, 0, 0, size, size);
    const img = ctx.getImageData(0, 0, size, size).data;

    const pos = [];
    const tgt = [];

    for (let y = 0; y < size; y += 2) {
      for (let x = 0; x < size; x += 2) {
        const i = (y * size + x) * 4;
        if (img[i] > 220) {
          pos.push(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
          );
          tgt.push(
            (x - size / 2) * 0.06,
            (size / 2 - y) * 0.06,
            0
          );
        }
      }
    }

    return {
      positions: new Float32Array(pos),
      targets: new Float32Array(tgt),
    };
  }, [texture]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < pos.length; i += 3) {
      pos[i] += (targets[i] - pos[i]) * 0.02;
      pos[i + 1] += (targets[i + 1] - pos[i + 1]) * 0.02;
      pos[i + 2] += (targets[i + 2] - pos[i + 2]) * 0.02;

      pos[i] += Math.sin(t * 0.8 + i) * 0.004;
    }

    pointsRef.current.rotation.y = Math.sin(t * 0.25) * 0.25;
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#00eaff"
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ===========================
   MAIN SECTION
=========================== */
export default function HomeStats() {

  /* 🔥 SAME FIX AS HERO */
  useEffect(() => {
    const forceResize = () => {
      window.dispatchEvent(new Event("resize"));
    };
    forceResize();
    setTimeout(forceResize, 200);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black px-6 md:px-24 py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,160,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,120,255,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* CANVAS */}
        <div className="w-full md:w-[60%] h-[520px]">
          <Canvas
            frameloop="always"
            dpr={[1, 2]}
            camera={{ position: [0, 0, 14], fov: 45 }}
          >
            <ambientLight intensity={2} />
            <FaceFormation />
          </Canvas>
        </div>

        {/* TEXT */}
        <div className="w-full md:w-[40%] text-center md:text-left">
          <h3 className="text-cyan-300 uppercase tracking-widest text-sm mb-4">
            Cognitive Systems
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Data Evolves Into
            <br />
            <span className="text-cyan-400">Human Intelligence</span>
          </h2>

          <p className="mt-6 text-lg text-cyan-300 opacity-90 max-w-md">
            Intelligence does not wait for scroll — it forms instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
