exports.up = function(knex, Promise) {
  return knex.schema.createTable("tips", table => {
    table.increments();
    table
      .integer("worker_id")
      .notNullable()
      .references("id")
      .inTable("workers")
      .onDelete("CASCADE");
    table.datetime("tip_date").defaultTo(knex.fn.now());
    table.float("tip_amount").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tips");
};
