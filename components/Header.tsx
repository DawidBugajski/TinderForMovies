import ThemeSwitch from '@/components/ThemeSwitch';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center py-4 sm:py-8 gap-8 px-4'>
      <Link href='/'>
        <span className='text-2xl font-bold'>
          Tinder
          <span className='text-red-600 uppercase font-bold text-4xl'>4</span>
          movies
        </span>
      </Link>
      <ThemeSwitch />
    </header>
  );
}
