describe('blog', () => {
  it('should be accessible from the blog page', () => {
    cy.visit('/blog')
      .waitForRouteChange()
      .getByText(/blog/i)
      .click()
      .waitForRouteChange()
      .assertRoute('/blog')
	})
	it('should be accessible from the bienvenue sur mon blog page', () => {
    cy.visit('/blog/2019-02-20-bienvenue-sur-mon-blog')
      .waitForRouteChange()
      .getByText(/Bienvenue sur mon blog/i)
      .click()
      .waitForRouteChange()
      .assertRoute('/blog/2019-02-20-bienvenue-sur-mon-blog')
	})
})
