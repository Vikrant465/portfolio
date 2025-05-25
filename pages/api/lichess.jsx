import axios from "axios";


export default async function handler(req, res) {
    
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
    console.log("req.query", req.query);
  
    
    const { username } = req.query;
  
    if (!username || typeof username !== "string") {
      return res.status(400).json({ error: "Invalid username provided" });
    }
  
    try {
      
    //   const response = await fetch(`https://lichess.org/api/user/${username}`);
        const resp = await axios.get(`https://lichess.org/api/user/${username}`);

      
    //   if (!response.ok) {
    //     return res.status(response.status).json({
    //       error: `Failed to fetch user profile: ${response.statusText}`,
    //     });
    //   }
    console.log("resp", resp.data);
  
      const data = await resp.data;
  
    
      res.status(200).json(data);
    } catch (error) {
  
      res.status(500).json({ error: "An error occurred while fetching the user profile" });
    }
  }
  