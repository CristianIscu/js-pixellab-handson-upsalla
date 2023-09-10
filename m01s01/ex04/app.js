var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputheight = document.getElementById('height');
var inputradius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();

    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var height = inputheight.value || 0;
    var radius = inputradius.value || 0;
    var result = 0;

    result = Math.Pi * (radius * radius);

    elementResult.innerText = result;
  },
  false,
);
