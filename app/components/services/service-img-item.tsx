'use client';

import { Service } from '@/types';
import { motion, useTransform } from 'motion/react';
import Image from 'next/image';

const ServiceImageItem = ({
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
    isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{ opacity }}
      className='absolute inset-0 overflow-hidden'
      transition={{ duration: 0.3 }}
    >
      <Image
        fill
        src={service.image}
        alt={service.title}
        className='object-contain px-3'
        priority={index === 0}
      />
    </motion.div>
  );
};

export default ServiceImageItem;
