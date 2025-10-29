import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";

const HeartbeatSphere = ({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.5}>
      <Sphere ref={meshRef} position={position} scale={scale} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
};

const CarePulse = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.15, 16, 100]} />
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.15}
          speed={2}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
};

const SoftCloud = ({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) => {
  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.8}>
      <group position={position} scale={scale}>
        <Sphere position={[0, 0, 0]} args={[1, 32, 32]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.15}
            roughness={1}
            metalness={0}
          />
        </Sphere>
        <Sphere position={[0.7, 0.2, 0]} args={[0.7, 32, 32]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.12}
            roughness={1}
            metalness={0}
          />
        </Sphere>
        <Sphere position={[-0.6, 0.15, 0]} args={[0.6, 32, 32]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.12}
            roughness={1}
            metalness={0}
          />
        </Sphere>
      </group>
    </Float>
  );
};

const HealthParticles = () => {
  const count = 150;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 25;
    positions[i + 1] = (Math.random() - 0.5) * 25;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#0ea5e9"
        sizeAttenuation
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
      >
        {/* Soft, professional lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#0ea5e9" />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#0ea5e9" />
        <pointLight position={[5, 5, 0]} intensity={0.2} color="#3b82f6" />

        {/* Heartbeat/pulse spheres - representing care and vitality */}
        <HeartbeatSphere position={[-4, 2, -2]} scale={1.4} color="#0ea5e9" />
        <HeartbeatSphere position={[4, -1.5, -3]} scale={1.1} color="#ffffff" />
        <HeartbeatSphere position={[0, 3, 1]} scale={0.9} color="#3b82f6" />
        <HeartbeatSphere position={[-2, -2, 0]} scale={1.2} color="#1e40af" />
        
        {/* White and light blue accents */}
        <HeartbeatSphere position={[3, 2, -1]} scale={0.8} color="#ffffff" />
        <HeartbeatSphere position={[-3, -1, 2]} scale={0.7} color="#60a5fa" />

        {/* Pulse rings - representing healthcare monitoring */}
        <CarePulse position={[2, 1, -2]} scale={0.8} />
        <CarePulse position={[-2, 0, 1]} scale={1} />
        <CarePulse position={[0, -2, -1]} scale={0.6} />

        {/* Soft clouds - representing safety and comfort */}
        <SoftCloud position={[-5, 3, -5]} scale={2} color="#ffffff" />
        <SoftCloud position={[5, -2, -4]} scale={1.8} color="#bfdbfe" />
        <SoftCloud position={[0, 4, -6]} scale={2.2} color="#0ea5e9" />
        <SoftCloud position={[4, 1, -3]} scale={1.5} color="#dbeafe" />

        {/* Particle system - subtle health vitality */}
        <HealthParticles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>

      {/* Gradient overlays for depth and warmth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/50 pointer-events-none" />
      
      {/* Blue glow - trust and healthcare */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Navy blue glow - professionalism */}
      <div 
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl animate-pulse-glow" 
        style={{ animationDelay: '2s' }} 
      />
      
      {/* White/light blue accent */}
      <div 
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-blue-200/15 rounded-full blur-3xl animate-pulse-glow" 
        style={{ animationDelay: '4s' }} 
      />
    </div>
  );
};
