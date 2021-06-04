import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://facebook.com";

Given(`I open the Facebook page`, () => {
  cy.visit(url);
});

Then(`The title is Facebook`, () => {
  cy.title().should("include", "Facebook");
});
