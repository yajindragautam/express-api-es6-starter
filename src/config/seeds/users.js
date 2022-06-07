const bcrypt = require('bcrypt');

// Encrypt password
const hashPassword = bcrypt.hashSync("123456",12)

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          firstName: "Test",
          lastName: "data",
          email: "email@gmail.com",
          password: hashPassword,
          token:"kjdfljsdlafjl;sdajlfjsajdlkdasfkjsad"
        },
      ])
    })
}
