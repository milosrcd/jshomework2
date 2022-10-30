function getArraysOfFirstNames(item){
    let arrNames = characters.map(a => a.name);
    return arrNames;
}
console.log(characters.map(getArraysOfFirstNames));