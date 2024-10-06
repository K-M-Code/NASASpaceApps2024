import { NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: Request){
    try{  
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {queryArr} = await request.json()
        const pgUser = process.env.PG_USER
        const pgAddress = process.env.PG_ADDRESS
        const pgPassword = process.env.PG_PASSWORD
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