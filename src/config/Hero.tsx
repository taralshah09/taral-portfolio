/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import SpringBoot from '@/components/technologies/SpringBoot';

// Component mapping for skills
export const skillComponents = {
  ReactIcon: ReactIcon,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  ExpressJs: ExpressJs,
  SpringBoot: SpringBoot,
  PostgreSQL: PostgreSQL,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: 'Taral Shah',
  title: 'Software Engineer',
  avatar: '/assets/taral_avatar.png',

  // Skills Configuration
  skills: [
    {
      name: 'React JS',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'MongoDB',
      href: 'https://mongodb.com/',
      component: 'MongoDB',
    },
    {
      name: 'Express.js',
      href: 'https://expressjs.com/',
      component: 'ExpressJs',
    },
    {
      name: 'Spring Boot',
      href: 'https://spring.io/projects/spring-boot',
      component: 'SpringBoot',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build scalable web applications using {skills:0}, {skills:1}, and {skills:2}. Experienced with {skills:3} and currently learning {skills:4}. Passionate about building products that solve real-world problems.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: 'https://drive.google.com/file/d/1NzA01Db9Us1uiQR8HdXVK0-SdKnd8O4a/view',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/taralshah995',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/taralshah9/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/taralshah09/',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:taralshah604@gmail.com',
    icon: <Mail />,
  },
];
