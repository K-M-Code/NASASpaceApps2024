// DEFINE ARRAY OF PLANETS 
import { fetchObjectsData } from "../fetch"

const sunRadius = 696340;

export async function getPlanets(){
    const file = await fetch("/csv/planets_3000bc_to_3000ad.json")
    const data = await file.json()
    console.log(data)
    const planets = []
    for (const planet of data){
        const {a,e, radius } = planet
        const t = Math.sqrt(Math.pow(a, 3))*1000
        const size = (radius / sunRadius) * 10
        planets.push({NAME:planet.name,GEOMETRY:[size,32,32],COLOR:"0xffa500",ORBIT:{LINE:500,COLOR:"0xaaaaaa",SEMI_MAJOR_AXIS:a,ECCENTRICITY:e,ORBITAL_PERIOD:t}})
    }

    const objects = await fetchObjectsData(['https://ssd-api.jpl.nasa.gov/sbdb_query.api?fields=full_name,epoch,e,a,i,om,w,ma&sb-kind=a&limit=1000'])
    const smallObjects = objects["message"]["data"]

    for (const object of smallObjects){
        const {q_au_1,e} = object
        const a = q_au_1 / (1-e)
        const t = Math.sqrt(Math.pow(a, 3))*1000
        planets.push({NAME:object["object_name"],GEOMETRY:[0.05,32,32],COLOR:0xffffff,ORBIT:{LINE:500,COLOR:0x000000,SEMI_MAJOR_AXIS:a,ECCENTRICITY:e,ORBITAL_PERIOD:t}})
    }
       

    return planets;
}   

//AND PUSH IT TO THE ARRAY 



//FOR EACH 


//const function  whatever () = () => {


    // CREATE PLANETS AND RENDER 
//}