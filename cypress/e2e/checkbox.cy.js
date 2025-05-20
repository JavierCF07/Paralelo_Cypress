/// <reference types="cypress"/>

describe("Nueva seccion Checkbox", () => {

    it('Check uno', () => {
        cy.visit("https://demoqa.com/checkbox")
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        cy.get("#tree-node-home").should("be.visible").click()
    });

    it.only('Radio button', () => {
        cy.visit("https://demoqa.com/radio-button")
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        cy.get(".col-md-6 > :nth-child(3) > :nth-child(2)").check()
    });

})
