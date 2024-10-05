import { NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: Request){
    try{  
        const {queryArr, pgUser, pgName, pgAddress, pgPassword} = await request.json()
    const nasaSql = postgres({
        host: pgAddress,
        username: pgUser,
        password: pgPassword,
        port: 5432,
        database: 'nasa'
      });

      const [data] = await nasaSql`
      SELECT data
      FROM data_entries 
    `;

      console.log(data)

    await nasaSql.end();

    return NextResponse.json({message:data})
    }
    catch(e){
        console.log(e)
        return NextResponse.json({error:"Error!"},{status:500})
    }
}