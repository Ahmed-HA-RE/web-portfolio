const EducationTab = ({
  data,
}: {
  data: { title: string; subtitle: string }[];
}) => {
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      {data.map((item, index) => (
        <div
          key={index}
          className='bg-[#27272c] rounded-xl p-6 md:p-8 flex-1 hover:bg-[#2f2f35] transition-colors duration-300 border border-transparent hover:border-primary/20 group'
        >
          <div className='space-y-4'>
            <div className='w-12 h-1 bg-primary rounded-full group-hover:w-16 transition-all duration-300' />
            <h3 className='text-primary-text text-xl md:text-2xl font-semibold leading-tight'>
              {item.title}
            </h3>
            <div className='flex items-center gap-3'>
              <div className='min-w-2 w-2 h-2 rounded-full bg-primary' />
              <p className='text-secondary-text text-sm md:text-base leading-relaxed'>
                {item.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTab;
