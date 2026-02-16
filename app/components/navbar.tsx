'use client';
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import Link from 'next/link';
import { desktopNavigationData } from '@/lib/constants';
import { cn } from '@/lib/utils';

const DesktopNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-6'>
      <div className='flex items-center gap-8 font-medium max-md:hidden'>
        {desktopNavigationData.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              'hover:text-primary text-secondary-text font-medium transition-colors duration-300',
              pathname === item.href && 'text-primary border-b border-primary',
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Separator orientation='vertical' className='!h-9 max-md:hidden' />
      <Button className='rounded-full max-md:hidden' size='sm' asChild>
        <Link href='/hire-me'>Hire Me</Link>
      </Button>
    </nav>
  );
};

export default DesktopNavbar;
