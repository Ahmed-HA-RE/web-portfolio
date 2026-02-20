'use client';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { about, education, builds_development } from '@/lib/constants';
import AboutMeTab from './about-me-tab';
import SkillsTab from './skills-tab';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiMongodb,
  SiVercel,
} from 'react-icons/si';
import { ImGit } from 'react-icons/im';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoPostgresql } from 'react-icons/bi';
import EducationTab from './education-tab';
import BuildsAndDevelopmentsTab from './builds-and-developments-tab';

const skills = {
  title: 'My Skills',
  description: 'Here are some of the technologies I work with:',
  data: [
    {
      name: 'HTML5',
      icon: <FaHtml5 className='size-17' />,
    },
    {
      name: 'CSS3',
      icon: <FaCss3 className='size-17' />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs className='size-17' />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className='size-17' />,
    },
    {
      name: 'React.Js',
      icon: <FaReact className='size-17' />,
    },
    {
      name: 'Next.Js',
      icon: <SiNextdotjs className='size-17' />,
    },
    {
      name: 'Node.Js',
      icon: <FaNodeJs className='size-17' />,
    },
    {
      name: 'PostgreSQL',
      icon: <BiLogoPostgresql className='size-17' />,
    },
    {
      name: 'Prisma',
      icon: <SiPrisma className='size-17' />,
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className='size-17' />,
    },
    {
      name: 'Git',
      icon: <ImGit className='size-17' />,
    },
    {
      name: 'Tailwind CSS',
      icon: <RiTailwindCssFill className='size-17' />,
    },
    {
      name: 'Figma',
      icon: <FaFigma className='size-17' />,
    },
    {
      name: 'Vercel',
      icon: <SiVercel className='size-17' />,
    },
  ],
};

const Resume = () => {
  const tabsContent = [
    {
      value: 'about_me',
      title: about.title,
      description: about.description,
      children: <AboutMeTab data={about.data} />,
    },
    {
      value: 'skills',
      title: skills.title,
      description: skills.description,
      children: <SkillsTab data={skills.data} />,
    },
    {
      value: 'builds_development',
      title: builds_development.title,
      description: builds_development.description,
      children: <BuildsAndDevelopmentsTab data={builds_development.data} />,
    },
    {
      value: 'education',
      title: education.title,
      description: education.description,
      children: <EducationTab data={education.data} />,
    },
  ];

  return (
    <section className='py-16 lg:py-24'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, ease: 'easeInOut' }}
          className='space-y-4 mb-12 xl:mb-25'
        >
          <h1 className='text-primary-text text-center text-4xl md:text-5xl lg:text-6xl tracking-wider'>
            Why Hire Me?
          </h1>
          <p className='text-secondary-text text-center max-w-2xl lg:max-w-3xl mx-auto text-base md:text-xl leading-relaxed'>
            I build reliable, scalable applications with a strong focus on
            quality, performance, and real-world results from development to
            deployment.
          </p>
        </motion.div>
        {/* Left Col */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, ease: 'easeInOut' }}
        >
          <Tabs
            defaultValue='about_me'
            className='w-full flex flex-col xl:flex-row gap-[60px] '
          >
            <TabsList className='w-full mx-auto xl:mx-0 bg-transparent flex flex-col gap-6 rounded-lg flex-1/3 max-w-md'>
              <TabsTrigger value='about_me'>About Me</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
              <TabsTrigger value='builds_development'>
                Builds & Development
              </TabsTrigger>
              <TabsTrigger value='education'>Education</TabsTrigger>
            </TabsList>

            {tabsContent.map((tab) => (
              <TabsContent
                value={tab.value}
                className='flex-1/2'
                key={tab.value}
              >
                <div className='flex flex-col gap-10'>
                  <div className='space-y-6'>
                    <h2 className='text-4xl text-primary-text text-center xl:text-left'>
                      {tab.title}
                    </h2>
                    <p className='text-secondary-text text-base leading-relaxed text-center xl:text-left max-w-2xl xl:max-w-3xl mx-auto xl:mx-0'>
                      {tab.description}
                    </p>
                  </div>
                  {tab.children}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
