import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development + GenAI',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Build scalable full-stack web applications using modern stacks like Angular, React, Spring Boot, Node.js, and MongoDB, with secure and production-ready architecture.',
        'Develop robust RESTful and event-driven APIs using Spring Boot, Express.js, and WebSocket, with authentication via JWT, OAuth2, and role-based access control.',
        'Integrate AI/ML pipelines into real-world applications, including AI-powered content moderation, facial recognition, and speech-to-text indexing for search-driven platforms.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'Java', icon: 'vscode-icons:file-type-java' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        // { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        // { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        
        { name: 'ReactJs', icon: 'logos:react' },
        { name: 'NextJs', icon: 'logos:nextjs-icon' },
        { name: 'Angular', icon: 'logos:angular-icon' },
        
        { name: 'Nodejs', icon: 'logos:nodejs-icon' },
        { name: 'SpringBoot', icon: 'simple-icons:springboot' },

        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'Redux', icon: 'logos:redux' },
        { name: 'Database', icon: 'vscode-icons:file-type-sql' },
        { name: 'Docker', icon: 'vscode-icons:file-type-docker' },
        { name: 'Kubernetes', icon: 'logos:kubernetes' },
        { name: 'GenAI', icon: 'eos-icons:ai' },

      ],
    }
  ],
};
