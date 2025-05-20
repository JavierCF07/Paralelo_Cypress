/// <reference types="cypress"/>

describe("Ejemplo de Type pageUp, pageDown", () => {

    it.only('type primero', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get("#userName").type('{pageUp}')
        cy.wait(2000)

    });
    it('type pageUp', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get("#userName").type('{pageUp}')
        cy.wait(2000)

    });
    it('type pageUp', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get("#userName").type('{pageUp}')
        cy.wait(2000)

    });

    it('type down', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get("#userName").type('{pageDown}')
        cy.wait(2000)

    });
    it('type down', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get("#userName").type('{pageDown}')
        cy.wait(2000)

    });
    it('type down', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get("#userName").type('{pageDown}')
        cy.wait(2000)

    });
    it('type down', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get("#userName").type('{pageDown}')
        cy.wait(2000)

    });
    it.only('type ultimo', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get("#userName").type('{pageDown}')
        cy.wait(2000)

    });

})
