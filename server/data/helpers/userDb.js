const db = require("../dbConfig");
module.exports = {
  getAllUsers: async () => {
    const users = await db("users");
    return users;
  },
  insert: async credential => {
    const userId = await db("users").insert(credential);
    return userId;
  },
  update: async (id, change) => {
    const userId = await db("users")
      .where({ id })
      .update(change);
    return userId;
  },
  remove: async id => {
    const count = await db("users")
      .where({ id })
      .del();
    return count;
  }
};
