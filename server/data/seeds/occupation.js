exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("occupation")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("occupation").insert([
        { name: "waiter" },
        { name: "barista" },
        { name: "bellhop" }
      ]);
    });
};
