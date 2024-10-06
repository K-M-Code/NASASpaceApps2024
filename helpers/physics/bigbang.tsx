// DEFINE ARRAY OF PLANETS 
import { fetchObjectsData } from "../fetch"

const sunRadius = 696340;

export async function getPlanets(){
    const file = await fetch("/csv/planets_3000bc_to_3000ad.json")
    const data = await file.json()
    const planets = []
    for (const planet of data){
        const {a,e, radius } = planet
        const t = Math.sqrt(Math.pow(a, 3))*1000
        const size = (radius / sunRadius) * 10
        planets.push({NAME:planet.name,GEOMETRY:[size,32,32],COLOR:0xffa500,ORBIT:{LINE:500,COLOR:"0xaaaaaa",SEMI_MAJOR_AXIS:a,ECCENTRICITY:e,ORBITAL_PERIOD:t}, HAS_TEXTURE:true})
    }

    const objects = await fetchObjectsData(['https://ssd-api.jpl.nasa.gov/sbdb_query.api?fields=full_name,epoch,e,a,i,om,w,ma&sb-kind=a&limit=1000'])
    const smallObjects = objects["message"]["data"]

    for (const object of smallObjects){
        const { q_au_1: q_au_1_str, e: e_str} = object;
        const q_au_1 = Number(q_au_1_str);
        const e = Number(e_str);
        const a = q_au_1 / (1-e)
        const t = Math.sqrt(Math.pow(a, 3))*1000
        planets.push({NAME:object["object_name"],GEOMETRY:[0.01,16,16],COLOR:0xffffff,ORBIT:{LINE:500,COLOR:0x000000,SEMI_MAJOR_AXIS:a,ECCENTRICITY:e,ORBITAL_PERIOD:t},HAS_TEXTURE:false})
    } 
       

    return planets;
}   