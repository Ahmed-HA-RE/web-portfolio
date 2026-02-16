'use client';

import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

const PageTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 1 }}
        className='w-screen h-screen bg-background fixed inset-0 pointer-events-none'
      />
    </AnimatePresence>
  );
};

export default PageTransition;
