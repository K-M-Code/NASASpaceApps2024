import postgres from "postgres"

export async function getApi(url:string) {
    const response = fetch(url)
    return (await response).json
}

export async function updateDB(){
    console.log("test")    
}
updateDB(

    
)