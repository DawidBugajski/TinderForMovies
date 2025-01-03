import { test, expect } from '@playwright/test';

test('404 page redirects to home page when clicking "Return Home"', async ({
  page,
}) => {
  await page.goto('/non-existing-page');

  await expect(page.locator('.glitch')).toHaveText('404');

  const returnHomeLink = page.getByRole('link', { name: 'Return Home' });
  await returnHomeLink.click();

  await expect(page).toHaveURL('/');
});
