import ThemeSwitch from '@/components/ThemeSwitch';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center py-4 sm:py-8 gap-8'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>
          Tinder
          <span className='text-red-600 uppercase font-bold text-4xl'>4</span>
          movies
        </h1>
      </Link>
      <ThemeSwitch />
    </header>
  );
}
