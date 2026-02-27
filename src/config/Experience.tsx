import AWS from '@/components/technologies/AWS';
import Django from '@/components/technologies/Django';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'First Draft',
    position: 'Software Development Intern',
    location: 'Remote',
    image: 'FD',
    description: [
      'Developed core features for an LLM-powered journalism platform using Next.js, Django, and PostgreSQL, implementing RESTful APIs that handled 10K+ daily requests with under 200ms response time while optimizing database queries to reduce execution time by 40%.',
      'Engineered responsive UI components with lazy loading and code splitting in Next.js, improving page load times by 40%.',
      'Built AI-powered content analysis features that processed 500+ articles daily with 92% accuracy.',
    ],
    startDate: 'June 2025',
    endDate: 'Aug 2025',
    website: '#',
    technologies: [
      {
        name: 'Django',
        href: 'https://www.djangoproject.com/',
        icon: <Django />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'TailwindCss',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'MatchMyCV',
    position: 'Software Development Intern',
    location: 'Remote',
    image: 'MC',
    description: [
      'Engineered a production-grade, scalable distributed microservice for AI-based resume refinement using the OpenAI API, integrated with Amazon S3 and Docker to support 500+ users with 99.9% system reliability.',
      'Redesigned legacy HTML pages into a responsive React + Redux frontend with lazy loading, reducing load times by 1.5 seconds.',
      'Integrated Django REST APIs with database indexing to handle high-volume requests and improve throughput.',
    ],
    startDate: 'Aug 2024',
    endDate: 'Dec 2024',
    website: '#',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Django',
        href: 'https://www.djangoproject.com/',
        icon: <Django />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
  },
];
