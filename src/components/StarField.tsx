
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Stars() {
  const mesh = useRef<THREE.Points>(null);
  
  // Reduced number of stars from 2000 to 800 for better readability
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    const colors = new Float32Array(800 * 3);
    
    for (let i = 0; i < 800; i++) {
      // Spread stars across a larger area
      positions[i * 3] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 150;
      
      // More varied colors
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.3 + 0.5, 0.8, Math.random() * 0.5 + 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={800}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={800}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.8} 
        vertexColors 
        transparent 
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

const StarFieldCanvas = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarFieldCanvas;
