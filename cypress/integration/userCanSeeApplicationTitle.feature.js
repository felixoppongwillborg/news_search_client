describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('contains title', () => {
    cy.get("[data-cy=title]")
      .should('contain', 'News Search')
  });
});