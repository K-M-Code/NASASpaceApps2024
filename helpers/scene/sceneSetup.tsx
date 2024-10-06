import {
  AmbientLight,
  EquirectangularReflectionMapping,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  Vector3,
  WebGLRenderer
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  celestialXAxis,
  eclInclination,
  initialFieldOfView,
  initMaxDistance,
  initMinDistance
} from '../constants'

export const sceneSetup = (mountRef: React.RefObject<HTMLDivElement>) => {
  const scene = new Scene()
  const camera = new PerspectiveCamera(
    initialFieldOfView,
    window.innerWidth / window.innerHeight,
    0.00001,
    1000
  )
  camera.position.set(0, 5, 20)

  const renderer = new WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true,
    powerPreference: 'high-performance'
  })

  renderer.setSize(window.innerWidth, window.innerHeight)

  if (mountRef.current) {
    mountRef.current.appendChild(renderer.domElement)
  }

  // Camera movement
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.02
  controls.target = new Vector3()
  controls.screenSpacePanning = false
  controls.minDistance = initMinDistance
  controls.maxDistance = initMaxDistance
  controls.maxPolarAngle = Math.PI

  const camStart = new Vector3(0, -8, 0).applyAxisAngle(
    celestialXAxis,
    eclInclination
  )
  camera.position.y = camStart.y
  camera.position.z = camStart.z
  controls.update()

  // Backdrop and lighting
  const ambient = new AmbientLight(0x303040)
  const sunlight = new PointLight(0xffffff, 100000, 1000, 0.1)
  scene.add(sunlight, ambient)


  // Creates milky way
  const universeTexture = new TextureLoader().load('/resources/milkyway.jpg')
  universeTexture.mapping = EquirectangularReflectionMapping
  universeTexture.colorSpace = SRGBColorSpace
  scene.background = universeTexture
  
  const geometry = new IcosahedronGeometry(1000, 3);
  const sphereMaterial = new MeshBasicMaterial({ envMap: universeTexture });
  const galaxySphereMesh = new Mesh(geometry, sphereMaterial);

  scene.add(galaxySphereMesh);

  return { scene, camera, renderer, controls }
}
