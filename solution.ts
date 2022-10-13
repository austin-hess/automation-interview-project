import { chromium } from "playwright";

export async function main() {
  /**
   * Solution goes here
   */

  const browser = await chromium.launch({ headless: false });
  await browser.newPage();
}
