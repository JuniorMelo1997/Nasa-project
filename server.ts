import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res)=>{
    res.json({message: "Tamo on, pô"});
})

app.listen(port, ()=>{
    console.log("Running");
})