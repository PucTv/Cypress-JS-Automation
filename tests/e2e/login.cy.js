import LoginPage from "../../pages/LoginPage";
import * as CF from "../../pages/common";

describe("Login Tests", () => {
  it("should show error message with invalid credentials", () => {
    LoginPage.loginAs("invalidUser@gmail.com", "invalidPassword");
    LoginPage.verifyErrorMessage();
  });
  it("should login successfully with valid credentials", () => {
    CF.readJsonFile("data").then((data) => {
      LoginPage.loginAs(data.username, data.password);
      LoginPage.veryfyLoginSuccess();
    });
  });
});
