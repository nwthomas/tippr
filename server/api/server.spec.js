const server = require("./server");
const request = require("supertest");
const db = require("../data/dbConfig");

describe("server.js", () => {
  describe("POST /", () => {
    it("should respond with status code 200 ok", async () => {
      let res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    it("should respond with status code 400 bad request", async () => {
      let res = await request(server)
        .post("/login")
        .send({ username: "random", password: "random" });
      expect(res.status).toBe(400);
    });
  });
});
