// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// // export default function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse<Data>,
// // ) {
// //   res.status(200).json({ name: "John Doe" });
// // }




// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
//   // Validate request method
//   if (req.method !== "GET") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

  
//   const { username } = req.query;

//   // Validate the username
//   if (!username || typeof username !== "string") {
//     return res.status(400).json({ error: "Invalid username provided" });
//   }

//   try {
    
//     const response = await fetch(`https://lichess.org/api/user/${username}`);

    
//     if (!response.ok) {
//       return res.status(response.status).json({
//         error: `Failed to fetch user profile: ${response.statusText}`,
//       });
//     }

//     const data = await response.json();

  
//     res.status(200).json(data);
//   } catch (error) {

//     res.status(500).json({ error: "An error occurred while fetching the user profile" });
//   }
// }
