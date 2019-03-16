describe('a-propos', () => {
  it('should be accessible from the à propos page', () => {
    cy.visit('/a-propos')
      .waitForRouteChange()
      .getByText(/A propos/i)
      .click()
      .waitForRouteChange()
      .assertRoute('/a-propos')
	})
})
