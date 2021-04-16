/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

describe("frame test", function () {
  it("My FirstTest case for iframe", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();

    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2);
  });
});
