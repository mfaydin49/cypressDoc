/// <reference types="Cypress" />

describe("frame test", function () {

    before(() => {
        cy.fixture('example').then(function (data) {
          
          this.data=data;
        })
        
    });
    it("My FirstTest case for iframe", function () {
      cy.visit("https://rahulshettyacademy.com/angularpractice/");

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

    });
  });
  