const { test, expect } = require("@playwright/test");
const Setup = require("../pages/Setup");
const LoginPage = require("../pages/LoginPage");

test("Admin cannot successfully login with invalid inputs", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const setup = new Setup(page);
  await setup.gotoLoginPage();
  await loginPage.login("invalid", "invalid");
  await expect(loginPage.errorMessageElement).toHaveText("Invalid credentials");
});

test("Admin can successfully login with valid inputs", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const setup = new Setup(page);
  await setup.gotoLoginPage();
  await loginPage.login("admin", "admin123");
  await expect(loginPage.profilePic).toBeVisible();
});

test("Admin can create new user successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const setup = new Setup(page);
  await setup.gotoLoginPage();
  await loginPage.login("admin", "admin123");
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("button", { name: " Add" }).click();
  await page.locator("form span").click();
  await page.getByPlaceholder("First Name").fill("test");
  await page.getByPlaceholder("Last Name").fill("user");
  await page
    .locator(
      "div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input"
    )
    .fill("testuser13");
  await page.locator('input[type="password"]').first().fill("test123");
  await page.locator('input[type="password"]').nth(1).fill("test123");
  await page.getByRole("button", { name: "Save" }).click();
  // const imgElement = await page.locator(".employee-image");
  await expect(loginPage.imgElements).toBeVisible();
});
