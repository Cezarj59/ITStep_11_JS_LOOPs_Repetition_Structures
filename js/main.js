const primos = [];
const naoPrimos = [];

function numeroPrimo(numero) {
    let quantidadeDeDivisor = 0;

    for (let contador = 1; contador <= numero; contador++) {
        if (numero % contador == 0) {
            quantidadeDeDivisor++;
        }
    }
    if (quantidadeDeDivisor == 2) {
        return true;
    }
}

for (let i = 0; primos.length < 10; i++) {
    if (numeroPrimo(i)) {
        primos.push(i);
    } else {
        naoPrimos.push(i);
    }
}

console.log(primos);
console.log(naoPrimos);


document.write("Numeros Primos: " + primos + "</br>");

document.write("Numeros não Primos: " + naoPrimos);


