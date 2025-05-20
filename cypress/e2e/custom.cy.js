/// <reference types='cypress'/>


import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Comandos personalizados', () => { 

    let tiempo=1000
    before(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)
    })

    it.only('Demo uno', () => {
        cy.Texto_visible("#userName","Javier",tiempo)
        cy.Texto_visible("#userEmail","jcifunes@gmail.com",tiempo)
        cy.Texto_visible_xpath("//textarea[@id='currentAddress']","Prueba de current Address",tiempo)
        cy.Texto_visible_xpath("//textarea[@id='permanentAddress']","Prueba de permanent Address",tiempo)

        cy.click_button("#submit")
    });

    it('Demo dos por bloque', () => {
        cy.Formulario_textBox("Javier","jcifunes@gmail.com", "Prueba de current Address", "Prueba de permanent Address", 1000)
    });
})