const nomeTurista = 'Olá! Qual é o seu nome?';

const cidadesVisitadas = [];

while (true) {
    const resposta = 'Você já visitou alguma cidade? (sim/não)'.toLowerCase();
    if (resposta === "sim") {
        const cidade = 'Qual cidade você visitou?';
        cidadesVisitadas.push(cidade);
    } else if (resposta === "não") {
        break;
    } else {
        console.log("Por favor, responda com 'sim' ou 'não'.");
    }
}

console.log(`Turista: ${nomeTurista}`);
console.log(`Cidades visitadas: ${cidadesVisitadas.join(", ")}`);
