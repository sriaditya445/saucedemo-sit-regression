
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async enterCustomerDetails() {
    await this.firstName.fill('Aditya');
    await this.lastName.fill('Tester');
    await this.postalCode.fill('533101');
    await this.continueButton.click();
  }

  async completeOrder() {
    await this.finishButton.click();
  }

  async verifyOrderConfirmation() {
    await expect(
      this.page.locator('[data-test="complete-header"]')
    ).toHaveText('Thank you for your order!');
  }
}
