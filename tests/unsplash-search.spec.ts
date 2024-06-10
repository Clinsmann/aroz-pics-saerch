import { test, expect } from "@playwright/test";
import { DEFAULT_PAGE_SIZE } from "../src/pages/SearchUnsplashPhotos/hooks/useFetchPhotos";

test("Unsplash search functionality", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.locator(":text('hello world')")).toBeVisible();

});
