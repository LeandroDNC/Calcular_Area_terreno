function calcularArea() {
    var largura = document.getElementById('largura').value;
    var comprimento = document.getElementById('comprimento').value;
    var area = CalcularAreaTerreno(largura, comprimento);

    document.getElementById('resultado').innerText = 'O terreno possui ' + area + ' metros quadrados';
}

function CalcularAreaTerreno(largura, comprimento) {
    return largura * comprimento;
}