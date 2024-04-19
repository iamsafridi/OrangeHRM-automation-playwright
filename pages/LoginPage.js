class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_txtbox = page.locator("[name='username']");
    this.password_txtbox = page.locator("[name='password']");
    this.loginBtn = page.locator("[type='submit']");
    this.errorMessageElement = page.locator(
      ".oxd-text.oxd-text--p.oxd-alert-content-text"
    );
    this.profilePic = page.locator(".oxd-userdropdown-img");
    this.imgElements = page.locator(".employee-image");
  }

  async login(username, password) {
    await this.username_txtbox.fill(username);
    await this.password_txtbox.fill(password);
    await this.loginBtn.click();
  }
}
module.exports = LoginPage;
