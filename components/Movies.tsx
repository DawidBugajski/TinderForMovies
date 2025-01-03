import { useAppSelector } from '@/lib/hooks';
import ReviewComplete from '@/components/ReviewComplete';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import LoadingDots from '@/components/LoadingDots';
import MovieDetails from '@/components/MovieDetails';

export default function TinderMovies() {
  const { movies, currentIndex, likedMovies, dislikedMovies } = useAppSelector(
    (state) => state.movies
  );

  const isHydrated = useLocalStorage();

  if (!isHydrated) {
    return <LoadingDots />;
  }

  if (currentIndex >= movies.length) {
    return (
      <ReviewComplete
        likedMovies={likedMovies.length}
        dislikedMovies={dislikedMovies.length}
      />
    );
  }

  const currentMovie = movies[currentIndex];

  return (
    <div className='w-full mx-auto p-4 flex flex-col'>
      <MovieDetails movie={currentMovie} />
    </div>
  );
}
