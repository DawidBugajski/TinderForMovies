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

export interface MovieState {
  movies: Movie[];
  likedMovies: Movie[];
  dislikedMovies: Movie[];
  currentIndex: number;
}
