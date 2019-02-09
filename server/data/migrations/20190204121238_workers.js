exports.up = function(knex, Promise) {
  return knex.schema.createTable("workers", table => {
    table.increments();
    table
      .string("username")
      .references("username")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");
    table
      .binary("profile_photo")
      .defaultTo("https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png");
    table.date("working_since").defaultTo("please include working date");
    table.string("tagline", 255).defaultTo("input tag line");
    table
      .string("first_name", 128)
      .notNullable()
      .defaultTo("");
    table
      .string("last_name", 128)
      .notNullable()
      .defaultTo("");
    table
      .string("occupation")
      .notNullable()
      .references("name")
      .inTable("occupation");
    table
      .string("user_type")
      .references("user_type")
      .inTable("users");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("workers");
};
