import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export const NeuralNetworkThreat = ({ corruption }) => {
  const groupRef = useRef();
  const threatWaveRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      
      if (corruption > 50) {
        groupRef.current.position.x = (Math.random() - 0.5) * 0.1;
        groupRef.current.position.y = (Math.random() - 0.5) * 0.1;
      } else {
        groupRef.current.position.x = 0;
        groupRef.current.position.y = 0;
      }
    }

    if (threatWaveRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
      threatWaveRef.current.scale.set(scale, scale, scale);
      if (threatWaveRef.current.material) {
        threatWaveRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      }
    }
  });

  const corruptionColor = useMemo(() => {
    const t = corruption / 100;
    const r = Math.floor(255 * t);
    const g = Math.floor(255 * (1 - t));
    const b = 255;
    return `rgb(${r}, ${g}, ${b})`;
  }, [corruption]);

  return (
    <group ref={groupRef}>
      {/* Corrupted Core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={corruptionColor}
          emissive={corruptionColor}
          emissiveIntensity={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Threat Wave */}
      <mesh ref={threatWaveRef}>
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

      {/* Corrupted Particles */}
      <ThreatParticles count={300} corruption={corruption} />
    </group>
  );
};

const ThreatParticles = ({ count, corruption }) => {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color={corruption > 50 ? '#ff0000' : '#ff6600'} 
        transparent 
        opacity={0.8} 
      />
    </points>
  );
};
