describe('The About Page', function() {
  it('successfully loads page About', function() {
    cy.visit('/about')
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
    cy.visit('https://joellesenne.xyz')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link footer Github repository "a"', () => {
    cy.visit('https://github.com/joellesenne/joellesenne.xyz')
    cy.contains('a').click({ force: true })
  })
  it('Extern: Link footer Inspiration "a"', () => {
    cy.visit('https://www.lekoarts.de/')
    cy.contains('a').click({ force: true })
  })
})
