import express from "express";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the simple" });
});

export default app;
