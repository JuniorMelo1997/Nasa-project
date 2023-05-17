import express from "express";
const app = express();

import cors from 'cors';
import { planetsRouter } from "./routes/planets";

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());
app.use(planetsRouter);

app.get("/", (req, res)=>{
    res.json({message: "Tamo on, pô"});
})

export {app};