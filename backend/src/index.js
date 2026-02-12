import { app } from "./server.js";
import { connectDB } from "./data/connectDb.js";

import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
  debug: true,
});

const PORT = process.env.PORT || 3000;

await connectDB();
// await connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("Server connection failed....", error);
//   });

export default app;
