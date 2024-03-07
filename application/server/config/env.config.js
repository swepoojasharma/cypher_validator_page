import env from "dotenv";
env.config();

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;