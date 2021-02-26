// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = newCat => cats.push(newCat);

const destructivelyPrependCat = newCat => cats.unshift(newCat);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = newCat => [...cats, newCat];

const prependCat = newCat => [newCat, ...cats];

const removeLastCat = () => cats.slice(0, cats.length - 1);

const removeFirstCat = () => cats.slice(1);