import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { NewCountry, countries } from "./schema";
import Database from "better-sqlite3";

export class Client {
  private db: BetterSQLite3Database;

  constructor(connection: string) {
    // connection not required in this example with sqlite
    const sqlite = new Database(":memory:");
    this.db = drizzle(sqlite);
  }

  async migrate() {
    return migrate(this.db, { migrationsFolder: "migrations" });
  }

  async createCountry(country: NewCountry) {
    return this.db.insert(countries).values(country).returning();
  }

  async getCountries(limit = 3) {
    return this.db.select().from(countries).all();
  }

}
