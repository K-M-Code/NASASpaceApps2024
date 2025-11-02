'use client'
import { useEffect, useRef } from 'react'
import { sceneSetup } from '@/helpers/scene/sceneSetup'
import {
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  Clock,
  Line,
  BufferGeometry,
  LineBasicMaterial,
  Vector3,
  Group,
  TextureLoader
} from 'three'
import { propagate} from '@/helpers/physics/kepler'
import { getPlanets } from '@/helpers/physics/bigbang'

const OrreryScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const { scene, camera, renderer } = sceneSetup(mountRef)

    async function load(){
      const planets = await getPlanets()
    
    const planetGroups: { [key: string]: Group } = {};
    const planetMeshes: { [key: string]: Mesh } = {}
    
    const textureLoader = new TextureLoader()

    const sunGeometry = new SphereGeometry(0.1, 32, 32) // Larger sun
    const sunMaterial = new MeshBasicMaterial({ color: 0xffd700 })
    const sun = new Mesh(sunGeometry, sunMaterial)
    scene.add(sun)
    for (const planet of planets){
      const geometry = new SphereGeometry(planet.GEOMETRY[0], planet.GEOMETRY[1], planet.GEOMETRY[2])

      let texture;
      if(planet.HAS_TEXTURE) {
        texture = textureLoader.load(`resources/${planet.NAME}.jpg`)
      } else {
        texture = textureLoader.load('resources/asteroid.jpg')
      }
      
      
      // If there's a texture, use it in MeshBasicMaterial, otherwise fallback to color
      const material = texture
        ? new MeshBasicMaterial({ map: texture }) // Use texture
        : new MeshBasicMaterial({ color: planet.COLOR })
      
      const mesh = new Mesh(geometry, material)
      
      const planetGroup = new Group()
      planetGroup.add(mesh)

      planetGroups[planet.NAME] = planetGroup;
      planetMeshes[planet.NAME] = mesh;

      if (planet.ORBIT){
        const orbitPoints = new BufferGeometry()
        const orbitMaterial = new LineBasicMaterial({ color: planet.ORBIT.COLOR })
        const pointsArr = []

        for (let i = 0; i <= planet.ORBIT.LINE; i++) {
          const time = (i / planet.ORBIT.LINE) * planet.ORBIT.ORBITAL_PERIOD
          const position = propagate(time, planet.ORBIT.SEMI_MAJOR_AXIS, planet.ORBIT.ECCENTRICITY,planet.ORBIT.ORBITAL_PERIOD,0);
          if (planet.HAS_TEXTURE == true){
            pointsArr.push(new Vector3(position.x, position.y, 0))
          }
          else{
            pointsArr.push(new Vector3(position.x+1, position.y+1.5, -1))
            
          }
        }

        orbitPoints.setFromPoints(pointsArr)
        const orbitLine = new Line(orbitPoints, orbitMaterial)
        planetGroup.add(orbitLine)
      }

      scene.add(planetGroup)
    }

    // Setup camera
    camera.position.set(0, 5, 10)
    camera.lookAt(0, 0, 0)

    // Animate Objects orbits around the Sun
    const clock = new Clock()
    const animate = function () {
      requestAnimationFrame(animate)


      for (const planet of planets){
        if(planet.ORBIT){
          const time = clock.getElapsedTime() * 10 // Speed factor for visible animation
          const planetPosition = propagate(time, planet.ORBIT.SEMI_MAJOR_AXIS, planet.ORBIT.ECCENTRICITY,planet.ORBIT.ORBITAL_PERIOD,0)
          if (planet.HAS_TEXTURE == false){
            planetMeshes[planet.NAME].position.set(planetPosition.x+1, planetPosition.y+1.5, -1)
          }
          else{
            planetMeshes[planet.NAME].position.set(planetPosition.x, planetPosition.y, 0)
          }
          
        }
      }

      // Render scene
      renderer.render(scene, camera)
    }

    animate()

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
}
load()
}, [])

  return <div ref={mountRef} style={{ width: '100svw', height: '100vh' }} />
}

export default OrreryScene
