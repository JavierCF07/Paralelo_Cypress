/// <reference types="cypress"/>

require('cypress-plugin-tab')

describe("Ejemplo funcion tab", () => {

    it('Type con tab', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").type("Javier").tab()
        .type("Cifuentes").tab()
        .type("javier.cifuentes@distelsa.com.gt")

        
    });

})
