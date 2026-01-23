import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

const NODE_DATA = [
  { id: 1, type: 'email', label: 'work@company.com', description: 'Primary work email', risk: 'low' },
  { id: 2, type: 'device', label: 'iPhone 14', description: 'Personal device', risk: 'low' },
  { id: 3, type: 'web', label: 'Banking Portal', description: 'Financial access', risk: 'medium' },
  { id: 4, type: 'email', label: 'personal@gmail.com', description: 'Personal email', risk: 'low' },
  { id: 5, type: 'device', label: 'Work Laptop', description: 'Company device', risk: 'medium' },
];

export const NeuralNetwork = ({ onNodeHover }) => {
  const groupRef = useRef();

  const nodes = useMemo(() => {
    return NODE_DATA.map((node, i) => {
      const angle = (i / NODE_DATA.length) * Math.PI * 2;
      const radius = 3;
      return {
        ...node,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 2
        ]
      };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Nodes */}
      {nodes.map((node) => (
        <mesh
          key={node.id}
          position={node.position}
          onPointerEnter={() => onNodeHover && onNodeHover(node)}
          onPointerLeave={() => onNodeHover && onNodeHover(null)}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color={node.risk === 'low' ? '#00ff00' : node.risk === 'medium' ? '#ffff00' : '#ff0000'}
            emissive={node.risk === 'low' ? '#00ff00' : node.risk === 'medium' ? '#ffff00' : '#ff0000'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Particle field */}
      <Particles count={200} />
    </group>
  );
};

const Particles = ({ count }) => {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
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
      <pointsMaterial size={0.02} color="#00ffff" transparent opacity={0.6} />
    </points>
  );
};
