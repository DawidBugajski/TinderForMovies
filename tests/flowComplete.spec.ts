import { test, expect } from '@playwright/test';

test('Complete flow and verify reset clears state and redirects to home', async ({
  page,
}) => {
  await page.goto('/');

  while (true) {
    const likeButton = page.locator('[data-testid="like-button"]');
    const dislikeButton = page.locator('[data-testid="dislike-button"]');

    if (!(await likeButton.isVisible()) && !(await dislikeButton.isVisible())) {
      break;
    }

    await ((await likeButton.isVisible()) ? likeButton : dislikeButton).click();
  }

  await expect(page.locator('h1')).toHaveText('You have reviewed all movies!');

  const modifiedState = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('moviesState') || '{}')
  );

  expect(
    modifiedState.likedMovies.length + modifiedState.dislikedMovies.length
  ).toBeGreaterThan(0);

  const resetButton = page.getByRole('button', { name: /reset/i });
  await resetButton.click();

  await expect(page).toHaveURL('/');

  const resetState = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('moviesState') || '{}')
  );

  expect(resetState).toEqual({
    movies: modifiedState.movies,
    likedMovies: [],
    dislikedMovies: [],
    currentIndex: 0,
  });
});
