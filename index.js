document.addEventListener("DOMContentLoaded", function () {

    var red = document.getElementById('red')
    var green = document.getElementById('green')
    var blue = document.getElementById('blue')

    var body = document.querySelector('body')


    function atualizarCor() {
        var redValue = red.value
        var greenValue = green.value
        var blueValue = blue.value
        body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    }

    red.addEventListener("input", atualizarCor);
    green.addEventListener("input", atualizarCor);
    blue.addEventListener("input", atualizarCor);
});