"use client"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; 
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const OrreryScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Controls for orbiting
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Light source (Sun emits light)
    const sunLight = new THREE.PointLight(0xffffff, 700, 100);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // Helper function to load textures
    const textureLoader = new THREE.TextureLoader();

    // Helper function to create planets
    const createPlanet = (size: number, texturePath: string, positionX: number, emissiveColor?: number) => {
      const materialConfig: THREE.MeshStandardMaterialParameters = {
        map: textureLoader.load(texturePath),
      };

      // Add emissive property if specified
      if (emissiveColor) {
        materialConfig.emissive = new THREE.Color(emissiveColor);
        materialConfig.emissiveIntensity = 1;
      }

      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshStandardMaterial(materialConfig);
      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = positionX;
      return planet;
    };

    // Sun with emissive material
    const sun = createPlanet(2, '/sun.jpg', 0, 0xffff00); // Emissive yellow
    scene.add(sun);

    // Add glowing atmosphere for Sun
    const createGlow = (size: number, color: string) => {
      const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vertexNormal;
          void main() {
            vertexNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vertexNormal;
          void main() {
            float intensity = pow(0.6 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            gl_FragColor = vec4(${color}, 1.0) * intensity;
          }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
      });
      return new THREE.Mesh(new THREE.SphereGeometry(size, 32, 32), atmosphereMaterial);
    };

    // Glow effect for the sun
    scene.add(createGlow(3, '1.0, 0.8, 0.0')); // Sun (yellowish)

    // Planets
    const mercury = createPlanet(0.2, '/planets/mercury.jpg', 4);
    const venus = createPlanet(0.5, '/planets/venus.jpg', 6);
    const earth = createPlanet(0.5, '/planets/earth.jpg', 8);
    const mars = createPlanet(0.3, '/planets/mars.jpg', 10);
    const jupiter = createPlanet(1.1, '/planets/jupiter.jpg', 14);
    const saturn = createPlanet(0.9, '/planets/saturn.jpg', 18);
    const uranus = createPlanet(0.7, '/planets/uranus.jpg', 22);
    const neptune = createPlanet(0.6, '/planets/neptune.jpg', 26);

    scene.add(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);

    // Glow effect for all planets
    scene.add(createGlow(0.3, '0.8, 0.8, 1.0')); // Mercury (bluish)
    scene.add(createGlow(0.7, '0.9, 0.7, 0.2')); // Venus
    scene.add(createGlow(0.7, '0.3, 0.6, 1.0')); // Earth
    scene.add(createGlow(0.5, '0.8, 0.2, 0.2')); // Mars
    scene.add(createGlow(1.2, '1.0, 0.8, 0.6')); // Jupiter
    scene.add(createGlow(1.0, '1.0, 0.8, 0.4')); // Saturn
    scene.add(createGlow(0.8, '0.4, 0.6, 1.0')); // Uranus
    scene.add(createGlow(0.7, '0.2, 0.6, 1.0')); // Neptune

    // Saturn's ring
    const ringGeometry = new THREE.RingGeometry(1.5, 2.5, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      map: textureLoader.load('/planets/saturn_ring.png'),
      side: THREE.DoubleSide,
      transparent: true,
    });
    const saturnRing = new THREE.Mesh(ringGeometry, ringMaterial);
    saturnRing.rotation.x = Math.PI / 2;
    saturn.add(saturnRing);

    // Orbit control variables
    let mercuryOrbit = 0, venusOrbit = 0, earthOrbit = 0, marsOrbit = 0;
    let jupiterOrbit = 0, saturnOrbit = 0, uranusOrbit = 0, neptuneOrbit = 0;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sun
      sun.rotation.y += 0.005;

      // Rotate and orbit each planet (simple circular motion around the sun)
      mercuryOrbit += 0.04;
      mercury.position.x = 4 * Math.cos(mercuryOrbit);
      mercury.position.z = 4 * Math.sin(mercuryOrbit);

      venusOrbit += 0.02;
      venus.position.x = 6 * Math.cos(venusOrbit);
      venus.position.z = 6 * Math.sin(venusOrbit);

      earthOrbit += 0.015;
      earth.position.x = 8 * Math.cos(earthOrbit);
      earth.position.z = 8 * Math.sin(earthOrbit);

      marsOrbit += 0.01;
      mars.position.x = 10 * Math.cos(marsOrbit);
      mars.position.z = 10 * Math.sin(marsOrbit);

      jupiterOrbit += 0.008;
      jupiter.position.x = 14 * Math.cos(jupiterOrbit);
      jupiter.position.z = 14 * Math.sin(jupiterOrbit);

      saturnOrbit += 0.006;
      saturn.position.x = 18 * Math.cos(saturnOrbit);
      saturn.position.z = 18 * Math.sin(saturnOrbit);

      uranusOrbit += 0.004;
      uranus.position.x = 22 * Math.cos(uranusOrbit);
      uranus.position.z = 22 * Math.sin(uranusOrbit);

      neptuneOrbit += 0.003;
      neptune.position.x = 26 * Math.cos(neptuneOrbit);
      neptune.position.z = 26 * Math.sin(neptuneOrbit);

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default OrreryScene;
