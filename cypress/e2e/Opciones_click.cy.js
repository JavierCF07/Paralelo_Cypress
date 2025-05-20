/// <reference types="cypress"/>

describe("Opciones de click", () => {

    it('Click sencillo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', "OrangeHRM")
        cy.wait(1000)

        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").should("be.enabled").type("Admin")
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").should("be.enabled").type("admin123")
        cy.get(".oxd-button").click()
        cy.get(":nth-child(2) > .oxd-main-menu-item").should("be.visible").click()
        //.type("admin123").click()
    });

    it('Click Force true', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', "OrangeHRM")
        cy.wait(1000)

        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").should("be.enabled").type("Admin")
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").should("be.enabled").type("admin123")
        cy.get(".oxd-button").click()
        cy.get(":nth-child(2) > .oxd-main-menu-item").should("be.visible").click({force: true})
    });
    
    it.only('Click por coordenadas (x,y)', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', "OrangeHRM")
        cy.wait(1000)

        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").should("be.enabled").type("Admin")
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").should("be.enabled").type("admin123")
        cy.get(".oxd-button").click()
        cy.wait(1500)
        cy.get(".oxd-topbar-header-title").should("be.visible").click(50,10)
        cy.get(".oxd-topbar-header-title").should("be.visible").click(80,10)
    });

})
