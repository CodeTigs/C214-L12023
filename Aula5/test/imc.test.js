const { expect } = require('chai');
const { calcularIMC,categoriaIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });



  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });
});

describe('Testes para calcularIMC', () => {
    it('Deve calcular o IMC corretamente e retornar categoria "Abaixo do peso"', () => {
        const resultado = categoriaIMC(55, 180); // IMC calculado: 20.20 (Abaixo do peso)
        expect(resultado).to.equal('Abaixo do peso');
    });

    it('Deve calcular o IMC corretamente e retornar categoria "Peso normal"', () => {
        const resultado = categoriaIMC(70, 175); // IMC calculado: 22.86 (Peso normal)
        expect(resultado).to.equal('Peso normal');
    });
});


