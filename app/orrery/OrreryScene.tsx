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
  Vector3
} from 'three'
import { getMarsPosition, getSaturnPosition } from '@/helpers/physics/kepler'

const OrreryScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const { scene, camera, renderer, controls } = sceneSetup(mountRef)

    

    // Create Sun
    const sunGeometry = new SphereGeometry(0.5, 32, 32) // Larger sun
    const sunMaterial = new MeshBasicMaterial({ color: 0xffd700 })
    const sun = new Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    // Create Mars
    const marsGeometry = new SphereGeometry(0.1, 32, 32)
    const marsMaterial = new MeshBasicMaterial({ color: 0xffd700 })
    const mars = new Mesh(marsGeometry, marsMaterial)
    scene.add(mars)

    // Create Saturn
    const saturnGeometry = new SphereGeometry(0.2, 32, 32) // Larger Saturn
    const saturnMaterial = new MeshBasicMaterial({ color: 0xffa500 })
    const saturn = new Mesh(saturnGeometry, saturnMaterial)
    scene.add(saturn)

    // Create Mars orbit line
    const marsOrbitPoints = new BufferGeometry()
    const orbitMaterial = new LineBasicMaterial({ color: 0xaaaaaa })
    const marsPoints = []
    const numMarsPoints = 500

    for (let i = 0; i <= numMarsPoints; i++) {
      const time = (i / numMarsPoints) * 687
      const position = getMarsPosition(time)
      marsPoints.push(new Vector3(position.x, position.y, 0))
    }

    marsOrbitPoints.setFromPoints(marsPoints)
    const marsOrbitLine = new Line(marsOrbitPoints, orbitMaterial)
    scene.add(marsOrbitLine)

    // Create Saturn orbit line
    const saturnOrbitPoints = new BufferGeometry()
    const saturnPoints = []
    const numSaturnPoints = 500

    for (let i = 0; i <= numSaturnPoints; i++) {
      const time = (i / numSaturnPoints) * 10746.25
      const position = getSaturnPosition(time)
      saturnPoints.push(new Vector3(position.x, position.y, 0))
    }

    saturnOrbitPoints.setFromPoints(saturnPoints)
    const saturnOrbitLine = new Line(saturnOrbitPoints, orbitMaterial)
    scene.add(saturnOrbitLine)

    // Setup camera
    camera.position.z = 15

    // Animate Mars and Saturn orbits around the Sun
    const clock = new Clock()
    const animate = function () {
      requestAnimationFrame(animate)

      // Mars movement
      const marsTime = clock.getElapsedTime() * 10 // Speed factor for visible animation
      const marsPosition = getMarsPosition(marsTime)
      mars.position.set(marsPosition.x, marsPosition.y, 0)

      // Saturn movement
      const saturnTime = clock.getElapsedTime() * 1 // Slower speed factor for Saturn
      const saturnPosition = getSaturnPosition(saturnTime)
      saturn.position.set(saturnPosition.x, saturnPosition.y, 0)

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
  }, [])

  return <div ref={mountRef} style={{ width: '100svw', height: '100vh' }} />
}

export default OrreryScene
