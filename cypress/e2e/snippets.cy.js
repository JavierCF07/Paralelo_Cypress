/// <reference types="cypress"/>

describe("Configuracion y uso de snippets", () => {

    it('Snippet 1', () => {
        let tiempo=1500
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.wait(tiempo)

        cy.get("#username").should("be.visible").click({force:true})

        cy.get('[type="text"]').should('be.visible').type('Javier')
        cy.wait(tiempo)
    });

})
