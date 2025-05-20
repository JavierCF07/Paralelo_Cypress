const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('Abrir el navegador Chrome y dirigirme a Demoqa.com',()=> {
  cy.visit('https://demoqa.com/text-box')
})

When('Validar el nombre de la pagina', ()=>{
  cy.title().should('eq','DEMOQA')
})

Then('Cargando el nombre {word}', (name)=>{
  cy.get('#userName').should("be.visible").type(name)
})

Then('Cargando el email {string}',(email)=>{
  cy.get('#userEmail').should("be.visible").type(email)
})

Then('Cargando la direccion uno {string}',(dir1)=>{
  cy.get('#currentAddress').should("be.visible").type(dir1)
})

Then('Cargando la direccion dos {string}',(dir2)=>{
  cy.get('#permanentAddress').should("be.visible").type(dir2)
})

Then('Presionando el boton submit',()=>{
  cy.get('#submit').should("be.visible").click()
})

