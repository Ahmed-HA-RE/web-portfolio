import { ScrollArea } from '../ui/scroll-area';

const ExperienceTab = ({ data }: { data: string[] }) => {
  return (
    <ScrollArea className='h-[250px]'>
      <div className='space-y-6'>
        <ul className='space-y-4'>
          {data.map((item, index) => (
            <li key={index} className='flex gap-3 items-start group'>
              <div className='mt-1.5 min-w-2 w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-200' />
              <p className='text-secondary-text text-base md:text-lg leading-relaxed group-hover:text-primary-text transition-colors duration-200'>
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
};

export default ExperienceTab;
