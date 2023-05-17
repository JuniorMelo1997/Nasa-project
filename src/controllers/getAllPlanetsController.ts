import { habitablePlanets } from "../models/planetsModel"

export class GetAllPlanetsController {    
    getAllPlanets(){
        return habitablePlanets
    }
}