import path from "path";

// Element actions
export function clickElement(element, timeout = 10000) {
  cy.xpath(element, { timeout }).should("be.visible").click();
}

export function fillInput(element, value, timeout = 10000) {
  cy.xpath(element, { timeout }).should("be.visible").type(value);
}

export function clearInput(element, timeout = 10000) {
  cy.xpath(element, { timeout }).should("be.visible").clear();
}

export function selectDropdownOption(element, option, timeout = 10000) {
  cy.xpath(element, { timeout }).should("be.visible").select(option);
}

// Element assertions
export function verifyElementVisible(element, timeout = 10000) {
  cy.xpath(element, { timeout }).should("be.visible");
}

export function verifyElementNotVisible(element, timeout = 10000) {
  cy.xpath(element, { timeout }).should("not.exist");
}

export function verifyElementContainsText(element, text, timeout = 10000) {
  cy.xpath(element, { timeout }).should("be.visible").and("contain.text", text);
}

export function verifyElementNotContainsText(element, text, timeout = 10000) {
  cy.xpath(element, { timeout })
    .should("be.visible")
    .and("not.contain.text", text);
}

// File handling
export function readJsonFile(fileName) {
  const absolutePath = path.join("resources/testdata", `${fileName}.json`);
  return cy.readFile(absolutePath);
}

export function writeJsonFile(fileName, data) {
  const absolutePath = path.join("resources/testdata", `${fileName}.json`);
  cy.writeFile(absolutePath, data);
}
