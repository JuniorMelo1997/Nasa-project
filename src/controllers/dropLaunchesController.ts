import { dropLaunch, launches } from "../models/launchesModel";


export class DropLaunchController{
    async deleteLaunch(id: number){
        await dropLaunch(id);

        return launches;
    }
}