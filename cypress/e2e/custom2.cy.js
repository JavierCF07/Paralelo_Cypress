/// <reference types='cypress'/>


import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto cypress por medio de comandos personalizados', () => { 

    let tiempo=1000
    before(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)
    })

    it('nameTest', () => {
        cy.log("hola")
    });
})