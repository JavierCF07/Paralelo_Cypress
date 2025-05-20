/// <reference types="cypress"/>

import 'cypress-file-upload'
import 'cypress-real-events';

require("@4tw/cypress-drag-drop")
describe("Cypress eventos mouse", () => {

    it('Drag and drop', () => {
        let  tiempo = 1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq', 'The Internet')
        cy.wait(1500)
        cy.get("#column-a").drag("#column-b", {force:true})

    });

    it('Drag and drop 2', () => {
        let  tiempo = 1000
        cy.visit("https://seleniumbase.io/other/drag_and_drop")
        cy.title().should('eq', 'Drag and Drop')
        cy.wait(1500)
        cy.get("#drag1").drag("#div1", {force:true})

    });

    it.only('Drag and drop 2', () => {
        let  tiempo = 1000
        cy.visit("https://seleniumbase.io/other/drag_and_drop")
        cy.title().should('eq', 'Drag and Drop')
        cy.wait(1500)
        cy.get("#drag1").drag("#div1", {force:true})

    });

})
