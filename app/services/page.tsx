'use client';
import ServicesList from '@/app/components/services/services-list';
import { CodeXmlIcon, Database } from 'lucide-react';
import { FaPager, FaUserShield } from 'react-icons/fa';

const services = [
  {
    icon: <CodeXmlIcon className='size-7' />,
    title: 'Full-Stack Development',
    description:
      "Delivers end-to-end web applications from concept to deployment, handling both frontend and backend layers. Focuses on creating maintainable, scalable architectures that perform efficiently under real-world conditions. Each project is built with clean, modular code, ensuring it's easy to extend and adapt as requirements evolve.",
    image: '/images/services/full-stack-service.jpg',
  },
  {
    icon: <FaPager className='size-6' />,
    title: 'Frontend Engineering',
    description:
      'Crafts responsive, user-centered interfaces that balance aesthetics with functionality. Specializes in modular, reusable components and clean project structures to deliver polished experiences that feel intuitive across devices. Accessibility, performance, and smooth interactivity are central to every interface.',
    image: '/images/services/frontend-service.jpg',
  },
  {
    icon: <Database className='size-7' />,
    title: 'Backend & API Development',
    description:
      'Builds secure, scalable server-side systems that power modern web applications. Designs and implements RESTful APIs for seamless communication between frontend and backend, while ensuring data integrity, efficiency, and reliability. Emphasizes long-term maintainability through structured, modular backend code.',
    image: '/images/services/backend-service.jpg',
  },
  {
    icon: <FaUserShield className='size-7' />,
    title: 'Authentication & Security',
    description:
      'Designs robust authentication and authorization systems to protect sensitive data and support multi-user collaboration. Implements secure session management, token-based authentication, and role-based access control, while following industry best practices for enterprise-grade security. Every flow is built to ensure reliability, safety, and peace of mind for users.',
    image: '/images/services/auth-service.jpg',
  },
];

const ServicesPage = () => {
  return <ServicesList services={services} />;
};

export default ServicesPage;
