'use client';
import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styles from './style.module.scss';

export function Object3D() {
    return (
      <div className={styles.main}>
        <div className={styles.cube}>
            <Canvas>
                <ambientLight intensity={2}/>
                <directionalLight position={[2, 1, 1]}/>
                <Cube/>
            </Canvas>
        </div>
      </div>
    )
}

function Cube({progress}) {

  const mesh = useRef(null);

  useFrame((state, delta) => {
      mesh.current.rotation.x += delta * 0.35
      mesh.current.rotation.y += delta * 0.35
      mesh.current.rotation.z += delta * 0.35
    })

  const texture_1 = useLoader(TextureLoader, "/images/gradient.jpg")
  return (
    <mesh ref={mesh}>
          <boxGeometry args={[2.5, 2.5, 2.5]}/>
          <meshStandardMaterial map={texture_1} attach="material-0"/>
          <meshStandardMaterial map={texture_1} attach="material-1"/>
          <meshStandardMaterial map={texture_1} attach="material-2"/>
          <meshStandardMaterial map={texture_1} attach="material-3"/>
          <meshStandardMaterial map={texture_1} attach="material-4"/>
          <meshStandardMaterial map={texture_1} attach="material-5"/>
      </mesh>
  )
}

export default Object3D;