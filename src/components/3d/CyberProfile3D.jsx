import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export const CyberProfile3D = ({ userData }) => {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  const strengthLevel = useMemo(() => {
    return Math.max(0, 100 - userData.riskScore) / 100;
  }, [userData.riskScore]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ring1Ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ring2Ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ring3Ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  const color = useMemo(() => {
    const r = Math.floor(255 * (1 - strengthLevel));
    const g = Math.floor(255 * strengthLevel);
    return `rgb(${r}, ${g}, 0)`;
  }, [strengthLevel]);

  return (
    <group ref={groupRef}>
      {/* Central Profile Sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Skill Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Data Points */}
      <DataPoints count={50} color={color} />
    </group>
  );
};

const DataPoints = ({ count, color }) => {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

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
      <pointsMaterial size={0.05} color={color} transparent opacity={0.8} />
    </points>
  );
};
