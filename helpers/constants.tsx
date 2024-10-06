import * as threeJS from 'three';
import { LineBasicMaterial } from 'three'

// Math constants
export const toRadians = Math.PI/180; 
export const toDegrees = 180/Math.PI;

export const initialPoint: number = 0.01;
export const initialFieldOfView: number = 60;
export const initMinDistance = 1;
export const initMaxDistance = 100;
export const celestialXAxis = new threeJS.Vector3(1, 0, 0);
export const celestialZAxis = new threeJS.Vector3(0, -1, 0);
export const eclInclination = 23.43928 * toRadians + Math.PI; // inclination of the ecliptic relative to the celestial sphere



// Time constants
export const daysPerCentury = 36525.6363;



// orbit path materials
export let pathMaterials = [
  new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.5 }),
  new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.35 }),
  new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.3 }),
  new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.25 }),
  new LineBasicMaterial({ color: 0x0033ff, linewidth: 1, transparent:true, opacity: 0.2 })
];
export function setPathMaterials(n: number) { [
  { opacity: n },
  { opacity: 0.7 * n },
  { opacity: 0.6 * n },
  { opacity: 0.5 * n },
  { opacity: 0.4 * n },
]
}