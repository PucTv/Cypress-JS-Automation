import LoginPage from "../../pages/LoginPage";

describe("Login Tests", () => {
  it("should show error message with invalid credentials", () => {
    LoginPage.loginAs("invalidUser@gmail.com", "invalidPassword");
    LoginPage.verifyErrorMessage();
  });
  it("should login successfully with valid credentials", () => {
    LoginPage.loginAs("shino1@gmail.com", "123456");
    LoginPage.veryfyLoginSuccess();
  });
});
