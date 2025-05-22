import { Link } from '@tanstack/react-router';

import { ThemeToggle } from '@/components/ui/theme-toggle';

export const Navigation = () => {
  return (
    <div className='flex gap-6'>
      <Link
        activeProps={{ className: 'text-foreground font-bold hover:text-primary' }}
        className='text-foreground hover:text-primary flex items-center font-medium'
        to='/'
      >
        Home
      </Link>
      <Link
        activeProps={{ className: 'text-foreground font-bold hover:text-primary' }}
        className='text-foreground hover:text-primary flex items-center font-medium'
        to='/about'
      >
        About
      </Link>
      <Link
        activeProps={{ className: 'text-foreground font-bold hover:text-primary' }}
        className='text-foreground hover:text-primary flex items-center font-medium'
        to='/tailwind-test'
      >
        Tailwind Test
      </Link>
      <div className='flex items-center gap-2'>
        <ThemeToggle />
      </div>
    </div>
  );
};
