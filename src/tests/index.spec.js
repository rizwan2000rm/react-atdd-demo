const { test, expect } = require("@playwright/test");

test("The Author List", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // * Page Title
  const title = page.locator(".title");
  await expect(title).toHaveText("Authors");

  //! Getting an issue with the API call
  //! I think it takes time to fetch but test complete before the APi returns the call
  // Works when hard coded
  // Suprisingly works on loacalhost wth happened when I was using the API

  // * Authors List
  const authors = await page.locator(".author");
  const authorsCounts = await authors.evaluateAll((authors) => authors.length);
  await expect(authorsCounts).toEqual(10);
});

test("Author Details", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // * URL Redirect
  await page.locator(".author-link").first().click();
  await expect(page.url()).toBe("http://localhost:3000/1");

  // * Page Title
  const title = page.locator(".author-title");
  await expect(title).toHaveText("Leanne Graham");
});

test("Searching for author", async ({ page }) => {});
