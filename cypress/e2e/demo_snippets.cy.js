/// <reference types='cypress'/>


import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')



describe('Demo del primer snippet', () => { 
    
    it('demo uno', () => {
        let tiempo=1000
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)
    });
})