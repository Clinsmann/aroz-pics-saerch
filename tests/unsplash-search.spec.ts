import { test, expect } from "@playwright/test";

test("Unsplash search functionality", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // await expect(page.locator(":text('hello world')")).toBeVisible();

  const colorSelect = page.locator('select[name="color"]');

  //click select and choose green  and check if green is selected
  await expect(colorSelect).toBeVisible();
  await expect(colorSelect).toHaveValue("green");

  //
});
