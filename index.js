function calcularRank(vitorias, derrotas) {
    // Calcular o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;

    // Determinar o nível baseado na quantidade de vitórias
    const niveis = [
        { limite: 10, nivel: "Ferro" },
        { limite: 20, nivel: "Bronze" },
        { limite: 50, nivel: "Prata" },
        { limite: 80, nivel: "Ouro" },
        { limite: 90, nivel: "Diamante" },
        { limite: 100, nivel: "Lendário" },
        { limite: Infinity, nivel: "Imortal" }
    ];

    const nivel = niveis.find(n => vitorias <= n.limite).nivel;

    // Exibir a mensagem final
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`);
}

// Exemplo de uso da função
calcularRank(85, 30); // O Herói tem um saldo de 55 e está no nível de Ouro.
