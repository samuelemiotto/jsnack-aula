const cars = [
    {
        'brand' : 'Tesla',
        'model' : 'S',
        'fuel' : 'elettrico'
    },
    {
        'brand' : 'BMW',
        'model' : 'Serie 3',
        'fuel' : 'diesel'
    },
    {
        'brand' : 'Audi',
        'model' : 'A1',
        'fuel' : 'benzina'
    },
    {
        'brand' : 'Fiat',
        'model' : 'Panda',
        'fuel' : 'gpl'
    },
    {
        'brand' : 'Fiat',
        'model' : '500',
        'fuel' : 'metano'
    },
    {
        'brand' : 'Dacia',
        'model' : 'Spring',
        'fuel' : 'elettrico'
    },
    {
        'brand' : 'VolksWagen',
        'model' : 'Golf',
        'fuel' : 'benzina'
    },
    {
        'brand' : 'Volvo',
        'model' : 'V90',
        'fuel' : 'diesel'
    },
    {
        'brand' : 'Toyota',
        'model' : 'Yaris',
        'fuel' : 'benzina'
    },
    {
        'brand' : 'Hyundai',
        'model' : 'Ioniq',
        'fuel' : 'elettrico'
    },
];

let listaBenzina = [];
let listaDiesel = [];
let listaAltri = [];

for (let i = 0; i < cars.length; i++) {
    const {fuel} = cars[i];
    if (fuel == 'benzina') {
        listaBenzina.push(cars[i])
    } else if (fuel == 'diesel') {
        listaDiesel.push(cars[i])
    } else {
        listaAltri.push(cars[i])
    }
}




console.log(listaBenzina);
console.log(listaDiesel);
console.log(listaAltri);