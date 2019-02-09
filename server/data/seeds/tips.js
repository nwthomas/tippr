exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tips")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tips").insert([
        { worker_id: 1, tip_date: "2019-02-03 21:58:19", tip_amount: 10 },
        { worker_id: 2, tip_date: "2019-02-04 21:58:19", tip_amount: 5 },
        { worker_id: 3, tip_date: "2019-02-05 21:58:19", tip_amount: 20.15 },
        { worker_id: 4, tip_date: "2019-02-05 21:58:19", tip_amount: 20 },
        { worker_id: 1, tip_date: "2019-02-05 21:58:19", tip_amount: 5.25 },
        { worker_id: 2, tip_date: "2019-02-05 21:58:19", tip_amount: 3.76 },
        { worker_id: 1, tip_date: "2019-02-05 21:58:19", tip_amount: 7.8 },
        { worker_id: 1, tip_date: "2019-02-05 21:58:19", tip_amount: 9.9 },
        { worker_id: 3, tip_date: "2019-02-05 21:58:19", tip_amount: 15.5 }
      ]);
    });
};
