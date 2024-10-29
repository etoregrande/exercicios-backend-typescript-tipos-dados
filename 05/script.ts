const soletrar = (palavra: string): string => {
    let resultado = ``
    for (let i = 0; i < palavra.length; i++) {
        resultado += `${palavra.charAt(i)}-`;
    }

    return resultado.slice(0, -1);
}

console.log(soletrar(`etore grande`))