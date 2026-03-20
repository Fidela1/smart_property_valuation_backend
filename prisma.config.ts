console.log("DB URL from env:", process.env.DATABASE_URL);
// prisma.config.ts
import "dotenv/config";                     // Loads .env — make sure dotenv is installed!
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",            // or "./prisma/schema.prisma" if nested

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: env("DATABASE_URL"),                // This line MUST be here
  },
});