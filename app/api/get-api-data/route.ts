import { NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: Request){
    try{
        const {apiArr, pgUser, pgName, pgAddress, pgPassword} = await request.json()
        const returnArr = []
        for(const api of apiArr){
            returnArr.push(await pgPost(api, pgUser, pgName, pgAddress, pgPassword))
        };
        return NextResponse.json({message:returnArr})   
    }
    catch(e){
        console.log(e)
        return NextResponse.json({error:"Error!"},{status:500})
    }

}


async function pgPost(api: string, pgUser: string, pgName: string, pgAddress: string, pgPassword: string){
    
    const sql = postgres({ host: pgAddress, username: pgUser, password: pgPassword, port: 5432 });

    const dbCheck = await sql`
    SELECT 1
    FROM pg_database
    WHERE datname = 'nasa'
    `;

    if (dbCheck.count === 0) {
        console.log("Database nasa does not exist. Creating it...");
        await sql`CREATE DATABASE nasa`;
        console.log("Database nasa created successfully.");
    } else {
        console.log("Database nasa already exists.");
    }

    sql.end()

    const nasaSql = postgres({
        host: pgAddress,
        username: pgUser,
        password: pgPassword,
        port: 5432,
        database: 'nasa'
      });
      if (dbCheck.count === 0) {
        await nasaSql`
        CREATE TABLE IF NOT EXISTS data_entries (
      id SERIAL PRIMARY KEY,
      data JSONB,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    }

    const data = await getApiData(api)

    const [lastEntry] = await nasaSql`
      SELECT timestamp 
      FROM data_entries 
      ORDER BY timestamp DESC 
      LIMIT 1
    `;
    
    const currentTime = new Date();

    if (lastEntry) {
        const lastTimestamp = new Date(lastEntry.timestamp + "Z");
        const timeDifference = (currentTime.getTime() - lastTimestamp.getTime()) / (1000 * 60);
        console.log('Last timestamp:', lastTimestamp);
        console.log('Current time:', currentTime);
        console.log('Time difference (minutes):', timeDifference);
        if (timeDifference < 5) {
            await nasaSql.end();
          return "Less than 5 minutes since the last entry."
        }
      }
    
      await nasaSql`
      INSERT INTO data_entries (data, timestamp) 
      VALUES (${nasaSql.json(data)}, ${currentTime})
    `;

    await nasaSql.end();

    return "Success!"
}

async function getApiData(url: string) {
    const res = await fetch(url, {
        method:"GET"
    })
    const response = await res.json();
    return response
}
