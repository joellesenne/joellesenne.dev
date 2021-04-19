describe('The Home Page', () => {
  it('Link page Home "a"', () => {
    cy.visit('/')
    cy.contains('a').click({ force: true })
  })
  it('Link page allProjects "a"', () => {
    cy.visit('/projets')
    cy.contains('a').click({ force: true })
  })
  it('Link page allBlog "a"', () => {
    cy.visit('/blog')
    cy.contains('a').click({ force: true })
  })
  it('Link page About "a"', () => {
    cy.visit('/a-propos')
    cy.contains('a').click({ force: true })
  })
})
