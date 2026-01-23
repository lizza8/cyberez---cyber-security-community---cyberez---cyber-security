import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const SimpleThreatNetwork = ({ corruption = 0 }) => {
  const groupRef = useRef();
  const waveRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008;
      
      if (corruption > 50) {
        groupRef.current.position.x = (Math.random() - 0.5) * 0.15;
        groupRef.current.position.y = (Math.random() - 0.5) * 0.15;
      }
    }

    if (waveRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
      waveRef.current.scale.set(scale, scale, scale);
    }
  });

  const intensity = corruption / 100;

  return (
    <group ref={groupRef}>
      {/* Corrupted Core */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={`rgb(${Math.floor(255 * intensity)}, ${Math.floor(255 * (1 - intensity))}, 255)`}
          emissive={`rgb(${Math.floor(255 * intensity)}, 0, 0)`}
          emissiveIntensity={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Threat Wave */}
      <mesh ref={waveRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#ff0000"
          emissive="#ff0000"
          emissiveIntensity={0.5}
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </group>
  );
};
