// Simulação de estatísticas sobre as crenças natalinas de 2023
const estatisticas = [
    { crença: "Papai Noel existe?", porcentagem: 45 },
    { crença: "Preferem presentes a decoração", porcentagem: 34 },
    { crença: "Celebram o Natal com a família", porcentagem: 92 },
    { crença: "Gostam das músicas de Natal", porcentagem: 79 },
    { crença: "Associam o Natal a sentimentos religiosos", porcentagem: 60 }
];

// Função para carregar as estatísticas na página
function carregarEstatisticas() {
    const lista = document.getElementById('lista-estatisticas');
    estatisticas.forEach(estatistica => {
        const item = document.createElement('li');
        item.innerHTML = `${estatistica.crença}: <strong>${estatistica.porcentagem}%</strong>`;
        lista.appendChild(item);
    });
}

// Função para exibir a resposta com base na seleção do usuário
function mostrarResposta() {
    const crencaSelecionada = document.getElementById('natal-crenca').value;
    const resposta = document.getElementById('resposta');

    if (crencaSelecionada === 'sim') {
        resposta.innerHTML = "Você não está sozinho! Muitas pessoas acreditam no Papai Noel. Estudos mostram que cerca de 45% das pessoas ainda acreditam que ele existe!";
    } else if (crencaSelecionada === 'nao') {
        resposta.innerHTML = "Embora algumas pessoas não acreditem mais no Papai Noel, ele ainda é uma figura central nas celebrações de Natal para muitas famílias.";
    } else {
        resposta.innerHTML = "O Natal é uma época mágica para todos, independentemente das crenças pessoais. A diversidade de opiniões é o que torna esta data tão especial!";
    }
}

// Carregar as estatísticas na página quando o site for carregado
window.onload = carregarEstatisticas;
