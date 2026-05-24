import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

import * as schema from "@/lib/db/schema";

const sqlite = openDatabaseSync("helprr.db");

export const db = drizzle(sqlite, { schema });

const migrateDatabase = () => {
  sqlite.execSync("PRAGMA foreign_keys = ON;");
  sqlite.execSync(`
    CREATE TABLE IF NOT EXISTS conversations (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      last_message_preview TEXT
    );
  `);
  sqlite.execSync(`
    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY NOT NULL,
      conversation_id TEXT NOT NULL,
      body TEXT NOT NULL,
      kind TEXT NOT NULL,
      language TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      deleted_at INTEGER,
      FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
    );
  `);
  sqlite.execSync(`
    CREATE TABLE IF NOT EXISTS app_settings (
      key TEXT PRIMARY KEY NOT NULL,
      value TEXT NOT NULL
    );
  `);
  sqlite.execSync(`
    CREATE INDEX IF NOT EXISTS messages_conversation_created_idx
    ON messages (conversation_id, created_at);
  `);
};

export { migrateDatabase };
