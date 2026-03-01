import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./src/drizzle/model/schema.ts", //path to your Drizzle schema
    out: "./src/drizzle/migrations", //folder where migrations will be generated
    driver: "pg", //driver
    dbCredentials: {
        connectionString: process.env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true
});