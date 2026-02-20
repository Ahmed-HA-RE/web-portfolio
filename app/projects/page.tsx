import { Metadata } from 'next';
import Project from '../components/projects/project-section';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Latest projects demonstrating complete, functional, and user-focused applications. Each project is built with a focus on real-world use cases, showcasing my ability to create scalable, maintainable, and production-ready applications using modern web technologies.',
};

const ProjectsPage = () => {
  return <Project />;
};

export default ProjectsPage;
