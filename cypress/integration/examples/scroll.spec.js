describe("Scroll on the Page", () => {
  it("should scroll down and up on the page", () => {
    cy.visit("https://devexpress.github.io/testcafe/example/");
    cy.wait(1000);
    cy.get("[data-testid=submit-button]").scrollIntoView();
    cy.wait(1000);
    cy.get("h1").scrollIntoView();
  });
});
