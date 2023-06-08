import { InferModel } from 'drizzle-orm';
import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
 
export const countries = sqliteTable('countries', {
    id: integer('id').primaryKey(),
    name: text('name'),
  }, (countries) => ({
    nameIdx: uniqueIndex('nameIdx').on(countries.name),
  })
);

export type NewCountry = InferModel<typeof countries, "insert">;
