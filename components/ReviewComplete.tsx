'use client';

import { useAppDispatch } from '@/lib/hooks';
import { resetMovies } from '@/lib/features/movies/moviesSlice';
import Button from './Button';

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
      <h1 className='text-2xl sm:text-4xl font-bold font-[family-name:var(--font-geist-mono)]'>
        You have reviewed all movies!
      </h1>
      <p className='mt-4'>Liked Movies: {likedMovies}</p>
      <p className='mb-6'>Disliked Movies: {dislikedMovies}</p>
      <Button
        className='mx-auto'
        variant='reset'
        onClick={() => dispatch(resetMovies())}
      >
        Reset
      </Button>
    </div>
  );
}
