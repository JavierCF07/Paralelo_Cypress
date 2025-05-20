/// <reference types="cypress"/>

require('cypress-plugin-tab')

describe("Primer reto", () => {

    it('Buscar en la tabla', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        //Agregando campo
        cy.get("#addNewRecordButton").should("be.visible").click()

        cy.get("#firstName").should("be.visible").type("Javier").tab()
        .type("Cifuentes").tab().type("javier.cifuentes@distelsa.com.gt").tab()
        .type("25").tab().type("1000").tab().type("Sistemas")

        cy.get("#submit").should("be.visible").click()

        cy.get("#searchBox").should("be.visible").type("Javier")

        //editar un campo
        cy.get("#edit-record-4").should("be.visible").click()
        cy.wait(1000)
        
        cy.get("#age").should("be.visible").clear().type("40").tab()
        .clear().type("2500")

        cy.get("#submit").should("be.visible").click()

        //eliminar un registro
        cy.get("#delete-record-4").should("be.visible").click() 
    });
})
