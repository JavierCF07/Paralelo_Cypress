// Para que funcionen los comandos
/// <reference types="cypress"/>

describe("Seccion 1 Validando el titulo", () =>{
    it('Test validar el titulo', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')

        cy.log('OK, a funcion title funcionó bien')
    });

})