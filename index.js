var input = document.querySelector('input');
var output = document.querySelector('output');

change();

input.addEventListener('input', change);

function change() {
  output.value = input.value;
}
