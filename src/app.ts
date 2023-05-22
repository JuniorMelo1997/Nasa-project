import express from "express";
const app = express();

import cors from 'cors';
import { planetsRouter } from "./routes/planets";
import path from "path";

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);

export {app};