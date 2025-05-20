/// <reference types="cypress" />

describe('Primer test con cypress', () =>{
    it('Esto es un hola mundo desde cypress', () => {
        cy.log("Bienvenido a Cypress");
        cy.visit('https://demoqa.com/automation-practice-form')

        cy.get('#firstName').type('Javier')
        cy.wait(1000)
        cy.get('#lastName').type('Cifuentes')
        cy.wait(1000)
        cy.get('#userEmail').type('javier.cifuentes@distelsa.com.gt')
        cy.wait(1000)
        cy.get('#userNumber').type('38492031')
        cy.wait(1000)
        cy.get('#subjectsContainer').type('Demo del subject')
        cy.wait(1000)
        cy.get('#currentAddress').type('Demo de current address')
    });
})