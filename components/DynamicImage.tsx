'use client';
import Image from 'next/image';
import { useState } from 'react';

interface DynamicImage {
  src: string;
  alt?: string;
}

export default function DynamicImage({ src, alt }: DynamicImage) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && (
        <div className='w-full h-full bg-slate-600 animate-pulse'></div>
      )}
      <Image
        src={src}
        alt={alt || 'image'}
        priority
        fill
        sizes='(max-width: 1280px) 50vw, 100vw'
        className='object-cover'
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
}
