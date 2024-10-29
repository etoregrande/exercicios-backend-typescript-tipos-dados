const gerarEtiquetas = (produto: {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}): string[] => {
    let etiquetas: string[] = [];

    for (let i = 1; i <= produto.qtd; i++) {
        etiquetas.push(`${produto.lote}-${produto.ano}-${i.toString().padStart(3, `0`)}`)
    }

    return etiquetas
}

console.log(gerarEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 20
}))