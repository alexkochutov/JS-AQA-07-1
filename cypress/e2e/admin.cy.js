beforeEach(() => {
    cy.visit('/admin')
  })

describe('provides access to admin page', () => {
    const controls = require('../fixtures/adminPage')
    const creds = require('../fixtures/admin')

    it('authorize with valid credentials', () => {
        cy.get(`${controls.emailField}`).type(`${creds[0].email}`)
        cy.get(`${controls.passwordField}`).type(`${creds[0].password}`)
        cy.get(`${controls.submitButton}`).click()
        cy.contains(`${creds[0].checkElement}`).should('be.visible')    
    })
    it('authorize with invalid credentials', () => {
        cy.get(`${controls.emailField}`).type(`${creds[1].email}`)
        cy.get(`${controls.passwordField}`).type(`${creds[1].password}`)
        cy.get(`${controls.submitButton}`).click()
        cy.contains(`${creds[1].checkElement}`).should('be.visible')    
    })
})