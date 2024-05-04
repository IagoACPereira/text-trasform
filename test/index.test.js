const textTransform = require("../index")

test('Veririficar se string "Minha String" retorna tudo maiusculo com o metodo "upperCase"', () => {
  const str = 'Minha String'
  expect(textTransform.upperCase(str)).toBe('MINHA STRING')
})

test('Veririficar se string "Minha String" retorna tudo minusculo com o metodo "lowerCase"', () => {
  const str = 'Minha String'
  expect(textTransform.lowerCase(str)).toBe('minha string')
})

test('Veririficar se string "minha string" retorna o primeiro caractere maiusculo com o metodo "capitalize"', () => {
  const str = 'minha string'
  expect(textTransform.captalize(str)).toBe('Minha string')
})

test('Veririficar se string "minha string" retorna o primeiro caractere de cada palavra maiusculo com o metodo "capitalizeAll"', () => {
  const str = 'minha string'
  expect(textTransform.captalizeAll(str)).toBe('Minha String')
})