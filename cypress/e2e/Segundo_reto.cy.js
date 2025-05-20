/// <reference types="cypress"/>

require('cypress-plugin-tab')

describe("Segundo reto", () => {

    it('Probando la aplicacion', () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        //buscando
        cy.get("#searchbox").should("be.visible").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()

        //agregando
        cy.get("#add").should("be.visible").click()
        cy.get("#name").should("be.visible").type("cypress")
        cy.get("#introduced").should("be.visible").type("2024-03-15").tab().type("2025-03-15")
        
        //combo
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16")
        cy.get(".primary").should("be.visible").click()

        cy.get("#searchbox").should("be.visible").type("cypress").wait(1500)
        cy.get("#searchsubmit").should("be.visible").click()


    });

})
