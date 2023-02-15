beforeEach(() => {
  cy.visit('/')
})

describe('shows correct interface', () => {
  it('main page has control elements', () => {
    cy.get('h1.page-header__title').should('be.visible')
  })
  it('main page shows 7 days for ordering', () => {
    cy.get('a.page-nav__day').should('have.length',7)
  })
  it('main page shows 3 movies in poster', () => {
    cy.get('section.movie').should('have.length',3)
  })
})