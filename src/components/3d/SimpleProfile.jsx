import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const SimpleProfile = ({ userData }) => {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  const strengthLevel = Math.max(0, 100 - userData.riskScore) / 100;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ring1Ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ring2Ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ring3Ref.current.rotation.z = state.clock.elapsedTime * 0.25;
    }
  });

  const r = Math.floor(255 * (1 - strengthLevel));
  const g = Math.floor(255 * strengthLevel);
  const color = `rgb(${r}, ${g}, 0)`;

  return (
    <group ref={groupRef}>
      {/* Central Sphere */}
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

      {/* Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.5, 0.03, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[2, 0.03, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.5, 0.03, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};
