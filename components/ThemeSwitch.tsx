'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className='w-6 h-6 bg-black dark:bg-white rounded-full animate-pulse'></div>
    );

  if (resolvedTheme === 'dark') {
    return (
      <FaSun
        aria-label='Switch to light mode'
        role='button'
        className='w-6 h-6 text-white  hover:text-green transition-colors duration-150 cursor-pointer'
        onClick={() => setTheme('light')}
      />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <FaMoon
        aria-label='Switch to dark mode'
        role='button'
        className='w-6 h-6 text-black hover:text-green transition-colors duration-150 cursor-pointer'
        onClick={() => setTheme('dark')}
      />
    );
  }
}
