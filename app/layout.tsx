import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SERVER_URL } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    template: "%s | Ahmed Haitham's Portfolio",
    default: "Ahmed Haitham's Portfolio",
  },
  description:
    'Full-Stack web developer portfolio. Explore my projects, skills, and experience building modern, responsive web applications.',
  openGraph: {
    title: "Ahmed Haitham's Portfolio",
    description:
      'Full-Stack web developer portfolio. Explore my projects, skills, and experience building modern, responsive web applications.',
    url: SERVER_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.variable}>
      <body>
        <div className='flex flex-col min-h-screen'>
          <main className='flex-grow'>{children}</main>
        </div>
      </body>
    </html>
  );
}
