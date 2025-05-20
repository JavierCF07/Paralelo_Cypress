/// <reference types='cypress'/>


import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto de la función Hooks', () => { 

    let tiempo=1000
    before(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(tiempo)
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type("Admin")
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type("admin123")
        cy.get(".oxd-button").should("be.visible").click({force:true})
    })

    after(()=>{
        cy.get(".oxd-userdropdown-name").should("be.visible").click()
        cy.get(":nth-child(4) > .oxd-userdropdown-link").should("be.visible").click({force:true})
    })

    it('test uno', () => {
        cy.get(":nth-child(8) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.wait(tiempo)
    });

    it('test dos', () => {
        cy.get(":nth-child(4) > .oxd-main-menu-item > .oxd-text'").should("be.visible").click()
        cy.wait(tiempo)
    });

    it('test tres', () => {
        cy.get(":nth-child(11) > .oxd-main-menu-item > .oxd-text'").should("be.visible").click()
        cy.wait(tiempo)
    });
    
})