import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Verify movie is added to likedMovies after clicking like', async ({
  page,
}) => {
  const likeButton = page.locator('[data-testid="like-button"]');

  const initialState = await page.evaluate(() => {
    const state = JSON.parse(localStorage.getItem('moviesState') || '{}');
    return {
      likedMovies: state.likedMovies || [],
      dislikedMovies: state.dislikedMovies || [],
    };
  });
  console.log('Initial likedMovies:', initialState.likedMovies);

  const initialLikedMoviesLength = initialState.likedMovies?.length || 0;

  await likeButton.click();

  const stateAfterLike = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('moviesState') || '{}')
  );
  console.log('LikedMovies after click:', stateAfterLike.likedMovies);

  const likedMoviesLengthAfterClick = stateAfterLike.likedMovies?.length || 0;

  expect(likedMoviesLengthAfterClick).toBe(initialLikedMoviesLength + 1);
});

test('Verify movie is added to dislikedMovies after clicking dislike', async ({
  page,
}) => {
  const dislikeButton = page.locator('[data-testid="dislike-button"]');

  const initialState = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('moviesState') || '{}')
  );
  console.log('Initial dislikedMovies:', initialState.dislikedMovies);

  const initialDislikedMoviesLength = initialState.dislikedMovies?.length || 0;

  await dislikeButton.click();

  const stateAfterDislike = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('moviesState') || '{}')
  );
  console.log('DislikedMovies after click:', stateAfterDislike.dislikedMovies);

  const dislikedMoviesLengthAfterClick =
    stateAfterDislike.dislikedMovies?.length || 0;

  expect(dislikedMoviesLengthAfterClick).toBe(initialDislikedMoviesLength + 1);
});
