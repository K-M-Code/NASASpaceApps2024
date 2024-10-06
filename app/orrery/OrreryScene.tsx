'use client'
import { useEffect, useRef } from 'react'
import { sceneSetup } from '@/helpers/scene/sceneSetup'
import * as THREE from 'three'
import { propagate } from '@/helpers/physics/kepler'

const OrreryScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const planetMeshes = useRef([]) // Local array to store planet meshes
  const timeRef = useRef(0) // Ref to keep track of time

  useEffect(() => {
    const { scene, camera, renderer } = sceneSetup(mountRef)
  
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Orbital parameters
    const a = 1; // semi-major axis
    const e = 0.7; // eccentricity
    const T = 120; // Orbital period in seconds
    const tau = 0; // Time of pericenter passage

    // Orbital path visualization
    const numPoints = 600;
    const orbitCoords = [];
    for (let clock = 0; clock < numPoints; clock++) {
      const point = propagate(clock, e, a, T, tau);
      orbitCoords.push(new THREE.Vector3(point.x, point.y, point.z));
    }

    // Orbit Line
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitCoords);
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
    scene.add(orbitLine);

    // Central body (e.g., a planet or sun)
    const centralBodyGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const centralBodyMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const centralBody = new THREE.Mesh(centralBodyGeometry, centralBodyMaterial);
    scene.add(centralBody);

    // Orbiting body (e.g., a satellite)
    const satelliteGeometry = new THREE.SphereGeometry(0.04, 32, 32);
    const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    scene.add(satellite);

    // Initialize satellite's position at the first point of the orbit
    satellite.position.set(orbitCoords[0].x, orbitCoords[0].y, orbitCoords[0].z);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    let clock = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Update satellite position along the orbit
      const point = orbitCoords[clock % numPoints]; // Ensure it loops
      satellite.position.set(point.x, point.y, point.z);

      // Increment time (with loop)
      clock = (clock + 1) % numPoints;

      renderer.render(scene, camera);
    };

    animate();


    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100svw', height: '100vh' }} />
}

export default OrreryScene
