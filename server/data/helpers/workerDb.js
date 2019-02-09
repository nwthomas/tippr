const db = require("../dbConfig");

module.exports = {
  getAllWorkers: async () => {
    const users = await db("workers");
    return users;
  }
};
