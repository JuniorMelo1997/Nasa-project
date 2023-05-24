import { ISendLaunch } from "../interfaces/launcheInterface";
import { addNewLaunch } from "../models/launchesModel";

export class SetLaunchesController{
    setLaunches({mission, rocket, launchDate, target}: ISendLaunch){  

        //Validation for missing arguments
        if(!mission || !rocket || !launchDate || !target){
            return false;
        }

        //Vallidation for correct launchDate format
        const date = new Date(launchDate)
        if(isNaN(date.valueOf())){
            return false;
        }

        addNewLaunch({mission, rocket, launchDate: date, target});
        return true;
    }
}