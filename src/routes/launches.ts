import express, {Request, Response} from "express";
import { GetLaunchesController } from "../controllers/getLaunchesController";
import { SetLaunchesController } from "../controllers/setLaunchesController";
import { DropLaunchController } from "../controllers/dropLaunchesController";

const launchesRouter = express.Router();
const getLaunchesController = new GetLaunchesController;
const setLaunchesController = new SetLaunchesController;
const dropLaunchesController = new DropLaunchController;

launchesRouter.get("/launches", (req: Request, res: Response)=>{
    return res.json(getLaunchesController.getlaunches())
})

launchesRouter.post("/launches", (req: Request, res: Response)=>{   
    if(setLaunchesController.setLaunches(req.body)){        
        return res.json({message: "Launch programmed"})
    }

    return res.status(400).json({message: "Error on arguments"});
})

launchesRouter.delete("/launches/:id", (req: Request, res: Response)=>{
    const id = Number(req.params.id);

    return res.json(dropLaunchesController.deleteLaunch(id))
})

export {launchesRouter};