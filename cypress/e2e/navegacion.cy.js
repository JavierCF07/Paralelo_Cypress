/// <reference types='cypress'/>


import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Navegación entre las paginas', () => { 

    it('Back, forward', () => {
        let tiempo=1000
        cy.visit('https://www.max.com.gt/')
        cy.title().should('eq','MAX')
        cy.wait(tiempo)

        cy.get('[data-testid="secondary-navbar-item-desktop-brands"]').click({force:true})

        cy.go("back") 
        cy.wait(tiempo)
        cy.go("forward")
    });
})