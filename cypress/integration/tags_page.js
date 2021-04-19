describe('The allTags Page', () => {
  it('successfully loads page allTags', () => {
    cy.visit('/tags')
  })
  it('Button page allCategories "a"', () => {
    cy.visit('/categories')
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
