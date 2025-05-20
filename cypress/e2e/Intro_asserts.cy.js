/// <reference types="cypress"/>

describe("Introducción a los asserts", () => {

    it('Demo de los asserts', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").type("Javier")
        cy.get("#lastName").should("be.visible").type("Cifuentes")
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("javier.cifuentes@distelsa.com.gt")
    });

})
