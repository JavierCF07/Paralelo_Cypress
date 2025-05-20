import ProyectoUno_Po from '../support/pageObjects/proyectouno_PO/proyectoUno_PO.cy'
/// <reference types='cypress'/>


import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Page objects Model', () => { 

    const master= new ProyectoUno_Po()

    master.visitHome()

    Cypress.on('uncaught:exception', (errr, runnable) => {
        return false
    })

    it('Test uno', () => {
        cy.log("hola")
    });
})