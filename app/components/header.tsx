import Link from 'next/link';
import DesktopNavbar from './navbar';
import MobileNav from './mobile-nav';

const Header = () => {
  return (
    <header>
      <div className='container flex items-center justify-between gap-8 py-8 xl:py-12'>
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Ahmed <span className='text-primary'>.</span>
          </h1>
        </Link>
        {/* Desktop Navbar */}
        <DesktopNavbar />
        {/* Mobile Navbar */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
