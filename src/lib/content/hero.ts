import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Suryansh Bachchan Verma',
  tagline: 'I turn ideas into reality with code.',
  description:
    "I'm a passionate Full-Stack Developer with expertise in creating scalable and efficient web solutions using technologies like React.js, Node.js, Express, MongoDB, and more.",
  specialText: 'Currently exploring opportunities to bring innovative ideas to life.',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
