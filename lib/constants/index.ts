export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const desktopNavigationData = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Resume', href: '/resume' },
  { title: 'Projects', href: '/projects' },
];

export const mobileNavigationData = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Resume', href: '/resume' },
  { title: 'Projects', href: '/projects' },
  { title: 'Hire Me', href: '/hire-me' },
];
