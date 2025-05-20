/// <reference types="cypress"/>

describe("Funciones para Type", () => {

    it('Type ---> ENTER', () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq', "Google")
        cy.wait(1500)

        cy.get(".gLFyf").type("Cypress io {enter}")

        cy.get("[jsname='UWckNb']").click()

        cy.wait(5000)
    });

})
