describe('The About Page', () => {
  it('successfully loads page About', () => {
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
