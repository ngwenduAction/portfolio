"use client";
import { useEffect, useRef } from "react";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import * as THREE from "three";

extend({ ThreeGlobe });

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  globeColor?: string;
  emissive?: string;
  shininess?: number;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      threeGlobe: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { ref?: React.Ref<any>; args?: any[] };
    }
  }
}

function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<any>();
  const { scene } = useThree();

  useEffect(() => {
    if (globeRef.current) {
      // style globe
      const mat = globeRef.current.globeMaterial();
      mat.color = new THREE.Color(globeConfig.globeColor || "#1d072e");
      mat.emissive = new THREE.Color(globeConfig.emissive || "#000000");
      mat.shininess = globeConfig.shininess ?? 0.9;

      // add atmosphere
      globeRef.current
        .showAtmosphere(true)
        .atmosphereColor(globeConfig.atmosphereColor || "#ffffff")
        .atmosphereAltitude(globeConfig.atmosphereAltitude ?? 0.1);

      // assign data
      globeRef.current
        .pointsData(data.map((p) => ({ lat: p.startLat, lng: p.startLng })))
        .arcsData(data);
    }

    // add fog for depth
    scene.fog = new THREE.Fog(0x000000, 400, 2000);
  }, [data, globeConfig, scene]);

  return <threeGlobe ref={globeRef} args={[]} />;
}

export function World(props: WorldProps) {
  const aspect =
    typeof window !== "undefined" ? window.innerWidth / window.innerHeight : 1;

  return (
    <Canvas
      camera={new THREE.PerspectiveCamera(50, aspect, 180, 1800)}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[100, 50, 200]} intensity={1} />

      {/* Globe */}
      <Globe {...props} />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={300}
        maxDistance={300}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}
