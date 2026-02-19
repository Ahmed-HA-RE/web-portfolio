import { Metadata } from 'next';

import Resume from '../components/resume/resume-section';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'A detailed overview of my skills, hands-on experience, education, and professional development in full-stack web development.',
};

const ResumePage = () => {
  return <Resume />;
};

export default ResumePage;
