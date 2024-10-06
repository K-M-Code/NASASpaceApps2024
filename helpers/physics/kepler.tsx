import * as THREE from 'three'

// KeplerStart3 equivalent in JS
export function KeplerStart3(e, M) {
  const t34 = e * e
  const t35 = e * t34
  const t33 = Math.cos(M)
  return M + (-0.5 * t35 + e + (t34 + 1.5 * t33 * t35) * t33) * Math.sin(M)
}

// KeplerSolve equivalent in JS
export function eps3(e, M, x) {
  const t1 = Math.cos(x)
  const t2 = -1 + e * t1
  const t3 = Math.sin(x)
  const t4 = e * t3
  const t5 = -x + t4 + M
  const t6 = t5 / ((0.5 * t5 * t4) / t2 + t2)
  return t5 / ((0.5 * t3 - (1 / 6) * t1 * t6) * e * t6 + t2)
}

export function KeplerSolve(e, M) {
  const tol = 1.0e-14
  const Mnorm = M % (2 * Math.PI)
  let E0 = KeplerStart3(e, Mnorm)
  let dE = tol + 1
  let count = 0

  while (dE > tol) {
    const E = E0 - eps3(e, Mnorm, E0)
    dE = Math.abs(E - E0)
    E0 = E
    count++
    if (count === 100) {
      console.log('KeplerSolve failed to converge')
      break
    }
  }
  return E0
}

// Function to propagate orbit
export function propagate(clock, e, a, T, tau) {
  const n = (2 * Math.PI) / T // Mean motion
  const M = n * (clock - tau) // Mean anomaly
  const E = KeplerSolve(e, M) // Eccentric anomaly
  const cose = Math.cos(E)

  const r = a * (1 - e * cose)
  const s_x = r * ((cose - e) / (1 - e * cose))
  const s_y = r * ((Math.sqrt(1 - e * e) * Math.sin(E)) / (1 - e * cose))
  const s_z = 0 // Initially no z-component in 2D

  // Apply rotations: Pitch (Y-axis), Yaw (Z-axis), Roll (X-axis)
  const point = new THREE.Vector3(s_x, s_y, s_z)
  const pitchMatrix = new THREE.Matrix4().makeRotationY(Math.PI / 5)
  const yawMatrix = new THREE.Matrix4().makeRotationZ(Math.PI / 4)
  const rollMatrix = new THREE.Matrix4().makeRotationX(Math.PI / 4)

  point.applyMatrix4(pitchMatrix) // Pitch
  point.applyMatrix4(yawMatrix) // Yaw
  point.applyMatrix4(rollMatrix) // Roll

  return point
}
