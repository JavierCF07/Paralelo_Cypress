/// <reference types="cypress"/>

describe("Manejo de los alias", () => {

    it('Alias uno', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.wait(1000)
        
        cy.get("#firstname").should("be.visible").as("nom")
        cy.get("#surname").should("be.visible").as("app")
        cy.get("#age").should("be.visible").as("edad")
        cy.get("#country").should("be.visible").as("ciudad")
        cy.get("#notes").should("be.visible").as("notas")
        cy.get("@nom").type("Javier")
        cy.get("@app").type("Cifuentes Funes")
        cy.get("@edad").type("25")
        cy.get("@ciudad").select("Guatemala")
        cy.get("@notas").type("Esto es una prueba")
        cy.get('[type="submit"]').should("be.visible").click()
    });
})
