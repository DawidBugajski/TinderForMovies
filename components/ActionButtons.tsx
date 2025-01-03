'use client';

import Button from '@/components/Button';
import { useAppDispatch } from '@/lib/hooks';
import { likeMovie, dislikeMovie } from '@/lib/features/movies/moviesSlice';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function ActionButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className='flex justify-between w-full'>
      <Button
        variant='reject'
        icon={<FaThumbsDown className='w-6 h-6' />}
        onClick={() => dispatch(dislikeMovie())}
        testId='dislike-button'
      />
      <Button
        variant='accept'
        icon={<FaThumbsUp className='w-6 h-6' />}
        onClick={() => dispatch(likeMovie())}
        testId='like-button'
      />
    </div>
  );
}
