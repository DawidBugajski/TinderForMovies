import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { hydrateState } from '@/lib/features/movies/moviesSlice';

export const useLocalStorage = () => {
  const dispatch = useAppDispatch();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const serializedState = localStorage.getItem('moviesState');
      if (serializedState) {
        const state = JSON.parse(serializedState);
        dispatch(hydrateState(state));
      }
      setIsHydrated(true);
    }
  }, [dispatch]);

  return isHydrated;
};
