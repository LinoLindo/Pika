// Dados fictícios sobre homicídios no Brasil
const dadosRegioes = {
    labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
    datasets: [{
        label: 'Homicídios por Região',
        data: [22, 35, 8, 30, 5], // Porcentagens fictícias
        backgroundColor: ['#FF5733', '#FFC300', '#DAF7A6', '#900C3F', '#581845'],
        hoverOffset: 4
    }]
};

const dadosIdades = {
    labels: ['18-25 anos', '26-35 anos', '36-45 anos', '46-60 anos', 'Acima de 60 anos'],
    datasets: [{
        label: 'Homicídios por Faixa Etária',
        data: [30, 40, 15, 10, 5], // Porcentagens fictícias
        backgroundColor: ['#3498db', '#9b59b6', '#2ecc71', '#f39c12', '#e74c3c'],
        hoverOffset: 4
    }]
};

const dadosSexo = {
    labels: ['Masculino', 'Feminino'],
    datasets: [{
        label: 'Homicídios por Sexo',
        data: [85, 15], // Porcentagens fictícias
        backgroundColor: ['#2980b9', '#e74c3c'],
        hoverOffset: 4
    }]
};

// Configuração do gráfico de pizza para as regiões
const configRegioes = {
    type: 'pie',
    data: dadosRegioes,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
};

// Configuração do gráfico de pizza para as faixas etárias
const configIdades = {
    type: 'pie',
    data: dadosIdades,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
};

// Configuração do gráfico de pizza para os sexos
const configSexo = {
    type: 'pie',
    data: dadosSexo,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
};

// Inicializando os gráficos
window.onload = function() {
    new Chart(document.getElementById('graficoPizzaRegioes'), configRegioes);
    new Chart(document.getElementById('graficoPizzaIdades'), configIdades);
    new Chart(document.getElementById('graficoPizzaSexo'), configSexo);
};
