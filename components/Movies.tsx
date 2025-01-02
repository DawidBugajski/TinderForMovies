'use client';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import {
  likeMovie,
  dislikeMovie,
  resetMovies,
} from '@/lib/features/movies/moviesSlice';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function TinderMovies() {
  const dispatch = useAppDispatch();
  const { movies, currentIndex, likedMovies, dislikedMovies } = useAppSelector(
    (state) => state.movies
  );

  const isHydrated = useLocalStorage();

  if (!isHydrated) {
    return (
      <div className='text-center mt-10'>
        <h1 className='text-xl font-bold text-gray-800'>Loading...</h1>
      </div>
    );
  }

  if (currentIndex >= movies.length) {
    return (
      <div className='text-center mt-10'>
        <h1 className='text-2xl font-bold text-gray-800'>
          You have reviewed all movies!
        </h1>
        <p className='text-gray-600 mt-4'>Liked Movies: {likedMovies.length}</p>
        <p className='text-gray-600 mb-6'>
          Disliked Movies: {dislikedMovies.length}
        </p>
        <button
          onClick={() => dispatch(resetMovies())}
          className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
        >
          Reset
        </button>
      </div>
    );
  }

  const currentMovie = movies[currentIndex];

  return (
    <div className='max-w-md mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-md'>
      <Image
        src={currentMovie.imageURL}
        alt={currentMovie.title}
        width={320}
        height={180}
        className='rounded-md mb-4'
      />
      <h1 className='text-2xl font-bold mb-2'>{currentMovie.title}</h1>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Genre:</span> {currentMovie.genre}
      </p>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Director:</span> {currentMovie.director}
      </p>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Cast:</span>{' '}
        {currentMovie.cast.join(', ')}
      </p>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Release Date:</span>{' '}
        {currentMovie.releaseDate}
      </p>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Duration:</span> {currentMovie.duration}{' '}
        mins
      </p>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Budget:</span> $
        {currentMovie.budget.toLocaleString()}
      </p>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Revenue:</span> $
        {currentMovie.revenue.toLocaleString()}
      </p>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Ratings:</span>{' '}
        <span className='font-normal'>
          IMDb: {currentMovie.ratings.imdb}, Rotten Tomatoes:{' '}
          {currentMovie.ratings.rottenTomatoes}%, Metacritic:{' '}
          {currentMovie.ratings.metacritic}
        </span>
      </p>
      <p className='text-sm text-gray-400 mb-2'>
        <span className='font-semibold'>Platforms:</span>{' '}
        {currentMovie.platforms.join(', ')}
      </p>
      <p className='text-sm text-gray-400 mb-4'>
        <span className='font-semibold'>Summary:</span> {currentMovie.summary}
      </p>
      <div className='flex justify-between'>
        <button
          onClick={() => dispatch(dislikeMovie())}
          className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors'
        >
          Dislike
        </button>
        <button
          onClick={() => dispatch(likeMovie())}
          className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors'
        >
          Like
        </button>
      </div>
    </div>
  );
}
