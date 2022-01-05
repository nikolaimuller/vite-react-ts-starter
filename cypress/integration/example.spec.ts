describe('Example tests', () => {
  it('Home page includes title and heading', () => {
    cy.visit('/')
    cy.title().should('include', 'Vite App')
    cy.contains('h1', 'Hello Vite React!')
  })
})
