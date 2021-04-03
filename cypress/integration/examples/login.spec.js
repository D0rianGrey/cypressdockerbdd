/// <reference types="cypress" />

describe("Working with inputs", () => {
  it("should override the current time", () => {
    const date = new Date(2020, 3, 10).getTime(); // return a timestamp
    cy.clock(date);
    cy.log(date);
  });

  it("should fill username", () => {
    cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 });
    cy.clearCookies({ log: true });
    cy.clearLocalStorage("your item", { log: true });
    cy.title().should('include', 'Zero - Log in');

    cy.get("#user_login").as("username");
    cy.get("@username").clear();
    cy.get("@username").type("Some invalid name");
  });

  it("should fill password", () => {
    cy.get("#user_password").as("password");
    cy.get("@password").clear();
    cy.get("@password").type("Some invalid password");
  });

  it("should mark checkbox", () => {
    cy.get("#user_remember_me").click();
  });

  it("should submit login form", () => {
    cy.get(".btn").click();
  });

  it("should display error message", () => {
    cy.get(".alert")
      .should("be.visible")
      .and("contain", "Login and/or password are wrong.");
  });
});
