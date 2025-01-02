import ThemeSwitch from '@/components/ThemeSwitch';

export default function Header() {
  return (
    <header className='flex justify-between items-center py-4 sm:py-8 gap-8'>
      <h1 className='text-2xl font-bold'>Tinderformovies</h1>
      <ThemeSwitch />
    </header>
  );
}
