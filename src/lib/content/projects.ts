import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
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
      title: 'rock paper scissors',
      link: 'https://rock-paper-scissors-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/rock-paper-scissors',
      description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      img: 'https://user-images.githubusercontent.com/68834718/162578706-b9e57735-6fbc-4c7b-8243-2a6ba447404e.jpg',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      title: 'todo app',
      link: 'https://todo-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/todo-app',
      description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      img: 'https://user-images.githubusercontent.com/68834718/152794002-0e7bc583-084b-4c39-83bb-d82d5dd642b2.png',
      year: 2022,
      tags: ['React', 'Sass', 'JS'],
    },
    {
      id: getId(),
      title: 'weather app',
      link: 'https://weather-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/weather-app',
      description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      img: 'https://user-images.githubusercontent.com/68834718/148419702-491fa08d-e520-4e2f-b219-374ec7118b2b.png',
      year: 2022,
      tags: ['Html', 'sass', 'JS', 'jQuery'],
    },
    {
      id: getId(),
      title: 'blogr landing page',
      link: 'https://blogr-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/blogr-landing-page',
      description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      img: 'https://user-images.githubusercontent.com/68834718/210222542-6455303d-c93e-430b-a5c8-96a431044184.png',
      year: 2021,
      tags: ['html', 'sass', 'JS'],
    },
    {
      id: getId(),
      title: 'natours',
      link: 'https://natours-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/natours',
      description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      img: 'https://user-images.githubusercontent.com/68834718/210223114-b4f64b44-2501-49c9-9fb7-b8e53fe654c6.png',
      year: 2021,
      tags: ['html', 'sass', 'JS'],
    }
  ],
};
