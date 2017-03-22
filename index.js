var input = document.querySelector('input');
var output = document.querySelector('output');

change();

input.addEventListener('input', change);

function change() {
  output.value = input.value;
}
//npm init -> zo begin je altijd een npm project.
// je kan -y doen dan zeg je ja op alle vragen en kan
// je deze aanpassen in je package.json file.
//
