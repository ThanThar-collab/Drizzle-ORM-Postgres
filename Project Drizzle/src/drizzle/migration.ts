import dotenv from "dotenv";
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });

async function main() {
    await migrate(drizzle(migrationClient), {
    migrationsFolder: "./src/drizzle/migrations", //migration folder path
    })

    await migrationClient.end() //close migration in any connection
}

main()