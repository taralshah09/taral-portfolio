import { Bot, Code2, Globe, GraduationCap, Zap } from 'lucide-react';
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const services: Service[] = [
  {
    title: 'Website Development',
    description:
      'Modern, fast websites & web apps for individuals and businesses.',
    icon: <Globe className="size-10 text-blue-500" />,
  },
  {
    title: 'Automation',
    description: 'Save hours with scripts, bots, and workflow automation.',
    icon: <Zap className="size-10 text-yellow-500" />,
  },
  {
    title: 'AI Agents & Tools',
    description: 'Custom AI assistants, chatbots, and AI-powered integrations.',
    icon: <Bot className="size-10 text-purple-500" />,
  },
  {
    title: 'Technical & Assignment Help',
    description:
      'Programming help, debugging, project support, and structured guidance for computer science coursework.',
    icon: <Code2 className="size-10 text-green-500" />,
  },
  {
    title: 'College Assignment Support',
    description:
      'Hands-on assistance with coding assignments, academic projects, and technical submissions — currently supporting a client with coursework from Maricopa.edu.',
    icon: <GraduationCap className="size-10 text-red-500" />,
  },
];
