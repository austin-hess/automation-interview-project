import { chromium } from "playwright";
import { wait } from "./wait";

export async function main() {
  /**
   * Solution goes here
   */

  const browser = await chromium.launch({ headless: false });
  await browser.newPage();

  // wait - for easy debugging
  await wait(5000)

}
