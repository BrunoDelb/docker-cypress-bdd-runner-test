import { When } from "cypress-cucumber-preprocessor/steps";

const url = "https://twitter.com";

When(`I open the Twitter page`, () => {
  cy.visit(url);
});
