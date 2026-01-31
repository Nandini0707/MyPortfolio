import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function RotatingStars() {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;
    });
    return (
        <group ref={ref}>
            <Stars radius={100} depth={50} count={7000} factor={6} saturation={0} fade speed={1.5} />
        </group>
    );
}

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-50 bg-[#0f0c29] dark:bg-[#0f0c29] bg-white transition-colors duration-300">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <RotatingStars />
            </Canvas>
        </div>
    );
};

export default Background;
