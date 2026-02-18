import { cn } from '@/lib/utils';
import { Service } from '@/types';
import Image from 'next/image';

const MobileService = ({ services }: { services: Service[] }) => {
  return (
    <div className='flex flex-col gap-16 md:hidden'>
      {services.map((service, index) => (
        <div key={index} className='space-y-16'>
          <div className='bg-muted relative px-6 py-20'>
            <div className='bg-card sticky top-20 flex h-87.5 items-center justify-center overflow-hidden rounded-xl border'>
              <div className='relative h-[250px] w-full'>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-contain px-4'
                />
              </div>
              {[
                'top-4.5 left-4.5',
                'top-4.5 right-4.5',
                'bottom-4.5 left-4.5',
                'bottom-4.5 right-4.5',
              ].map((position, idx) => (
                <svg
                  key={idx}
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='10'
                  viewBox='0 0 10 10'
                  fill='none'
                  className={cn('absolute', position)}
                >
                  <circle cx='5' cy='5' r='5' fill='var(--primary)' />
                </svg>
              ))}
            </div>
          </div>
          <div className='space-y-4 max-md:px-4'>
            <div className='flex items-center gap-4'>
              {service.icon}
              <div className='text-xl font-medium'>{service.title}</div>
            </div>
            <div className='text-muted-foreground'>{service.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileService;
