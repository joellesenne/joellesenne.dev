describe('tags', () => {
  it('should be accessible from the tags page', () => {
    cy.visit('/tags')
      .waitForRouteChange()
      .getByText(/Tags/i)
      .click()
      .waitForRouteChange()
      .assertRoute('/tags')
	})
})
