/*eslint-env browser*/

var fck = require('f-ck');
var input = document.querySelector('input');
var output = document.querySelector('output');

change();

input.addEventListener('input', change);

function change() {
  output.value = fck(input.value);
}

//npm init -> zo begin je altijd een npm project.
// je kan -y doen dan zeg je ja op alle vragen en kan
// je deze aanpassen in je package.json file.
// in een package kan je aan iets meegeven dat iets een binary is
// dit betekent dat je dit in de terminal kan gebruiken. bijvoorbeeld
// zoals browserify
// -v of -h kan je ergens achter zetten om te testen of het werkt in je terminal
//
// EPIC shit hier beneden!!!!
// Je kan dus scriptjes schrijven in je scripts object
// binnen je package.json en dan deze in je terminal aanroepen via
// npm run-script build
//
//  "scripts": {
//    "build": "browserify index.js -o build.js"
//  }
