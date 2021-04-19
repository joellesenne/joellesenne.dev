describe('The Home Page', () => {
  it('successfully loads page Home', () => {
    cy.visit('/')
  })
  it('Button page allProjects "a"', () => {
    cy.visit('/projets')
    cy.contains('a').click({ force: true })
  })
  it('Button page allBlog "a"', () => {
    cy.visit('/blog')
    cy.contains('a').click({ force: true })
  })
  it('Button page About "a"', () => {
    cy.visit('/a-propos')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link contact Dribble "a"', () => {
    cy.visit('https://dribbble.com/joellesenne')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link contact Github "a"', () => {
    cy.visit('/https://github.com/joellesenne')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link contact Codepen "a"', () => {
    cy.visit('https://codepen.io/joellesenne')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link contact Twitter "a"', () => {
    cy.visit('https://twitter.com/joellesenne')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link footer webSite "a"', () => {
    cy.visit('https://joellesenne.dev')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link footer Github repository "a"', () => {
    cy.visit('https://github.com/joellesenne/joellesenne.dev')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link footer Inspiration "a"', () => {
    cy.visit('https://www.lekoarts.de/')
    cy.contains('a').click({ force: true })
  })
})
