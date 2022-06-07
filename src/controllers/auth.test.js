const checkLogin = require('./validateLogin')

test('Entrada do campo login nao e nula', () => {
    expect(checkLogin("user")).toBeTruthy()
  })

