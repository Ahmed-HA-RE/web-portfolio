'use client';
import { useSwiper } from 'swiper/react';
import { Button } from '../ui/button';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='flex justify-end items-end gap-2 mt-6 '>
      <Button
        className='bg-primary text-white rounded-lg'
        onClick={() => swiper.slidePrev()}
        size={'icon'}
      >
        <FaArrowLeftLong />
      </Button>
      <Button
        className='bg-primary text-white rounded-lg'
        onClick={() => swiper.slideNext()}
        size={'icon'}
      >
        <FaArrowRightLong />
      </Button>
    </div>
  );
};

export default SwiperButtons;
