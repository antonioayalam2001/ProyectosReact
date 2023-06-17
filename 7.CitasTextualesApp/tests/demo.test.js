describe("Grouping all the tests in one Container", () => {
      test('Test', () => {
//      Here we must pass all the tests we are inted to do
//      Inicialización
            const message1 = 'Hola a todos';
//      Estimulo
            const message2 = message1.trim();
//      Comportamiento esperado
            //Condition to pass the trial
            expect(message1).toBe(message2);
      });
})