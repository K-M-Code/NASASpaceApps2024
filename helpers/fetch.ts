export const fetchObjectsData = async (apiArray: string[]) => {
    try {
      let response = await fetch("/api/get-api-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiArr: apiArray,
          pgUser: process.env.PG_USER,
          pgName: process.env.PG_NAME,
          pgAddress: process.env.PG_ADDRESS,
          pgPassword: process.env.PG_PASSWORD,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      response = await fetch("/api/get-data-from-pg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          queeryArr: [],
          pgUser: process.env.NEXT_PUBLIC_PG_USER,
          pgName: process.env.NEXT_PUBLIC_PG_NAME,
          pgAddress: process.env.NEXT_PUBLIC_PG_ADDRESS,
          pgPassword: process.env.NEXT_PUBLIC_PG_PASSWORD,
        }),
      });
      const pgData = await response.json()

      return pgData;
    } catch (error) {
      console.error("Failed to fetch asteroid data:", error);
    }
  };