// components/ui/IDCard3D.tsx
'use client';

import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CardProps {
  mouseX: number;
  mouseY: number;
  isHovered: boolean;
}

function Card3D({ mouseX, mouseY, isHovered }: CardProps) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (groupRef.current) {
      // Smooth rotation based on mouse position
      targetRotation.current.y = isHovered ? mouseX * 0.5 : 0;
      targetRotation.current.x = isHovered ? -mouseY * 0.3 : 0;

      // Lerp for smooth animation
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.1;
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.1;

      // Gentle floating animation
      groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Card Base */}
      <mesh>
        <boxGeometry args={[2.5, 3.5, 0.1]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Card Front Face */}
      <group position={[0, 0, 0.06]}>
        {/* Header Bar */}
        <mesh position={[0, 1.5, 0]}>
          <planeGeometry args={[2.4, 0.4]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>

        {/* Photo Frame */}
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[1.2, 1.2, 0.02]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>

        {/* Profile Image Placeholder */}
        <mesh position={[0, 0.4, 0.02]}>
          <planeGeometry args={[1.1, 1.1]} />
          <meshBasicMaterial color="#444444" />
        </mesh>

        {/* Name Bar */}
        <mesh position={[0, -0.5, 0]}>
          <planeGeometry args={[2.2, 0.3]} />
          <meshStandardMaterial color="#fbbf24" opacity={0.5} transparent />
        </mesh>

        {/* Title Bar */}
        <mesh position={[0, -0.75, 0]}>
          <planeGeometry args={[2.2, 0.2]} />
          <meshStandardMaterial color="#06b6d4" opacity={0.5} transparent />
        </mesh>

        {/* Barcode */}
        <group position={[0, -1.2, 0]}>
          {Array.from({ length: 20 }).map((_, i) => (
            <mesh key={i} position={[(i - 10) * 0.08, 0, 0]}>
              <planeGeometry args={[0.04, 0.3]} />
              <meshBasicMaterial color={i % 3 === 0 ? "#ffffff" : "#666666"} />
            </mesh>
          ))}
        </group>

        {/* ID Number Bar */}
        <mesh position={[0, -1.5, 0]}>
          <planeGeometry args={[1.5, 0.15]} />
          <meshStandardMaterial color="#888888" opacity={0.5} transparent />
        </mesh>
      </group>

      {/* Card Back Face */}
      <group position={[0, 0, -0.06]} rotation={[0, Math.PI, 0]}>
        {/* Magnetic Strip */}
        <mesh position={[0, 1.3, 0]}>
          <planeGeometry args={[2.4, 0.5]} />
          <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Tech Stack Bars */}
        {[0.6, 0.35, 0.1, -0.15].map((y, i) => (
          <mesh key={i} position={[0, y, 0]}>
            <planeGeometry args={[1.8, 0.2]} />
            <meshStandardMaterial 
              color={i === 0 ? "#fbbf24" : "#06b6d4"} 
              opacity={i === 0 ? 0.6 : 0.4} 
              transparent 
            />
          </mesh>
        ))}

        {/* QR Code Placeholder */}
        <mesh position={[0, -1.2, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.02]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Lanyard Hole */}
      <mesh position={[0, 1.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.03, 16, 32]} />
        <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export const IDCard3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="w-full h-[400px] sm:h-[500px] lg:h-[600px] cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#fbbf24" />
          <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
          <spotLight position={[0, 0, 10]} angle={0.3} penumbra={1} intensity={1} />

          {/* 3D Card */}
          <Card3D 
            mouseX={mousePosition.x} 
            mouseY={mousePosition.y}
            isHovered={isHovered}
          />
        </Suspense>
      </Canvas>

      {/* Instruction Text */}
      <div className="text-center mt-4 text-sm text-gray-400">
        <p className="hidden sm:block">Hover and move your mouse to rotate the card</p>
        <p className="sm:hidden">Tap to interact</p>
      </div>
    </div>
  );
};
