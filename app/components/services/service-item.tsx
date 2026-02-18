'use client';

import { cn } from '@/lib/utils';
import { motion, useTransform } from 'motion/react';
import { Service } from '@/types';

const ServiceItem = ({
  service,
  index,
  totalServices,
  scrollYProgress,
}: {
  service: Service;
  index: number;
  totalServices: number;
  scrollYProgress: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}) => {
  const start = index / totalServices;
  const middle = (index + 0.5) / totalServices;
  const end = (index + 1) / totalServices;
  const isFirst = index === 0;
  const isLast = index === totalServices - 1;

  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, middle - 0.05, middle + 0.05, end]
      : isLast
        ? [start, middle - 0.05, middle + 0.05, 1]
        : [start, middle - 0.05, middle + 0.05, end],
    isFirst ? [1, 1, 1, 0.3] : isLast ? [0.3, 1, 1, 1] : [0.3, 1, 1, 0.3],
  );

  const y = useTransform(
    scrollYProgress,
    isFirst
      ? [0, middle, end]
      : isLast
        ? [start, middle, 1]
        : [start, middle, end],
    isFirst ? [0, 0, -30] : isLast ? [30, 0, 0] : [30, 0, -30],
  );

  return (
    <motion.div
      style={{ opacity, y }}
      transition={{ delay: 2, duration: 0.3 }}
      className={cn('flex h-125 items-center justify-center')}
    >
      <div className='space-y-4 w-full'>
        <div className='flex items-center gap-4'>
          {service.icon}
          <div className='font-medium md:text-2xl xl:text-3xl max-w-xl text-primary-text'>
            {service.title}
          </div>
        </div>
        <div className='text-secondary-text'>{service.description}</div>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
