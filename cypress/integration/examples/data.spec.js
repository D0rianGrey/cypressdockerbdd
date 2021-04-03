describe("Write / Read Data to JSON / Text file", () => {
  it("should write into JSON", () => {
    cy.writeFile("log.json", { name: "Eugene", age: 29 });
  });

  it("should write data to the file", () => {
    cy.writeFile("log.txt", "Hello World");
  });

  it("should read and verify data from JSON file", () => {
    cy.readFile("log.json").its("age").should("eq", 29);
  });

  it("should read and verify data from the txt file", () => {
    cy.readFile("log.txt").should("eq", "Hello World");
  });

  it.only("should read and verify browser document content", () => {
    cy.visit("http://www.example.com");
    cy.wait(2000);
    cy.document().its("contentType").should("eq", "text/html");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });
});
