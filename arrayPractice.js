const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


//***MAP***
//1. Get array of all names
function getNames(item) {
    return [item.name];
}
console.log(characters.map(getNames)); // output all names from array

//2. Get array of all heights
function getHeights(item) {
    return [item.height];
}
console.log(characters.map(getHeights));

//3. Get array of objects with just name and height properties
function getNameAndHeight(item) {
    return [item.name, item.height].join(" ");
}
console.log(characters.map(getNameAndHeight));

//4. Get array of all first names
console.log("Get array of all first names");
function getArraysOfFirstNames(item) {
    let arrNames = characters.map(character => character.name.split(' ')[0]);
    return arrNames;
}
console.log(getArraysOfFirstNames());


//***REDUCE***
//1. Get total mass of all characters
console.log("1. Get total mass of all characters");
let totalMass = characters.reduce((a, b) => ({ mass: a.mass + b.mass }));
console.log(totalMass);

//2. Get total height of all characters
console.log("2. Get total height of all characters");
let totalHeigth = characters.reduce((a, b) => ({ height: a.height + b.height }));
console.log(totalHeigth);

//3. Get total number of characters by eye color
console.log("3. Get total number of characters by eye color");
let eyeColor = characters.reduce((a, b) => ({ eye_color: a.eye_color == 'blue' + b.eye_color == 'blue' }));
console.log(eyeColor);

//4. Get total number of characters in all the character names



//***FILTER***
//1. Get characters with mass greater than 100
console.log("1. Get characters with mass greater than 100");
let massGreaterThan100 = characters.filter(character => character.mass > 100);
console.log(massGreaterThan100);

//2. Get characters with height less than 200
console.log("2. Get characters with height less than 200");
let heightLessThan200 = characters.filter(character => character.height < 200);
console.log(heightLessThan200);

//3. Get all male characters
console.log("3. Get all male characters");
let maleCharacters = characters.filter(character => character.gender == 'male');
console.log(maleCharacters);

//4. Get all female characters
console.log("3. Get all female characters");
let femaleCharacters = characters.filter(character => character.gender == 'female');
console.log(femaleCharacters);


//***SORT***
//1. Sort by mass
console.log("1. Sort by mass");
let massCH = characters.sort(function (a, b) { return a.mass - b.mass });
console.log(massCH);

//2. Sort by height
console.log("1. Sort by height");
let heightCH = characters.sort(function (a, b) { return a.height - b.height });
console.log(heightCH);

//3. Sort by name
console.log("1. Sort by name");
let nameCH = characters.sort(function (a, b) { return a.name - b.name });
console.log(nameCH);

//4. Sort by gender
console.log("1. Sort by gender");
let genderCH = characters.sort(function (a, b) { return a.gender - b.gender });
console.log(genderCH);


//***EVERY***
//1. Does every character have blue eyes?
let eyes = characters.every(function (a) {
    return a.eye_color == 'blue';
});
console.log(eyes);

//2. Does every character have mass more than 40?
let m = characters.every(function (a) {
    return a.mass > 40;
});
console.log(m);

//3. Is every character shorter than 200?
let h = characters.every(function (a) {
    return a.height < 200;
});
console.log(h);
//4. Is every character male?
let g = characters.every(function (a) {
    return a.gender == 'male';
});
console.log(g);


//***SOME***
//1. Is there at least one male character?
let maleS = characters.some(function (a) {
    return a.gender == 'male'
});
console.log(maleS);
//2. Is there at least one character with blue eyes?
let eyesS = characters.some(function (a) {
    return a.eye_color == 'blue'
});
console.log(eyesS);
//3. Is there at least one character taller than 210?
let heightS = characters.some(function (a) {
    return a.height > 200;
});
console.log(heightS);
//4. Is there at least one character that has mass less than 50?
let massS = characters.some(function (a) {
    return a.mass < 50
});
console.log(massS);