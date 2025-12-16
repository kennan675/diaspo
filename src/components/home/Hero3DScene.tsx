import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const GlobePoints = (props: any) => {
    const ref = useRef<THREE.Points>(null!);

    // Generate points on a sphere
    const [positions, userColors] = useMemo(() => {
        const count = 3000; // Number of points
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();
        const radius = 1.5;

        for (let i = 0; i < count; i++) {
            // Spherical coordinates
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Color gradient based on interaction or just cool blue/teal
            if (Math.random() > 0.5) {
                color.set("#007FFF"); // Blue
            } else {
                color.set("#283692"); // Dark Blue
            }

            // Add some white highlights
            if (Math.random() > 0.9) {
                color.set("#ffffff");
            }

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return [positions, colors];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta / 15; // Slow rotation
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) / 10;
        }
    });

    return (
        <group {...props} rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={userColors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const ConnectionLines = () => {
    // Conceptual visualization of connections (simplified arcs)
    const curveRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        if (curveRef.current) {
            curveRef.current.rotation.y -= delta / 10;
        }
    })

    const arcs = useMemo(() => {
        const lines = [];
        const count = 8;
        const radius = 1.5;

        for (let i = 0; i < count; i++) {
            // Random start and end points on sphere surface
            const phi1 = Math.random() * Math.PI;
            const theta1 = Math.random() * 2 * Math.PI;
            const start = new THREE.Vector3().setFromSphericalCoords(radius, phi1, theta1);

            const phi2 = Math.random() * Math.PI;
            const theta2 = Math.random() * 2 * Math.PI;
            const end = new THREE.Vector3().setFromSphericalCoords(radius, phi2, theta2);

            // Create curve
            const curve = new THREE.QuadraticBezierCurve3(
                start,
                new THREE.Vector3(0, 0, 0).add(start).add(end).multiplyScalar(0.5).setLength(radius * 1.5), // Control point creates arc
                end
            );

            const points = curve.getPoints(50);
            lines.push(points);
        }
        return lines;
    }, []);

    return (
        <group ref={curveRef}>
            {arcs.map((points, i) => (
                <line key={i}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={points.length}
                            array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial color={new THREE.Color("#4a5bdc")} transparent opacity={0.4} blending={THREE.AdditiveBlending} />
                </line>
            ))}
        </group>
    )
}

const Hero3DScene = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-60">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <fog attach="fog" args={['#061534', 5, 15]} />
                <ambientLight intensity={0.5} />

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <GlobePoints />
                    <ConnectionLines />
                </Float>
            </Canvas>
        </div>
    );
};

export default Hero3DScene;
