
export function kepler(e: number, m: number) { // numerical approximation of Kepler's equation
    let result = 0;
    let lastResult, delta;
    const tolerance = 0.00000001;
    do {
        lastResult = result;
        result = m + e * Math.sin(result);
        delta = result - lastResult;
    }
    while ( Math.abs(delta) > tolerance );
    return result;
}


// Kepler's equation solver (from previous example)
export function solveKepler(M: number, e: number, tolerance = 1e-6) {
    let E = M;
    let delta = 1;
  
    // Newton's method to solve Kepler's equation
    while (Math.abs(delta) > tolerance) {
      delta = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
      E = E - delta;
    }
  
    return E;
  }
  
  export function calculateTrueAnomaly(E: number, e: number) {
    return 2 * Math.atan2(
      Math.sqrt(1 + e) * Math.sin(E / 2),
      Math.sqrt(1 - e) * Math.cos(E / 2)
    );
  }
  
  export function calculatePosition(a: number, trueAnomaly: number) {
    const x = a * Math.cos(trueAnomaly);
    const y = a * Math.sin(trueAnomaly);
    return { x, y };
  }
  
  // Mars' orbital parameters
  const marsOrbit = {
    semiMajorAxis: 1.524, // AU (astronomical units)
    eccentricity: 0.0934, // Mars eccentricity
    orbitalPeriod: 687,   // Mars orbital period in Earth days
  };
  
  export function getMarsPosition(time: number) {
    const meanMotion = (2 * Math.PI) / marsOrbit.orbitalPeriod; // Mean motion
    const M = meanMotion * time; // Mean anomaly based on time
    const E = solveKepler(M, marsOrbit.eccentricity);
    const trueAnomaly = calculateTrueAnomaly(E, marsOrbit.eccentricity);
    return calculatePosition(marsOrbit.semiMajorAxis, trueAnomaly);
  }