import Image from 'next/image';
import { Movie } from '@/types';
import ActionButtons from '@/components/ActionButtons';

const formatCurrency = (value: number): string => `$${value.toLocaleString()}`;
const formatList = (items: string[]): string => items.join(', ');

export default function MovieDetails({
  movie: {
    imageURL,
    title,
    ratings,
    genre,
    director,
    cast,
    releaseDate,
    duration,
    budget,
    revenue,
    platforms,
    summary,
  },
}: {
  movie: Movie;
}) {
  const details = [
    { label: 'Genre', value: genre },
    { label: 'Director', value: director },
    { label: 'Cast', value: formatList(cast) },
    { label: 'Release Date', value: releaseDate },
    { label: 'Duration', value: `${duration} mins` },
    { label: 'Budget', value: formatCurrency(budget) },
    { label: 'Revenue', value: formatCurrency(revenue) },
    { label: 'Platforms', value: formatList(platforms) },
    { label: 'Summary', value: summary },
  ];

  return (
    <div className='w-full max-w-screen-lg mx-auto shadow-md dark:shadow-black p-6 relative'>
      <h1 className='text-xl sm:text-2xl text-black dark:text-white font-bold text-center mb-4'>
        {title} <span className='text-lg'>({ratings.imdb}/10)</span>
      </h1>
      <div className='flex flex-col md:flex-row items-start gap-6'>
        <div className='relative w-full md:w-1/2'>
          <div className='h-[400px] sm:h-[600px]'>
            <Image
              src={imageURL}
              alt={title}
              fill
              className='object-cover'
              priority
            />
          </div>
          <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-60 py-3 flex justify-between items-center px-6'>
            <ActionButtons />
          </div>
        </div>
        <div className='w-full md:w-1/2 space-y-2'>
          {details.map(({ label, value }) => (
            <p key={label}>
              <span className='font-semibold'>{label}:</span> {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
