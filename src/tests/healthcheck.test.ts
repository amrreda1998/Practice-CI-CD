import request from "supertest";
import app from "../app";

describe("GET /healthcheck", () => {
  it("should return status ok", async () => {
    const res = await request(app).get("/healthcheck");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Welcome to the simple backend");
  });
});
