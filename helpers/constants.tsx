import * as threeJS from 'three';
// import { LineBasicMaterial } from 'three'

// // Math constants
export const toRadians = Math.PI/180; 
// export const toDegrees = 180/Math.PI;
// export const fps = 60; // max FPS

// // Time constants
// export const daysPerCentury = 36525.6363;

// export const rates = [ -1/20/fps, -1/100/fps, -100/daysPerCentury/fps, -20/daysPerCentury/fps, -1/daysPerCentury/fps, -1/24/daysPerCentury/fps, -1/86400/daysPerCentury/fps, 0, 1/86400/daysPerCentury/fps, 1/24/daysPerCentury/fps, 1/daysPerCentury/fps, 20/daysPerCentury/fps, 100/daysPerCentury/fps, 1/100/fps, 1/20/fps]; // centuries per frame
// // export const times = { ephTime: MJDToEphTime(unixToMJD(Date.now())), speed: 8, lastSpeed: 8, rate: rates[8], pauseRate: 7, avgFPS: 0, parsedDate: 0 };


// export const initialPoint: number = 0.01;
export const initialFieldOfView: number = 60;
export const initMinDistance = 1;
export const initMaxDistance = 100;
export const celestialXAxis = new threeJS.Vector3(1, 0, 0);
export const celestialZAxis = new threeJS.Vector3(0, -1, 0);
export const eclInclination = 23.43928 * toRadians + Math.PI; // inclination of the ecliptic relative to the celestial sphere

// export const pointCount = 180;
// export const orbitPlot = { points: pointCount };


// // orbit path materials
// export let pathMaterials = [
//   new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.5 }),
//   new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.35 }),
//   new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.3 }),
//   new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.25 }),
//   new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.2 })
// ];
// export function setPathMaterials(n: number) { [
//   { opacity: n },
//   { opacity: 0.7 * n },
//   { opacity: 0.6 * n },
//   { opacity: 0.5 * n },
//   { opacity: 0.4 * n },
// ]
// }