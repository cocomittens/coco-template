import Database from "better-sqlite3";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const db: Database.Database = new Database("unread.sqlite");

db.exec(readFileSync(join(__dirname, "schema.sql"), "utf8"));

export default db;