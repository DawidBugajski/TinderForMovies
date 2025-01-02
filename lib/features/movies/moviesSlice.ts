import { createSlice } from '@reduxjs/toolkit';
import { MOCK_MOVIES } from '@/lib/constans/mockMovies';
import { MovieState } from '@/types';

const initialState: MovieState = {
  movies: MOCK_MOVIES,
  likedMovies: [],
  dislikedMovies: [],
  currentIndex: 0,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    likeMovie: (state) => {
      const currentMovie = state.movies[state.currentIndex];
      if (currentMovie) {
        state.likedMovies.push(currentMovie);
        state.currentIndex += 1;
      }
    },
    dislikeMovie: (state) => {
      const currentMovie = state.movies[state.currentIndex];
      if (currentMovie) {
        state.dislikedMovies.push(currentMovie);
        state.currentIndex += 1;
      }
    },
    resetMovies: (state) => {
      state.movies = MOCK_MOVIES;
      state.likedMovies = [];
      state.dislikedMovies = [];
      state.currentIndex = 0;
    },
    hydrateState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { likeMovie, dislikeMovie, resetMovies, hydrateState } =
  moviesSlice.actions;

export default moviesSlice.reducer;
