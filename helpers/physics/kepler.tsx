import { Vector2 } from "three";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const UnixTimeZeroInMJD = 40587; // UNIX time zero as Modified Julian Date
const J2KInMJD = 51544.5; // Modified Julian Date of January 1, 2000
const DayInMillis = 86400000; // miliseconds per day

export function solveKepler(M: number, e: number) {
  let result = 0
  let lastResult, delta
  const tolerance = 0.00000001
  do {
    lastResult = result
    result = M + e * Math.sin(result)
    delta = result - lastResult
  } while (Math.abs(delta) > tolerance)
  return result
}

export function calculateTrueAnomaly(E: number, e: number) {
  return (
    2 *
    Math.atan2(
      Math.sqrt(1 + e) * Math.sin(E / 2),
      Math.sqrt(1 - e) * Math.cos(E / 2)
    )
  )
}

export function plotPoint(meanAnomaly: any, eccentricity: number, semiMajorAxis: number, runKepler: any) {
    const eccentricityAnomaly = (runKepler && orbitPlot.points == 1) ? solveKepler(eccentricity, meanAnomaly) : meanAnomaly;
    const localPoint = new Vector2( semiMajorAxis * (Math.cos(eccentricityAnomaly) - eccentricity), semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity) * Math.sin(eccentricityAnomaly));
    return localPoint;
}

export function calculatePosition(a: number, trueAnomaly: number) {
  const x = a * Math.cos(trueAnomaly)
  const y = a * Math.sin(trueAnomaly)
  return { x, y } // Ensure this returns an object with 'x' and 'y' properties
}

// Mars' orbital parameters
const marsOrbit = {
  semiMajorAxis: 1.524, // AU (astronomical units)
  eccentricity: 0.0934, // Mars eccentricity
  orbitalPeriod: 687 // Mars orbital period in Earth days
}

// Saturn's orbital parameters
const saturnOrbit = {
  semiMajorAxis: 9.58, // AU (astronomical units)
  eccentricity: 0.0565, // Saturn eccentricity
  orbitalPeriod: 10746.25 // Saturn orbital period in Earth days
}

// Calculate Mars' position
export function getMarsPosition(time: number) {
  const meanMotion = (2 * Math.PI) / marsOrbit.orbitalPeriod
  const M = meanMotion * time
  const E = solveKepler(M, marsOrbit.eccentricity)
  const trueAnomaly = calculateTrueAnomaly(E, marsOrbit.eccentricity)
  return calculatePosition(marsOrbit.semiMajorAxis, trueAnomaly)
}

// Calculate Saturn's position
export function getSaturnPosition(time: number) {
  const meanMotion = (2 * Math.PI) / saturnOrbit.orbitalPeriod
  const M = meanMotion * time
  const E = solveKepler(M, saturnOrbit.eccentricity)
  const trueAnomaly = calculateTrueAnomaly(E, saturnOrbit.eccentricity)
  return calculatePosition(saturnOrbit.semiMajorAxis, trueAnomaly)
}
