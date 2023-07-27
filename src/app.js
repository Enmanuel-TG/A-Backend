import express from "express";
import morgan from "morgan";
import cookieParse from "cookie-parser";

import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParse());
app.use("/api", authRouter);
app.get("/helthz", (_req, res) => res.send("ok"));

export default app;
