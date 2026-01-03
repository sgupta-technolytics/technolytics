"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";

/* ===========================
   PARTICLE FACE FORMATION
=========================== */
function FaceFormation() {
  const pointsRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "/face.png");
  const [phase, setPhase] = useState(0); // 0 = chart → 1 = face

  useEffect(() => {
    setTimeout(() => setPhase(1), 2500);
  }, []);

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
          // Spawn from chart-like positions
          pos.push(
            (Math.random() - 0.5) * 40,
            Math.random() * 25 - 12,
            (Math.random() - 0.5) * 30
          );

          // Face target
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
      pos[i] += (targets[i] - pos[i]) * (phase ? 0.01 : 0.002);
      pos[i + 1] += (targets[i + 1] - pos[i + 1]) * (phase ? 0.01 : 0.002);
      pos[i + 2] += (targets[i + 2] - pos[i + 2]) * 0.01;

      pos[i] += Math.sin(t * 0.6 + i) * 0.003;
    }

    pointsRef.current.rotation.y = Math.sin(t * 0.15) * 0.2;
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
  return (
    <section className="relative w-full min-h-screen bg-black px-6 md:px-24 py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,160,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,120,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:90px_90px] opacity-10" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT — PARTICLES */}
        <div className="w-full md:w-[60%] h-[520px]">
          <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>
            <ambientLight intensity={2} />
            <FaceFormation />
          </Canvas>
        </div>

        {/* RIGHT — TEXT */}
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
            Billions of signals converge, adapt, and assemble — forming intelligent
            systems inspired by human cognition and powered by advanced AI.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "Neural Forecasting",
              "Adaptive Intelligence",
              "Autonomous Decisioning",
              "Human-Centered AI",
            ].map((item, i) => (
              <div
                key={i}
                className="relative pl-6 text-white tracking-wide border-l border-cyan-400/40"
              >
                <span className="absolute left-[-4px] top-2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_12px_#00eaff]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
