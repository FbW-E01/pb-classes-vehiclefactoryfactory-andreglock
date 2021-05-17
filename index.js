function factoryFactory(typeOfFactory) {
    return function(make, model, year, type = typeOfFactory) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.type = type;
    }
}

let carFactory = factoryFactory('Car');
let bicycleFactory = factoryFactory('Bicycle');
let boatFactory = factoryFactory('Boat');
let blimpFactory = factoryFactory('Blimp');
let trainFactory = factoryFactory('Train');

const garage = [];

garage.push(new carFactory('Honda', 'Civic', 1999));
garage.push(new carFactory('Honda', 'Fit', 2006));
garage.push(new carFactory('Chevrolet', 'Onix', 2020));
garage.push(new carFactory('Fiat', 'Palio', 2015));
garage.push(new carFactory('VolksWagen', 'Gol', 2013));
garage.push(new bicycleFactory('Giant', 'OCR', 2006));
garage.push(new bicycleFactory('Btwin', '520 Alu', 2019));
garage.push(new boatFactory('Sevylor', 'Rivera', 2017));
garage.push(new blimpFactory('Zeppelin', 'NT', 2000));
garage.push(new trainFactory('Hokkaido', 'Shinkanzen', 1981));

garage.forEach(vehicle => console.log(vehicle));

console.log(`carFactory is ${typeof(carFactory)}, an item created is ${typeof(garage[0])}`);
//The factories are functions that create objects.