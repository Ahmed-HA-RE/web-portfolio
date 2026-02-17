'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-white/70'>
      <div className='container py-6'>
        <p className='text-center text-secondary-text'>
          &copy; {currentYear} Ahmed Haitham. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
