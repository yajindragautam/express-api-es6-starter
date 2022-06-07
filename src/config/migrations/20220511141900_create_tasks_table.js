/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable("tasks", (table) => {
      table.increments("id")
      table.integer("user_id").unsigned().references("id").inTable("users")
      table.string("title").notNullable()
      table.text("description").nullable()
      table.timestamps(true, true)
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("tasks")
  }