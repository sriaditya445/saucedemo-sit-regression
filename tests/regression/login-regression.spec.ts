
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/ LoginPage';

test.describe('SauceDemo Login Regression Tests', () => {

  test('REG_001 - Verify successful login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.login('standard_user', 'secret_sauce');
    await login.verifyLoginSuccessful();
  });

  test('REG_002 - Verify invalid password', async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.login('standard_user', 'wrong_password');

    await expect(
      page.locator('[data-test="error"]')
    ).toContainText('Username and password do not match');
  });

  test('REG_003 - Verify locked-out user', async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.login('locked_out_user', 'secret_sauce');

    await expect(
      page.locator('[data-test="error"]')
    ).toContainText('locked out');
  });

  test('REG_004 - Verify empty username and password', async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.login('', '');

    await expect(
      page.locator('[data-test="error"]')
    ).toContainText('Username is required');
  });

});
