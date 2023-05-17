const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets: Array<any> = [];

function isHabitablePlanet(planet: any) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

const loadPlanets = new Promise((resolve, reject)=>{
  fs.createReadStream('./data/kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data: any) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets[habitablePlanets.length] = data;
    }
  })
  .on('error', (err: any) => {
    reject(err);
  })
  .on('end', () => {
    resolve("");
  });
})

export {loadPlanets, habitablePlanets};