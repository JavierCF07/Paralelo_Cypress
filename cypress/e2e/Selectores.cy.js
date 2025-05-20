/// <reference types="cypress"/>

require('cypress-xpath')

describe("Tipos de selectores", () => {

    it('Selector por Id', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')

        cy.get("#userName").should("be.visible").type("Javier")
        cy.get("#userEmail").should("be.visible").type("javier.cifuentes@distelsa.com.gt")
    });

    it('Selector por atributo', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')

        cy.get("[placeholder='Full Name']").should("be.visible").type("Javier Cifuentes Funes")
    });

    it('Selector por xpath', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')

        cy.xpath("//*[@id='userName']").should("be.visible").type("Javier Cifuentes")
        cy.wait(1000)
        cy.xpath("//input[@id='userEmail']").should("be.visible").type("javier.cifuentes@distelsa.com.gt")
        cy.xpath("(//textarea[@id='currentAddress'])[1]").should("be.visible").type("Ciudad")
    });

    it('Selector por contains', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(2000)
        cy.get(".custom-control-label").contains("Other").click()
    });
    
    it.only('Selector por selector', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')

        cy.get("#firstName").should("be.visible").type("Javier")
    });

})
