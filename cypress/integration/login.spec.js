/// <reference types="cypress" />

describe("Login test case", () => {
  it("should display error when credentials are incorrect", () => {
    cy.visit("/");
    cy.get("[data-cy=sign-in-nav]").click();
    cy.get("[data-cy=email-input]").click().type("commit@studio.com");
    cy.get('[data-cy="password-input"]').type("password wrong{enter}");
    cy.contains("li", "email or password is invalid");
  });
  it.only("should login", () => {
    cy.login();
  });
});
