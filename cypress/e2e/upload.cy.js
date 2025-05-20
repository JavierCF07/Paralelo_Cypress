/// <reference types="cypress"/>

import 'cypress-file-upload'
describe("Upload image", () => {

    it('Cargando imagenes', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        const ruta = 'image1.jpg'

        cy.get("[type='file']").attachFile(ruta)
        cy.wait(2000)


    });

})
