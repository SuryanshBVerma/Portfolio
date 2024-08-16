import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      title: 'SyncCrowd',
      link: 'https://sync-crowd.vercel.app/',
      repo: 'https://github.com/Vishalk990/Sync-Crowd',
      description:
      "A Synthetic data generation platform.",
      img: '',
      year: 2022,
      tags: ['Next JS', 'ShadCN', 'ModelBit', 'AI'],
    },
    {
      id: getId(),
      title: 'Visual Vibe',
      link: 'https://visual-vibe.vercel.app/',
      repo: 'https://github.com/SuryanshBVerma/Visual-Vibe',
      description:
      "User friendly video conferincing solution using Next Js and Stream API.",
      img: '',
      year: 2022,
      tags: ['Next JS', 'Stream API', 'ShadCN'],
    },
    {
      id: getId(),
      title: 'Discuss IT',
      link: 'https://discuss-it-two.vercel.app/',
      repo: 'https://github.com/SuryanshBVerma/DISCUSS_IT',
      description:
      "A community driven web-app focused on resolving doubts related to academic and other categories.",
      img: '',
      year: 2022,
      tags: ['React', 'NodeJs', 'Redux','Chakra UI'],
    },
    {
      id: getId(),
      title: 'Nike Landing Page',
      link: 'https://nike-clone-azure.vercel.app/',
      repo: 'https://github.com/SuryanshBVerma/Nike_Clone',
      description:
      "Built a frontend landing page clone of the Nike Website.",
      img: 'https://user-images.githubusercontent.com/68834718/162578706-b9e57735-6fbc-4c7b-8243-2a6ba447404e.jpg',
      year: 2022,
      tags: ['React', 'Tailwind Css'],
    },
    {
      id: getId(),
      title: 'Finance',
      link: 'https://youtu.be/XHnk1k71SpI',
      repo: 'https://github.com/SuryanshBVerma/Cs50-Finance',
      description:
      "Cs50-Finance is a web app developed for buying and selling of shares.",
      img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/68834718/252267106-857c5341-1106-4e84-b7e6-80a668a20ba8.png',
      year: 2023,
      tags: ['Python', 'HTML', 'Css', ' Js', 'Flask'],
    },
    {
      id: getId(),
      title: 'Meaner',
      link: 'https://youtu.be/rTDPcQTzlIE',
      repo: 'https://github.com/SuryanshBVerma/Meaner',
      description:
      "Meaner is a simple and easy chrome extension to find meanings. The API used for this project is Free Dictonary API.",
      img: '',
      year: 2023,
      tags: ['JavaScript', 'HTML', 'Extention', 'API'],
    },
    {
      id: getId(),
      title: 'Signature App',
      link: 'https://signature-rust.vercel.app/',
      repo: 'https://github.com/SuryanshBVerma/Signature',
      description:
      "A simple siganture app that allows you to create your own digital signatre.",
      img: 'https://user-images.githubusercontent.com/68834718/169527851-19fefb2e-e440-411a-a8a1-4767e2c8688a.png',
      year: 2022,
      tags: ['HTML', 'Js'],
    },
    {
      id: getId(),
      title: 'Wordle',
      link: 'https://github.com/SuryanshBVerma/Wordle',
      repo: 'https://github.com/SuryanshBVerma/Wordle',
      description:
      "A terminal based wordle game written in C language.",
      img: 'https://user-images.githubusercontent.com/68834718/189035104-aa71647e-33e4-442a-a2f9-c0d50bba2db1.png',
      year: 2022,
      tags: ['C', 'Terminal-based'],
    },
    {
      id: getId(),
      title: 'WanderNest',
      link: '',
      repo: 'https://github.com/SuryanshBVerma/WanderNest',
      description:
      "WanderNest is an innovative homestay listing and booking platform that connects travelers to unique, community-centric stays and experiences.",
      img: 'https://user-images.githubusercontent.com/68834718/265277125-da2a6e07-7cf6-411c-b55f-94e372aa6dc8.png',
      year: 2023,
      tags: ['React', 'NodeJs', 'MongoDB'],
    },
  ],
};
