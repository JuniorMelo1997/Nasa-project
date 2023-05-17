import { app } from "./app";
import http from "http";
import { loadPlanets } from "./models/planetsModel";

const port = 5000;
const server = http.createServer(app);

loadPlanets.then(()=>{
    server.listen(port, ()=>{
        console.log("Server is running");
    })
}).catch((err)=>{
    console.log("Error on loading the data. Err: " + err );
})