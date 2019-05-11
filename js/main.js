var grith_input = 0;
var grith_select = 'in';
var length = 0;
var volume = 0;

var grith_input_html = document.querySelector('#grith_input');
grith_input_html.addEventListener('change', function (e) {
    grith_input = parseFloat(e.target.value);
    roundLogCalculation(grith_input, grith_select, length);
});

var grith_select_html = document.querySelector('#grith_select');
grith_select_html.addEventListener('change', function (e) {
    grith_select = e.target.value;
    roundLogCalculation(grith_input, grith_select, length);
});

var length_html = document.querySelector('#length_input');
length_html.addEventListener('change', function (e) {
    length = parseFloat(e.target.value);
    roundLogCalculation(grith_input, grith_select, length);
});

function roundLogCalculation(g, gs, l) {
    var grith = g;
    var volumeFinal;
    if (gs === 'in') {
        grith = g / 12;
        grith = parseFloat(grith.toFixed(2))
    }
    if (gs === 'cm') {
        grith = g / 30.48;
    }
    if (gs == 'm') {
        grith = g * 3.281;
    }

    volumeFinal = parseFloat(((grith / 4) * (grith / 4) * l).toFixed(2));
    document.querySelector('.answer').textContent = volumeFinal;
    

}
