'use client';
import Movies from '@/components/Movies';
import StoreProvider from './StoreProvider';
import Header from '@/components/Header';

export default function Home() {
  return (
    <StoreProvider>
      <Header />
      <Movies />
    </StoreProvider>
  );
}
