const usuarios02 = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const filtrarUsuarios = (
    listaUsuarios: { nome: string, idade: number, status: boolean }[],
    nome: string
) => {
    const resultado = listaUsuarios.filter((usuario) => {
        return usuario.nome === nome;
    })

    if (!resultado) {
        return `Usuário não encontrado`
    }

    return resultado;
}

console.log(filtrarUsuarios(usuarios02, `Guido`));