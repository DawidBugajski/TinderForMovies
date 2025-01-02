import { createSlice } from '@reduxjs/toolkit';
import { MOCK_MOVIES } from '@/lib/constans/mockMovies';

// Typy danych filmu
export interface Movie {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
  genre: string;
  releaseDate: string;
  duration: number;
  popularity: number;
  cast: string[];
  director: string;
  budget: number;
  revenue: number;
  language: string;
  country: string;
  ratings: {
    imdb: number;
    rottenTomatoes: number;
    metacritic: number;
  };
  isClassic: boolean;
  type: string;
  platforms: string[];
  reviews: {
    user: string;
    comment: string;
    rating: number;
  }[];
}

// Typy dla stanu
interface MovieState {
  movies: Movie[];
  likedMovies: Movie[];
  dislikedMovies: Movie[];
  currentIndex: number;
}

// Statyczny stan początkowy (bez `localStorage`)
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
