const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "admin",
          password: bcrypt.hashSync("password", 11),
          user_type: "guest"
        },
        {
          username: "mariekondo",
          password: bcrypt.hashSync("sparksjoy", 11),
          user_type: "employee"
        },
        {
          username: "pewdiepie",
          password: bcrypt.hashSync("tseries", 11),
          user_type: "employee"
        },
        {
          username: "ben",
          password: bcrypt.hashSync("ben", 11),
          user_type: "employee"
        }
      ]);
    });
};
