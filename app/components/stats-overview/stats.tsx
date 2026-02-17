'use client';
import Globe from '@/app/components/stats-overview/globe';
import { motion } from 'motion/react';

const stats = [
  {
    title: 'Years of Experience',
    value: '1.5+',
  },
  {
    title: 'Projects Completed',
    value: '25+',
  },
  {
    title: 'Technologies Mastered',
    value: '9+',
  },
  {
    title: 'Code Commits',
    value: '500+',
  },
];

const Stats = () => {
  return (
    <section className='section-spacing'>
      <div className='container'>
        {/* Header */}
        <div className='mb-10 flex flex-col items-center gap-4 sm:mb-14 lg:mb-18'>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: 'easeInOut' }}
            className='text-5xl xl:text-6xl text-primary-text font-semibold'
          >
            Professional Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2, ease: 'easeInOut' }}
            className='text-center text-lg xl:text-xl text-secondary-text max-w-2xl'
          >
            Experience, technologies, and continuous growth as a developer
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 '>
          <div className='flex flex-col gap-7 xl:pt-20'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 2.5 }}
              className='grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-x-6 gap-y-14'
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center gap-6'
                >
                  <h3 className='text-7xl font-bold text-primary-text'>
                    {stat.value}
                  </h3>
                  <p className='text-lg text-center text-secondary-text'>
                    {stat.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 2.5 }}
            className='relative max-sm:h-100'
          >
            <Globe />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
