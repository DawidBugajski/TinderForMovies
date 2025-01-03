import { test, expect } from '@playwright/test';

test('Movie navigation works correctly', async ({ page }) => {
  await page.goto('/');

  const movieTitle = page.locator('h1');
  const initialTitle = await movieTitle.textContent();

  const likeButton = page.locator('[data-testid="like-button"]');

  await likeButton.click();

  const newTitle = await movieTitle.textContent();

  expect(newTitle).not.toBe(initialTitle);
});
