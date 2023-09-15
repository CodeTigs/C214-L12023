function calcularIMC(peso, altura) {
  if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
  }

  const alturaMetros = altura / 100; // Converte altura de centímetros para metros
  return imc = (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}
function categoriaIMC(peso, altura){
  var imc = calcularIMC(peso,altura);
  let categoriaIMC = '';
  if (imc < 18.5) {
      categoriaIMC = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
      categoriaIMC = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
      categoriaIMC = 'Sobrepeso';
  } else if (imc >= 30 && imc < 34.9) {
      categoriaIMC = 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 39.9) {
      categoriaIMC = 'Obesidade Grau II';
  } else {
      categoriaIMC = 'Obesidade Grau III';
  }
  return categoriaIMC
}


module.exports = { calcularIMC ,categoriaIMC};
