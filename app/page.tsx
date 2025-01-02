'use client';
import Movies from '@/components/Movies';
import StoreProvider from './StoreProvider';

export default function Home() {
  return (
    <StoreProvider>
      <Movies />
    </StoreProvider>
  );
}
