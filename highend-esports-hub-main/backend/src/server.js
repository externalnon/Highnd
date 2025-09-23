import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Simple in-memory submissions store (replace with DB later)
const registrations = [];

app.post("/api/register", (req, res) => {
  const { fullName, email, role, message } = req.body || {};
  if (!fullName || !email || !role) {
    return res.status(400).json({ error: "fullName, email, and role are required" });
  }
  const submission = {
    id: registrations.length + 1,
    fullName,
    email,
    role,
    message: message || "",
    createdAt: new Date().toISOString(),
  };
  registrations.push(submission);
  return res.status(201).json({ ok: true, id: submission.id });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[backend] listening on http://localhost:${port}`);
});


