describe('provides access to admin page', () => {
    const controls = require('../fixtures/adminPage')
    const creds = require('../fixtures/admin')

    it('authorize with valid credentials', () => {
        cy.visit('/admin')
        cy.get(`${controls.emailField}`).type(`${creds[0].email}`)
        cy.get(`${controls.passwordField}`).type(`${creds[0].password}`)
        cy.get(`${controls.submitButton}`).click()

        let hall = cy.get("ul.conf-step__selectors-box > :nth-child(7) > span")
        console.log(`hall = ${hall}`)
    })
})