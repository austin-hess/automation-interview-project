import { chromium } from "playwright";
import { wait } from "./wait";

export async function main() {
  /**
   * Solution goes here
   */

  const browser = await chromium.launch({ headless: false });
  await browser.newPage();

  // wait - for easy debugging
  wait(5000)

}
