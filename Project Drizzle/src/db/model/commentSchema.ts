import { pgTable, serial, integer, AnyPgColumn, text, timestamp } from "drizzle-orm/pg-core";
import { userTable } from "./userSchema";
import { postTable } from "./postSchema";

export const commentTable = pgTable("comment", {
    id: serial("id").primaryKey(),
    parentId: integer("parent_id").references((): AnyPgColumn => commentTable.id), //reply to another comment att
    userId: integer("user_id").references(() => userTable.id).notNull(),
    content: text("content").notNull(),
    postId: integer("post_id").references(() => postTable.id),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});