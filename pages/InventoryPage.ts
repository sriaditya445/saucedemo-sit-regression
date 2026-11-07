
import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly backpackButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartLink = page.locator(
      '[data-test="shopping-cart-link"]'
    );
  }

  async addBackpackToCart() {
    await this.backpackButton.click();
  }

  async verifyCartCount() {
    await expect(
      this.page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText('1');
  }

  async openCart() {
    await this.cartLink.click();
  }



async addBikeLightToCart() {
  await this.page.locator(
    '[data-test="add-to-cart-sauce-labs-bike-light"]'
  ).click();
}

async verifyBikeLightCartCount() {
  await expect(
    this.page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('1');
}

}
