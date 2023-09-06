<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> <!-- Carregue a biblioteca Chart.js no cabeçalho -->
</head>
<body>
    <script>
        // Variáveis de estado
        let peso = 0;      // Peso do usuário
        let altura = 0;    // Altura do usuário
        let imc = 0;       // Índice de Massa Corporal

        // Função para calcular o IMC
        function calcularIMC() {
            if (peso > 0 && altura > 0) {
                imc = (peso / Math.pow(altura, 2)).toFixed(2);
            } else {
                imc = 0;
            }
        }

        // função para classificar o IMC
        function classificarPeso(imc) {
            if (imc < 18.5) {
                return 'Abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                return 'Peso ideal';
            } else if (imc >= 25.0 && imc <= 29.9) {
                return 'Levemente acima do peso';
            } else if (imc >= 30.0 && imc <= 34.9) {
                return 'Obesidade grau 1';
            } else if (imc >= 35.0 && imc <= 39.9) {
                return 'Obesidade grau 2 (severa)';
            } else {
                return 'Obesidade grau 3 (mórbida)';
            }
        }

        // Função para exibir a classificação e criar o gráfico
        function exibirClassificacao(imc) {
            const classificacao = classificarPeso(imc);
            const resultadoElement = document.getElementById('resultado');
            resultadoElement.textContent = `Sua classificação de peso é: ${classificacao}`;

            // Código para criar o gráfico de barras
            const ctx = document.getElementById('grafico').getContext('2d');
            const data = {
                labels: ['Abaixo do Peso', 'Peso Ideal', 'Levemente Acima do Peso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'],
                datasets: [{
                    label: 'Classificação de Peso',
                    data: [0, 0, 0, 0, 0, 0], // Aqui, você deve fornecer os dados reais do usuário com base na classificação
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            };

            const config = {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            // Atualize o gráfico
            const myChart = new Chart(ctx, config);
        }
    </script>

    <main>
        <h1>Calculadora de IMC</h1>
        <label>
            Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
        </label>
        <label>
            Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
        </label>
        {#if imc > 0}
            <p>Sua classificação peso é {classificarPeso(imc)}</p> <!-- Aqui vamos exibir a classificação -->
            <canvas id="grafico"></canvas> <!-- Adicione o elemento canvas para o gráfico -->
            <script>
                exibirClassificacao({imc});
            </script>
        {/if}
    </main>
    <style>
        main {
            font-family: sans-serif;
            text-align: center;
            padding: 2rem;
        }

        h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
        }

        input {
            padding: 0.25rem;
        }
    </style>
</body>
</html>
