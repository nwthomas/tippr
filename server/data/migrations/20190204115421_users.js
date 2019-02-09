exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("username", 255)
      .unique()
      .notNullable();
    table.string("password", 255).notNullable();
    table.string("user_type", 128).defaultTo("employee");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
