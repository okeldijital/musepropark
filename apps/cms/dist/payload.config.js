import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
export default buildConfig({
    collections: [],
    editor: lexicalEditor({}),
    secret: process.env.PAYLOAD_SECRET || "dev-secret",
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL,
        },
    }),
});
