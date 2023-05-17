import express, {Request, Response} from "express";
import { GetAllPlanetsController } from "../controllers/getAllPlanetsController";

const planetsRouter = express.Router();

const getAllPlanetsController = new GetAllPlanetsController;

planetsRouter.get("/planets", (req: Request, res: Response)=>{
    const message = getAllPlanetsController.getAllPlanets();

    res.json(message);
});

export {planetsRouter};