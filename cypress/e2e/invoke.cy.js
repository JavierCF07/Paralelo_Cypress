/// <reference types="cypress"/>

describe("Manejo de invoke", () => {

    it('Manejo de invoke', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.wait(1000)

        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")

        cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")

        cy.get('[for="firstname"]').should("be.visible").invoke("text").as("titulo_name")

        cy.wait(1500)
        cy.get("@titulo_name").should("contain","First name:").then(()=>{
            cy.get("#firstname").type("Javier")
        })
    });

    it('Manejo de invoke estilos', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.wait(1000)

        cy.get('[for="firstname"]').invoke("attr","style","color: blue; font-size: 50px;")
    });

    it('Invoke ocultar y mostrar', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.wait(1000)

        cy.get('[for="firstname"], #firstname').invoke("hide")
        cy.wait(1000)
        cy.get('[for="firstname"], #firstname').invoke("show")
        //cy.get("#firstname").invoke("hide")
    });

    it.only('Reto invoke', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.get('[for="surname"], #surname').invoke("hide")
        cy.title().should("eq", "Input Validation")
        cy.wait(1000)

        cy.get("#firstname").should("be.visible").type("Javier").then(()=>{
            cy.get('[for="surname"], #surname').invoke("show")
            cy.get("#surname").should("be.visible").type("Cifuentes")
        })
        
        //cy.get("#firstname").invoke("hide")
    });
})
