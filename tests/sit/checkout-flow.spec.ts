
import { test } from '@playwright/test';
import { LoginPage } from '../../pages/ LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('SauceDemo SIT - Checkout Integration', () => {

  test('SIT_001 - Complete end-to-end purchase workflow', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    // Step 1: Login
    await login.open();
    await login.login('standard_user', 'secret_sauce');
    await login.verifyLoginSuccessful();

    // Step 2: Add product
    await inventory.addBackpackToCart();
    await inventory.verifyCartCount();

    // Step 3: Verify cart
    await inventory.openCart();
    await cart.verifyBackpack();

    // Step 4: Checkout
    await cart.proceedToCheckout();

    // Step 5: Enter customer information
    await checkout.enterCustomerDetails();

    // Step 6: Complete order
    await checkout.completeOrder();

    // Step 7: Verify confirmation
    await checkout.verifyOrderConfirmation();

  });

});
