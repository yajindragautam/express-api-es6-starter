/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").del()
  await knex("tasks").insert([
    { title: "dummy task 1", description: "Welcome to dummy task 1" },
    { title: "dummy task 2", description: "Welcome to dummy task 2" },
    { title: "dummy task 3", description: "" },
  ])
}
