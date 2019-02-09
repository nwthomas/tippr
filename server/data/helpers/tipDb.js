const db = require("../dbConfig");

module.exports = {
  getAllTips: async () => {
    let query = await db("tips");
    return query;
  },
  getByTipId: async id => {
    if (id) {
      let query = await db("tips")
        .where({ id })
        .first();
      return query;
    } else {
      return [];
    }
  },
  insert: async tip => {
    let query = await db("tips").insert(tip);
    let result = await db("tips").where({ id: query.id });
    return result;
  },
  update: async (id, tip) => {
    let query = await db("tips")
      .where({ id })
      .update(tip);
    return query;
  },
  remove: async id => {
    const query = await db("tips")
      .where({ id })
      .del();
    return query;
  }
};
