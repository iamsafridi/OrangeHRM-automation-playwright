class Setup {
  constructor(page) {
    this.page = page;
  }
  async gotoLoginPage() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
}
module.exports = Setup;
