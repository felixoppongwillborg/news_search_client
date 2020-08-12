describe('User can search for news', () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://newsapi.org/v2/everything?q=biden&from=2020-07-12&sortBy=publishedAt&apiKey=",
      response: "fixture:biden.json"
    });
    cy.visit("/")
    cy.get("input").type("biden")
    cy.get("button").click()
  });
  
  it("user can see first article title", () => {
    cy.contains("US: Harris under scrutiny for tough-on-crime prosecutor past")
  })
})