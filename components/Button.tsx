import React from 'react';
import { cn } from '@/lib/utils';

export default function Button({
  variant = 'accept',
  icon,
  children,
  className,
  testId,
  ...props
}: {
  variant?: 'accept' | 'reject' | 'reset';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  testId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles =
    'px-4 py-2 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2';
  const variantStyles = {
    accept: 'bg-green-500 text-white hover:bg-green-600',
    reject: 'bg-red-500 text-white hover:bg-red-600',
    reset: 'bg-blue-500 text-white hover:bg-blue-600',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      data-testid={testId}
      {...props}
    >
      {icon && <span className='w-6 h-6'>{icon}</span>}
      {children}
    </button>
  );
}
