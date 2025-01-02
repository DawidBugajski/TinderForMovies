'use client';

import { useAppDispatch } from '@/lib/hooks';
import { resetMovies } from '@/lib/features/movies/moviesSlice';

export default function ReviewComplete({
  likedMovies,
  dislikedMovies,
}: {
  likedMovies: number;
  dislikedMovies: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className='text-center mt-10'>
      <h1 className='text-2xl sm:text-4xl font-bold'>
        You have reviewed all movies!
      </h1>
      <p className='mt-4'>Liked Movies: {likedMovies}</p>
      <p className='mb-6'>Disliked Movies: {dislikedMovies}</p>
      <button
        onClick={() => dispatch(resetMovies())}
        className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
      >
        Reset
      </button>
    </div>
  );
}
