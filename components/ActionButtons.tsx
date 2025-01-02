'use client';

import { useAppDispatch } from '@/lib/hooks';
import { likeMovie, dislikeMovie } from '@/lib/features/movies/moviesSlice';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function ActionButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className='flex justify-between w-full'>
      <button
        onClick={() => dispatch(dislikeMovie())}
        className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors'
      >
        <FaThumbsDown className='w-6 h-6' />
      </button>
      <button
        onClick={() => dispatch(likeMovie())}
        className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors'
      >
        <FaThumbsUp className='w-6 h-6' />
      </button>
    </div>
  );
}
