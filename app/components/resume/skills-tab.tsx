import { ScrollArea } from '../ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const SkillsTab = ({
  data,
}: {
  data: { name: string; icon: React.ReactNode }[];
}) => {
  return (
    <ScrollArea className='h-[400px]'>
      <TooltipProvider>
        <div className='grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-4'>
          {data.map((skill, index) => (
            <Tooltip key={index}>
              <div
                key={index}
                className='bg-[#27272c] flex items-center justify-center rounded-2xl p-12'
              >
                <TooltipTrigger asChild>
                  <span className='text-primary-text hover:text-primary transition-all duration-300 cursor-pointer'>
                    {skill.icon}
                  </span>
                </TooltipTrigger>
              </div>
              <TooltipContent>{skill.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </ScrollArea>
  );
};

export default SkillsTab;
