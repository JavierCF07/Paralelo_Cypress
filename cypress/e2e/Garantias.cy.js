/// <reference types="cypress"/>

require('cypress-xpath')

describe("Click garantia", () => {

    it('Click boton garantia', () => {
        cy.visit("https://www.qa.kosmos.max.com.gt/huawei-nova-11i-liberado-negro")
        cy.wait(100)
        cy.xpath("(//button[@id='add-to-cart-button'])[3]").click({force: true})
    });

})
