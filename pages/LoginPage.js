import * as CF from "./common";
import loginLocator from "../resources/locators/login.locator";

class LoginPage {
  goToLoginPage() {
    CF.clickElement(loginLocator.btn_menu_login);
  }

  fillUsername(username) {
    CF.fillInput(loginLocator.txt_username_input, username);
  }

  fillPassword(password) {
    CF.fillInput(loginLocator.txt_password_input, password);
  }

  submit() {
    CF.clickElement(loginLocator.btn_login_button);
  }

  veryfyLoginSuccess() {
    CF.verifyElementNotVisible(loginLocator.btn_menu_login);
  }

  verifyErrorMessage() {
    CF.verifyElementVisible(loginLocator.txt_error_messeges);
  }

  loginAs(username, password) {
    this.goToLoginPage();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();
