describe('provides access to admin page', () => {
    const creds = require('../fixtures/admin')
    const adminPage = require('../fixtures/adminPage')
    const userPage = require('../fixtures/userPage')
    const seats = require('../fixtures/seats')    

    it('authorize with valid credentials', () => {
        cy.visit('/admin')
        cy.get(`${adminPage.emailField}`).type(`${creds[0].email}`)
        cy.get(`${adminPage.passwordField}`).type(`${creds[0].password}`)
        cy.get(`${adminPage.submitButton}`).click()

        cy.get(`${adminPage.movieName}`).then(item => item.textContent).should('have.text', 'Логан')
        cy.get(`${adminPage.movieName}`).invoke('text').then(text => {
            cy.visit("/")
            cy.get(`${userPage.dayNav}`).click()
            cy.get(`${userPage.movieTitle}`).should('have.text', text);
            cy.get(`${userPage.movieTime}`).click()
            cy.get(`.buying-scheme__wrapper > :nth-child(${seats.row}) > :nth-child(${seats.seat})`).click()
            cy.get(`${userPage.orderButton}`).click()
            cy.get(`${userPage.ticketStatus}`).should('have.text', 'Вы выбрали билеты:')
        })
    })
})