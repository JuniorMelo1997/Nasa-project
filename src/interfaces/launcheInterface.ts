interface ILaunch {    
    flightNumber: number,
    mission: string,
    rocket: string,
    launchDate: Date,
    target: string,
    customer: Array<string>,
    upcoming: boolean,
    success: boolean
}

interface ISendLaunch {    
    mission: string,
    rocket: string,
    launchDate: string,
    target: string,
}

interface IModelLaunch {    
    mission: string,
    rocket: string,
    launchDate: Date,
    target: string,
}

export {ILaunch, ISendLaunch, IModelLaunch};