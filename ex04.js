var valor1 = parseInt(prompt("Digite o primeiro valor"));
var valor2 = parseInt(prompt("Digite o segundo valor"));
var valor3 = parseInt(prompt("Digite o terceiro valor"));

var maior, segundoMaior;

if (valor1 >= valor2 && valor1 >= valor3){
    maior = valor1;
    segundoMaior = Math.max(valor2, valor3);
} else if (valor2 >= valor1 && valor2 >= valor3){
    maior = valor2;
    segundoMaior = Math.max(valor1, valor3);
} else {
    maior = valor3;
    segundoMaior = Math.max(valor2, valor1);
}

alert("O maior número é: " + maior);
alert("O segundo maior número é: " + segundoMaior);