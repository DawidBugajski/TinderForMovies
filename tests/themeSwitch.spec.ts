import { test, expect } from '@playwright/test';

test('Toggle between dark and light mode', async ({ page }) => {
  await page.goto('/');

  const initialTheme = await page.locator('html').getAttribute('class');

  const toggleButton = page.getByRole('button', {
    name: /Switch to light mode|Switch to dark mode/i,
  });

  await toggleButton.click();

  const newTheme = await page.locator('html').getAttribute('class');

  expect(newTheme).not.toBe(initialTheme);

  await toggleButton.click();

  const revertedTheme = await page.locator('html').getAttribute('class');

  expect(revertedTheme).toBe(initialTheme);
});
