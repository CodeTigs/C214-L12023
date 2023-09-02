
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
	function exibirClassificacao(imc) {
	  const classificacao = classificarPeso(imc);
	  const resultadoElement = document.getElementById('resultado');
	  resultadoElement.textContent = `Sua classificação de peso é: ${classificacao}`;
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
	  <script>
		exibirClassificacao({imc});
	  </script>
	  <p>Sua classificacao peso e {classificarPeso(imc)}</p> <!-- Aqui vamos exibir a classificação -->

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
  