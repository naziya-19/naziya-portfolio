'use client';
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styles from './style.module.scss';
import { OrbitControls} from '@react-three/drei';
import { useMotionValue, useSpring } from 'framer-motion';
import { Html } from '@react-three/drei';

import { motion } from 'framer-motion-3d'


export const Screen3D = () => {
  // var canvas = document.getElementsByTagName('canvas')[0];
  // canvas.width  = 1868;
  // canvas.height = 1100;

  // const CubeScalingFactor = window.innerWidth / 1300; // 
  
  return (
    <div className={styles.main}>
    <div className={styles.cube}>
    {/* width="1250" height="800"  style="display: block; width: 1000px; height: 1000px;" */}
        <Canvas width={1868} height={1100}>
        <OrbitControls enableZoom={false} enablePan={false} 
        position={[0, 0, 10]}
        maxPolarAngle={Math.PI / 3}  
        minPolarAngle={Math.PI / 2.4} 
        maxAzimuthAngle={Math.PI/4.6} 
        minAzimuthAngle={Math.PI/4.8} 
        />

  
        <ambientLight intensity={1.2}/>
        <directionalLight position={[2, 1, 1]}/>
          <Cube />    
        </Canvas>
    </div>
  </div>
  )
  }

  function Cube({progress}) {

  const mesh = useRef(null);

  const position = [-1, 1, 0];

  

  // Dynamic size based on window dimensions
  // const width = window.innerWidth * 0.002; 
  // const height = width/2; // Adjust the multiplier as needed
  // // Set width to be twice the height
  // const depth = height;

  const texture_1 = useLoader(TextureLoader, "../../../images/gradient.jpg")
  const texture_2 = useLoader(TextureLoader, "../../../images/blog.png")

  return (

    <mesh ref={mesh} position={position} >
        <boxGeometry args={[4,2,2]}/>
        <meshStandardMaterial map={texture_1} attach="material-0"/>
        {/* <meshStandardMaterial map={texture_1} attach="material-1"/> */}
        <meshStandardMaterial map={texture_1} attach="material-2"/>
        {/* <meshStandardMaterial map={texture_1} attach="material-3"/> */}
        <meshStandardMaterial map={texture_2} attach="material-4"/>
        {/* <meshStandardMaterial map={texture_1} attach="material-5"/> */}
        <Html position={[-0.5, 0.5 , 0.9]} scale={[0, 0, 1]}>
          <a href="https://medium.com/@naziyamahimkar13" target="_blank" rel="noopener noreferrer" className="text-center text-wrap text-2xl" style={{color: 'white', textDecoration: 'none', padding: '2.5rem', borderRadius: '5px', display: 'inline-block' 
    }}>.</a>
        </Html>
    </mesh>
  )
}

export default Screen3D;
