/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 exports.up = function (knex) {
    return knex.schema.createTable("users", function (table) {
      table.increments("id")
      table.string("firstName")
      table.string("lastName")
      table.string("email").notNullable().unique()
      table.string("password").notNullable()
      table.string("token").notNullable()
      table.timestamps(true, true)
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable("users")
  }