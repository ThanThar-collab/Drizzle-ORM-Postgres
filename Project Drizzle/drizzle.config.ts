import { defineConfig } from "drizzle-kit"
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    schema: "./src/db/model/", //path to your Drizzle schema
    out: "./src/db/migrations", //folder where migrations will be generated
    dialect: "postgresql", //driver
    dbCredentials: {
       url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
});