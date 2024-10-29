const listarTabuada = (numeros: number[]): string => {
    let resultado: string = ``;
    let n = 0;

    numeros.forEach(numero => {
        while (n <= 10) {
            resultado += `${numero} x ${n} = ${numero * n} \n`;
            n++

        }
        n = 0
        resultado += `---------------\n\n`

    });

    return resultado
}

console.log(listarTabuada([1, 5, 2]));