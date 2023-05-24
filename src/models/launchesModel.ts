import { ILaunch, IModelLaunch, ISendLaunch } from "../interfaces/launcheInterface";

let launches: Array<ILaunch> = [];

function addNewLaunch({mission, rocket, launchDate, target}: IModelLaunch){
    const launch: ILaunch = {        
        flightNumber: launches.length+1,
        mission: mission,
        rocket: rocket,
        launchDate: launchDate,
        target: target,
        customer: [
            "ZTM",
            "Nasa"
        ],
        upcoming: true,
        success: true
    }

    launches = [...launches, launch];
}

export {launches, addNewLaunch};