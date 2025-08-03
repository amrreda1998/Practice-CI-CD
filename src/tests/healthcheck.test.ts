import request from "supertest";
import app from "../app";

describe("GET /healthcheck", () => {
  it("should return status ok", async () => {
    const res = await request(app).get("/healthcheck");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});
