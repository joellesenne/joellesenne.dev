describe('categories', () => {
  it('should be accessible from the categories page', () => {
    cy.visit('/categories')
      .waitForRouteChange()
      .getByText(/Categories/i)
      .click()
      .waitForRouteChange()
      .assertRoute('/categories')
	})
})
