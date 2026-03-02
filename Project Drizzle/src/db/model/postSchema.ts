import { pgTable, serial, integer, varchar, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { userTable } from "./userSchema";
import { categoryTable } from "./categorySchema";

export const statusEnum = pgEnum("status", ["draft", "archived", "published"])

export const postTable = pgTable("post", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull().references(() => userTable.id), //FK
    title: varchar("title", { length: 255 }).notNull(),
    status: statusEnum("status"),
    shortDescription: text("short_description"),
    content: text("content").notNull(),
    categoryId: integer("category_id").notNull().references(() => categoryTable.id),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),

});