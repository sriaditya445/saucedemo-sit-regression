
import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator(
      '[data-test="checkout"]'
    );
  }

  
async verifyBackpack() {
  await expect(
    this.page.locator('[data-test="inventory-item-name"]')
      .filter({ hasText: 'Sauce Labs Backpack' })
  ).toHaveText('Sauce Labs Backpack');
}


  async proceedToCheckout() {
    await this.checkoutButton.click();
  }


async removeBackpack() {
  await this.page.locator(
    '[data-test="remove-sauce-labs-backpack"]'
  ).click();
}

async verifyCartIsEmpty() {
  await expect(
    this.page.locator('[data-test="inventory-item"]')
  ).toHaveCount(0);
}

}
