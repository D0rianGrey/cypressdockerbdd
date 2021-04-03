class BasePage {
  static loadHomePage() {
    cy.visit("https://devexpress.github.io/testcafe/example/");
  }

  static wait(number) {
    cy.wait(number);
  }
}

class HomePage extends BasePage {
  static scrollToBottom() {
    cy.get("[data-testid=submit-button]").scrollIntoView();
  }

  static scrollToTop() {
    cy.get("h1").scrollIntoView();
  }
}

describe("Abstraction with Classes", () => {
  before(function () {
    //runs before all tests inside describe
    //setup test data or test context
    // seed or reset the database
    HomePage.loadHomePage();
  });

  after(function () {
    //runs after all tests inside describe block are gone
    //test clean up
    //clean cookies or localStorage
  });

  beforeEach(function () {
    //runs before each it block in the describe
  });

  afterEach(function () {
    //runs after each it block in the describe
  });

  it("1st IT", () => {
    HomePage.loadHomePage();
    HomePage.scrollToBottom();
    HomePage.wait(1000);
    HomePage.scrollToTop();
    HomePage.wait(1000);
  });

  it.only("2nd IT", () => {
    HomePage.loadHomePage();
    HomePage.scrollToBottom();
    HomePage.wait(1000);
    HomePage.scrollToTop();
    HomePage.wait(1000);
  });
});
