const AboutMeTab = ({ data }: { data: { title: string; value: string }[] }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 flex-1'>
      {data.map((item, index) => (
        <div
          key={index}
          className='flex flex-row gap-4 items-center justify-center xl:justify-start'
        >
          <h3 className='text-secondary-text text-lg font-extralight'>
            {item.title}
          </h3>
          <span className='text-primary-text text-xl'>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default AboutMeTab;
