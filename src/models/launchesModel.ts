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

function dropLaunch(id: number){
    // launches = launches.filter(launch => launch.flightNumber !== id);

    launches = launches.map((launch)=>{
        if(launch.flightNumber === id){
            launch.upcoming = false;
            launch.success = false;
        }

        return launch;
    })
}

export {launches, addNewLaunch, dropLaunch};