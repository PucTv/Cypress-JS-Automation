import "cypress-xpath";
const baseUrl = Cypress.config("baseUrl");

beforeEach(() => {
  cy.log("--- Start test ---");
  cy.visit(baseUrl);
});
