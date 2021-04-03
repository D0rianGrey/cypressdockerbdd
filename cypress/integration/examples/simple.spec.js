/// <reference types="cypress" />

describe("Browser Actions", () => {
  it("should load books website", () => {
    cy.visit("http://books.toscrape.com/index.html", { timeout: 10000 });
    cy.url().should("include", "index.html");
    cy.log("Before Reload");
    cy.reload();
    cy.log("After Reload");
  });

  it("should click on Travel category", () => {
    cy.get(".nav > :nth-child(1) > ul > :nth-child(1) > a").click();
    cy.get("h1").contains("Travel");
  });

  it("Challenge", () => {
    cy.get(":nth-child(22) > a").click();
    cy.get(
      ":nth-child(4) > .product_pod > .image_container > a > .thumbnail",
    ).click();
    cy.xpath("//div[@class='col-sm-6 product_main']/p[1]").contains("£23.88");
  });
});
