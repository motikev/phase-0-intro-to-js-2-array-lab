// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

// let anotherCat = [...cats];
function  destructivelyAppendCat(name){
    console.log(cats.push("Ralph"));
    return cats;
}
destructivelyAppendCat(cats)

var cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(){
    console.log(cats.unshift("Bob"));
    return cats;
}
destructivelyPrependCat()

var cats = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastCat(){
    console.log(cats.pop());
    return cats;
}
destructivelyRemoveLastCat(cats);

var cats = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstCat(){
    console.log(cats.shift())
    return cats;
}
destructivelyRemoveFirstCat()

function appendCat(name){
    var cats = ["Milo", "Otis", "Garfield"];
    let anotherCat = [...cats.slice(0), "Broom"];
    return anotherCat;

}
appendCat()

function prependCat(name){
    var cats = ["Milo", "Otis", "Garfield"];
    let anotherCat = ["Arnold", ...cats];
    return anotherCat;
}
prependCat();

function removeLastCat() {
    var cats = ["Milo", "Otis", "Garfield"];
    let newCats = cats.slice(0, cats.length - 1);
    return newCats;
  }
  
  removeLastCat();
  

function removeFirstCat() {
  var cats = ["Milo", "Otis", "Garfield"];
  let newCats = cats.slice(1);
  return newCats;
}

removeFirstCat();