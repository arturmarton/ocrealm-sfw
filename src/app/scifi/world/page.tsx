"use client";

import React, { useRef, useEffect, useState, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Points, useTexture, Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

interface TerrainData {
    positions: Float32Array;
    colors: Float32Array;
}

interface Building {
    id: number;
    name: string;
    isHub?: boolean;
    x: number;
    z: number;
    heightmapLuminance?: number;
}

interface TerrainMapProps {
    heightmapUrl: string;
    buildings: Building[];
}

interface BuildingMarkerProps {
    building: Building;
    rippleCenterX: number;
    rippleCenterZ: number;
}

const GRID_RES = 128;
const SCALE = 100;
const HEIGHT_MAX = 15;
const COLOR_PRIMARY = '#323232';
const COLOR_SECONDARY = '#ff007f';

function BuildingMarker({ building, rippleCenterX, rippleCenterZ }: BuildingMarkerProps) {
    const [activeLevel, setActiveLevel] = useState(1.0);
    const lastHitTime = useRef<number>(0);

    const realX = building.x * SCALE * 0.5;
    const realZ = building.z * SCALE * 0.5;
    const terrainY = Math.pow(building.heightmapLuminance || 0, 2.2) * HEIGHT_MAX;

    const bHeight = building.isHub ? 8 : 3;
    const bWidth = building.isHub ? 2 : 1.5;
    const pinHeight = building.isHub ? 15 : 10;

    const linePoints = useMemo(() => [
        new THREE.Vector3(realX, terrainY, realZ),
        new THREE.Vector3(realX, terrainY + pinHeight, realZ)
    ], [realX, terrainY, pinHeight, realZ]);

    useFrame((state) => {
        if (building.isHub) return;

        const time = state.clock.elapsedTime
        const cycleTime = time % 5;
        const rippleProgress = cycleTime * 45;
        const distance = Math.sqrt(Math.pow(realX - rippleCenterX, 2) + Math.pow(realZ - rippleCenterZ, 2));

        if (Math.abs(distance - rippleProgress) < 5 && cycleTime < 2.5) {
            setActiveLevel(1.0);
            lastHitTime.current = time;
        } else {
            if (time - lastHitTime.current > 3) {
                setActiveLevel(prev => Math.max(0.9, prev - 0.0005));
            }
        }
    });

    const currentColor = useMemo(() => {
        if (building.isHub) return new THREE.Color('#fff700');
        const baseSecondary = new THREE.Color('#de0471');
        const peakSecondary = new THREE.Color('#ff007f');
        const lerpFactor = (activeLevel - 0.9) / 0.1;
        return baseSecondary.lerp(peakSecondary, lerpFactor);
    }, [activeLevel, building.isHub]);

    return (
        <group>
            <mesh position={[realX, terrainY + bHeight / 2, realZ]}>
                <boxGeometry args={[bWidth, bHeight, bWidth]} />
                <meshStandardMaterial
                    color={currentColor}
                    emissive={currentColor}
                    emissiveIntensity={building.isHub ? 0.8 : (activeLevel - 0.85) * 2}
                    toneMapped={false}
                />
            </mesh>

            {building.isHub && (
                <pointLight position={[realX, terrainY + 5, realZ]} color="#fff700" intensity={5} distance={20} />
            )}

            <line>
                <bufferGeometry attach="geometry" setFromPoints={linePoints} />
                <lineBasicMaterial color={currentColor} transparent opacity={0.3} />
            </line>

            <Html position={[realX, terrainY + pinHeight, realZ]} center={false} distanceFactor={50}>
                <div className="flex flex-col items-start ml-4 border-l border-primary/20 pl-3 whitespace-nowrap pointer-events-none select-none">
                    <div className="text-primary text-[14px] font-bold font-sans uppercase tracking-tight leading-none">
                        {building.isHub && <span className="mr-1 text-[#FFD700]">★</span>}
                        {building.name}
                    </div>
                    <div className="text-primary/40 text-[9px] font-mono mt-1 tracking-widest uppercase">
                        LOC // {building.x.toFixed(2)} : {building.z.toFixed(2)}
                    </div>
                </div>
            </Html>
        </group>
    );
}

function TerrainMap({ heightmapUrl, buildings }: TerrainMapProps) {
    const heightmap = useTexture(heightmapUrl) as THREE.Texture;
    const pointsRef = useRef<THREE.Points>(null);
    const baseHeights = useRef<Float32Array | null>(null);
    const [pointData, setPointData] = useState<TerrainData | null>(null);
    const [finalBuildings, setFinalBuildings] = useState<Building[]>([]);

    const hub = useMemo(() => buildings.find(b => b.isHub) || buildings[0], [buildings]);
    const hubX = hub.x * SCALE * 0.5;
    const hubZ = hub.z * SCALE * 0.5;

    useEffect(() => {
        const img = heightmap.image;
        if (!img || !(img instanceof HTMLImageElement)) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = GRID_RES;
        canvas.height = GRID_RES;

        if (ctx) {
            ctx.drawImage(img, 0, 0, GRID_RES, GRID_RES);
            const data = ctx.getImageData(0, 0, GRID_RES, GRID_RES).data;

            const positions = new Float32Array(GRID_RES * GRID_RES * 3);
            const colors = new Float32Array(GRID_RES * GRID_RES * 3);
            const heights = new Float32Array(GRID_RES * GRID_RES);
            const colorBase = new THREE.Color(COLOR_PRIMARY);
            const colorPeak = new THREE.Color(COLOR_SECONDARY);

            for (let i = 0; i < GRID_RES; i++) {
                for (let j = 0; j < GRID_RES; j++) {
                    const idx = (i * GRID_RES + j);
                    const relHeight = data[idx * 4] / 255;
                    const y = Math.pow(relHeight, 2.2) * HEIGHT_MAX;

                    positions[idx * 3] = (j / GRID_RES - 0.5) * SCALE;
                    positions[idx * 3 + 1] = y;
                    positions[idx * 3 + 2] = (i / GRID_RES - 0.5) * SCALE;
                    heights[idx] = y;

                    const mixedColor = colorBase.clone().lerp(colorPeak, relHeight);
                    colors[idx * 3] = mixedColor.r;
                    colors[idx * 3 + 1] = mixedColor.g;
                    colors[idx * 3 + 2] = mixedColor.b;
                }
            }

            const updated = buildings.map(b => {
                const px = Math.min(GRID_RES - 1, Math.max(0, Math.floor(((b.x + 1) / 2) * GRID_RES)));
                const pz = Math.min(GRID_RES - 1, Math.max(0, Math.floor(((b.z + 1) / 2) * GRID_RES)));
                return { ...b, heightmapLuminance: data[(pz * GRID_RES + px) * 4] / 255 };
            });

            baseHeights.current = heights;
            setPointData({ positions, colors });
            setFinalBuildings(updated);
        }
    }, [heightmap, buildings]);

    useFrame((state) => {
        if (!pointsRef.current || !baseHeights.current) return;

        const cycleTime = state.clock.elapsedTime % 5;
        const rippleProgress = cycleTime * 45;
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < GRID_RES * GRID_RES; i++) {
            const ix = i * 3;
            const x = positions[ix];
            const z = positions[ix + 2];
            const yOriginal = baseHeights.current[i];
            const distance = Math.sqrt(Math.pow(x - hubX, 2) + Math.pow(z - hubZ, 2));

            let rippleY = 0;
            const distFromWave = Math.abs(distance - rippleProgress);

            if (distFromWave < 12 && cycleTime < 2.5) {
                rippleY = Math.sin((distFromWave / 12) * Math.PI) * 0.5;
                rippleY *= (1 - distance / (SCALE * 0.8));
            }

            positions[ix + 1] = yOriginal + rippleY;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    if (!pointData) return null;

    return (
        <group>
            <Points ref={pointsRef} positions={pointData.positions} colors={pointData.colors} stride={3}>
                <pointsMaterial size={0.45} vertexColors transparent opacity={0.8} blending={THREE.AdditiveBlending} />
            </Points>
            {finalBuildings.map(b => (
                <BuildingMarker key={b.id} building={b} rippleCenterX={hubX} rippleCenterZ={hubZ} />
            ))}
        </group>
    );
}

const LightHologramMap = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const BUILDINGS: Building[] = useMemo(() => [
        { id: 1, name: 'Main Hub', isHub: true, x: -0.1, z: 0 },
        { id: 2, name: 'Southwest Extraction Point', x: -0.5, z: -0.3 },
        { id: 3, name: 'Central Relay Station', x: 0.6, z: 0.4 },
        { id: 4, name: 'Peak Observatory', x: -0.2, z: 0.8 },
        { id: 5, name: 'Logistics Node B', x: 0.4, z: -0.6 },
        { id: 6, name: 'Storage Facility', x: -0.7, z: 0.3 },
        { id: 7, name: 'Logistics Node A', x: 0.3, z: 0.7 },
        { id: 8, name: 'Power Plant', x: 0.05, z: -0.5 },
        { id: 9, name: 'Eco Farm', x: 0.2, z: 0 }
    ], []);

    if (!mounted) return <div className="w-full h-[75vh] bg-background" />;

    return (
        <div className="w-full h-[75vh] bg-background relative overflow-hidden">
            <Canvas gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 90, 100]} fov={45} />
                <OrbitControls makeDefault enableDamping dampingFactor={0.05} minDistance={20} maxDistance={200} />
                <ambientLight intensity={1.5} />
                <pointLight position={[100, 100, 100]} intensity={2} />
                <Suspense fallback={null}>
                    <TerrainMap heightmapUrl="/assets/scifi/heightmap.png" buildings={BUILDINGS} />
                </Suspense>
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.05}
                        mipmapBlur
                        intensity={0.1}
                        radius={0.01}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default LightHologramMap;