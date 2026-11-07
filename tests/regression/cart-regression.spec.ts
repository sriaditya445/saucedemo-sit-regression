
import { test } from '@playwright/test';
import { LoginPage } from '../../pages/ LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('SauceDemo Cart Regression Tests', () => {

  test('REG_005 - Verify product can be added to cart', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.open();
    await login.login('standard_user', 'secret_sauce');
    await login.verifyLoginSuccessful();

    await inventory.addBikeLightToCart();
    await inventory.verifyBikeLightCartCount();

    await inventory.openCart();

    await page.locator('[data-test="inventory-item-name"]')
      .getByText('Sauce Labs Bike Light')
      .waitFor();
  });

  test('REG_006 - Verify product can be removed from cart', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.open();
    await login.login('standard_user', 'secret_sauce');
    await login.verifyLoginSuccessful();

    await inventory.addBackpackToCart();
    await inventory.openCart();

    await cart.verifyBackpack();
    await cart.removeBackpack();
    await cart.verifyCartIsEmpty();
  });

});
