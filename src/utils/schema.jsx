import { sql } from "drizzle-orm";
import { integer, varchar, pgTable, serial, text } from "drizzle-orm/pg-core";
import { user } from "../assets";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username").notNull(),
  age: integer("age").notNull(),
  location: varchar("location").notNull(),
  createdBy: varchar("created_by").notNull(),
});

export const Records = pgTable("records", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => Users.id)
    .notNull(),
  recordName: varchar("record_name").notNull(),
  kanbanRecords: text("kanban_records").notNull(),
  createdBy: varchar("created_by").notNull(),
});
