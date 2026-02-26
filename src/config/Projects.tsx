import Django from '@/components/technologies/Django';
import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import SpringBoot from '@/components/technologies/SpringBoot';
import TailwindCss from '@/components/technologies/TailwindCss';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'TrackHire',
    description:
      'Full-stack job aggregation platform using Node.js (cron-based scraper), Spring Boot (REST backend), and React that collects recent openings from company career pages and niche platforms. Maintains 10K+ active listings with daily automated updates and implements JWT-based authentication with personalized email notifications.',
    image: '/project/trackhire.png',
    link: 'https://www.trackhire.me/',
    technologies: [
      { name: 'Spring Boot', icon: <SpringBoot key="springboot" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TailwindCss', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/taralshah09/TrackHire',
    live: 'https://www.trackhire.me/',
    details: false,
    projectDetailsPageSlug: '/projects/trackhire',
    isWorking: false,
  },
  {
    title: 'WebOS',
    description:
      'OS-like browser desktop simulation with 5+ resizable windows, 5 draggable apps, persistent text editor, and terminal supporting 10+ Linux commands executed over 1.2K+ times. Architected a highly scalable backend with microservice-like boundaries and optimized MongoDB indexing to cut file retrieval latency by 40%.',
    image: '/project/webos.png',
    link: 'https://webos-five-eosin.vercel.app/',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TailwindCss', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/taralshah09/webOS',
    live: 'https://webos-five-eosin.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/webos',
    isWorking: false,
  },
  {
    title: 'GDG Cloud Jams',
    description: 'Built a leaderboard dashboard for GDG Cloud Jams, a hackathon event organized by Google Developer Groups. The dashboard displays the leaderboard of the hackathon and allows users to view the leaderboard of the hackathon.',
    image: '/project/gdg-cloud-jam.png',
    link: 'https://gdg-cloud-jam.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Express', icon: <ExpressJs key="expressjs" /> },
    ],
    github: 'https://github.com/taralshah09/GDG_Cloud_Jam',
    live: 'https://gdg-cloud-jam.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/gdg-cloud-jam',
    isWorking: false,
  },
  {
    title: 'WalletAPI',
    description: 'A production-grade RESTful API for digital wallet and fixed deposit management with enterprise-level security, concurrency handling, and transactional integrity.',
    link: '#',
    image: '/project/walletapi.png',
    technologies: [
      { name: 'SpringBoot', icon: <SpringBoot key="springboot" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Postman', icon: <Postman key="postman" /> }
    ],
    github: 'https://github.com/taralshah09/wallet-api',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/walletapi',
    isWorking: false,
  },
  {
    title: 'CareerSetGo',
    description:
      'A comprehensive career development platform designed to empower students and professionals with AI-driven interview preparation, resume building, and skill enhancement tools. The platform features an intelligent interview simulator that provides instant feedback on responses, a resume builder with ATS optimization suggestions, and a curated learning path system to bridge skill gaps.',
    image: '/project/careersetgo.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Django', icon: <Django key="django" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    github: 'https://github.com/taralshah09/CareerSetGo',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/careersetgo',
    isWorking: false,
  },
  {
    title: 'Kanban Board View',
    description: 'A Kanban board view that allows users to manage their tasks in a visual way. The board is divided into columns that represent the different stages of a task, and users can drag and drop tasks between columns to update their status.',
    image: '',
    link: 'https://taralkanban.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Express', icon: <ExpressJs key="expressjs" /> },
    ],
    github: 'https://github.com/taralshah09/kanban_board_view',
    live: 'https://taralkanban.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/kanban-board-view',
    isWorking: false,
  },
];
