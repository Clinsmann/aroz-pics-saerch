import { test, expect } from "@playwright/test";
import { DEFAULT_PAGE_SIZE } from "../src/pages/SearchUnsplashPhotos/hooks/useFetchPhotos";

test("Unsplash search functionality", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  /*define the selectors*/
  const loader = page.locator(':text("loading")');
  const notFound = page.locator(':text("No results found")');
  const emptySearchTerm = page.locator(':text("Please enter a search term")');
  const nextButton = page.locator('button:text("next")');
  const previousButton = page.locator('button:text("previous")');
  const searchButton = page.locator('button:text("search")');
  const sortSelect = page.locator('select[name="sort"]');
  const colorSelect = page.locator('select[name="color"]');
  const searchInput = page.locator('input[name="search"]');
  const results = page.locator('[data-testid="search-results"]');
  const images = page.locator('[data-testid="search-results"] img');

  // check the initial state of the page and the elements that are supposed to be present are present
  await expect(page.locator("h1")).toHaveText("Unsplash Search");
  await expect(searchButton).toBeVisible();
  await expect(colorSelect).toBeVisible();
  await expect(colorSelect).toHaveValue("Any");
  await expect(sortSelect).toBeVisible();
  await expect(sortSelect).toHaveValue("relevant");
  await expect(searchInput).toBeVisible();
  await expect(emptySearchTerm).toBeVisible();

  // type in the input field and click search
  await searchInput.fill("cats");
  await searchInput.press("Enter");
  await loader.waitFor({ state: "visible" });
  await loader.waitFor({ state: "hidden" });
  await page.waitForLoadState("networkidle");

  // When the result is loaded, check images, scroll down and and check pagination buttons
  await expect(results).toBeVisible();
  await expect(images).toHaveCount(DEFAULT_PAGE_SIZE);
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await expect(previousButton).toBeVisible();
  await expect(previousButton).toBeDisabled();
  await expect(nextButton).toBeVisible();
  await expect(nextButton).toBeEnabled();

  // click the next button and check if the previous button is enabled
  await nextButton.click();
  await loader.waitFor({ state: "visible" });
  await loader.waitFor({ state: "hidden" });
  await expect(previousButton).toBeEnabled();

  // search for a term that will not have results and check if the not found message is displayed
  await searchInput.fill("penguin1234567890");
  await searchButton.click();
  await expect(results).not.toBeVisible();
  await expect(notFound).toBeVisible();
  await expect(images).toHaveCount(0);

  // search for a new term, use the color and sort filters and check if the results are displayed
  await searchInput.fill("elephants");
  await searchButton.click();
  await expect(results).toBeVisible();
  await colorSelect.selectOption("black");
  await expect(colorSelect).toHaveValue("black");
  await sortSelect.selectOption("latest");
  await expect(sortSelect).toHaveValue("latest");
  await page.waitForLoadState("networkidle");
  await expect(results).toBeVisible();
  await expect(images).toHaveCount(DEFAULT_PAGE_SIZE);
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await expect(nextButton).toBeEnabled();
});
