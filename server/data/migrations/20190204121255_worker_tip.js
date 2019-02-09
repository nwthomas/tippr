exports.up = function(knex, Promise) {
  return knex.schema.createTable("worker_tip", table => {
    table.increments();
    table
      .integer("worker_id")
      .references("id")
      .inTable("workers")
      .notNullable()
      .onDelete("CASCADE");
    table
      .integer("tip_id")
      .references("id")
      .inTable("add_tip")
      .notNullable()
      .onDelete("CASCADE");
    table
      .float("tip_amount")
      .references("tip_amount")
      .inTable("add_tip")
      .notNullable()
      .onDelete("CASCADE");
    table.index(["worker_id", "tip_id"]).unique(["worker_id", "tip_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("worker_tip");
};
