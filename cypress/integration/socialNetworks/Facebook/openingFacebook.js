import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://facebook.com";

Given(`I open the Facebook page`, () => {
  cy.visit(url);
});

