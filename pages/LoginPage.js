import loginLocator from "../resources/locators/login.locator";

class LoginPage {
  goToLoginPage() {
    cy.xpath(loginLocator.btn_menu_login, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  fillUsername(username) {
    cy.xpath(loginLocator.txt_username_input, { timeout: 10000 })
      .should("be.visible")
      .type(username);
  }

  fillPassword(password) {
    cy.xpath(loginLocator.txt_password_input, { timeout: 10000 })
      .should("be.visible")
      .type(password);
  }

  submit() {
    cy.xpath(loginLocator.btn_login_button, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  veryfyLoginSuccess() {
    cy.xpath(loginLocator.btn_menu_login, { timeout: 10000 }).should(
      "not.exist"
    );
  }

  verifyErrorMessage() {
    cy.xpath(loginLocator.txt_error_messeges, { timeout: 10000 }).should(
      "be.visible"
    );
  }

  loginAs(username, password) {
    this.goToLoginPage();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();
