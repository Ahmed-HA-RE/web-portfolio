'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { ArrowUpRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Service } from '@/types';
import ServiceItem from '@/app/components/services/service-item';
import ServiceImageItem from '@/app/components/services/service-img-item';
import { Button } from '../ui/button';
import MobileService from './mobile-service';

const githubPortfolioURL = `${process.env.NEXT_PUBLIC_GITHUB_URL}?tab=repositories`;

const ServicesList = ({ services }: { services: Service[] }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section>
      <div className='container max-md:py-12 md:pt-16 '>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center max-md:px-4 sm:mb-16 lg:mb-24'>
          <motion.h2
            className='text-3xl font-semibold md:text-4xl lg:text-5xl'
            transition={{ duration: 0.5, delay: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Services & Expertise
          </motion.h2>

          <motion.p
            className='text-secondary-text mx-auto md:max-w-2xl lg:max-w-3xl text-base md:text-lg lg:text-xl mb-8'
            transition={{ duration: 0.5, delay: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            From architecture to deployment delivering modern, maintainable
            full-stack applications.
          </motion.p>

          <motion.div
            className='flex flex-wrap items-center justify-center'
            transition={{ duration: 0.5, delay: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Button asChild size={'md'}>
              <a href={githubPortfolioURL} target='_blank'>
                View Examples
                <ArrowUpRightIcon className='size-5' />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div ref={containerRef} className='grid gap-6 md:grid-cols-2'>
            {/* Desktop: Sticky scroll features */}
            <div className='relative hidden w-full space-y-20 px-6 py-20 md:block'>
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  service={service}
                  index={index}
                  totalServices={services.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* Desktop: Sticky scroll images */}
            <div className='bg-secondary relative hidden w-full items-center justify-center space-y-20 px-6 py-20 md:block overflow-y-clip'>
              <div
                className='bg-card sticky top-1/2 flex h-125 translate-y-2 items-center justify-center overflow-hidden rounded-2xl border'
                style={{
                  transform:
                    scroll < 1710
                      ? `translateY(max(-50%, -${scroll}px))`
                      : scroll < 1952
                        ? `translateY(calc(-50% + ${scroll - 1710}px))`
                        : 'translateY(0)',
                }}
              >
                {services.map((service, index) => (
                  <ServiceImageItem
                    key={index}
                    service={service}
                    index={index}
                    totalServices={services.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}

                {[
                  'top-4.5 left-4.5',
                  'top-4.5 right-4.5',
                  'bottom-4.5 left-4.5',
                  'bottom-4.5 right-4.5',
                ].map((position, idx) => (
                  <motion.svg
                    key={idx}
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    height='10'
                    viewBox='0 0 10 10'
                    fill='none'
                    className={cn('absolute', position)}
                  >
                    <circle cx='5' cy='5' r='5' fill='var(--primary)' />
                  </motion.svg>
                ))}
              </div>
            </div>

            {/* Mobile Version */}
            <MobileService services={services} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
