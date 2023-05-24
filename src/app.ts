import express from "express";
const app = express();

import cors from 'cors';
import { planetsRouter } from "./routes/planets";
import path from "path";
import morgan from "morgan";
import { launchesRouter } from "./routes/launches";

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);
app.use(launchesRouter);

app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "public","index.html"))
})

export {app};