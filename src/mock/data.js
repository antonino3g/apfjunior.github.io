import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Antonino | Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, meu nome é',
  name: 'Antonino',
  subtitle: 'e sou um Software Developer Jr.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Crio aplicações com as tecnologias Node.js e React.js. Na parte desenvolvimento Mobile, trabalho com React Native e recentemente, estou estudando um pouco sobre Flutter. ',
  paragraphTwo:
    'Já trabalho com Suporte em TI há 04 anos, mas atualmente estou procurando uma oportunidade profissional nessas áreas. ',
  paragraphThree:
    'Gosto de resolver problemas e estudar novas tecnologias. Também gosto de escrever, sou entusiasta GNU/Linux e do conhecimento livre e faixa roxa de jiu-jitsu.',
  blog: 'https://antoninopraxedes.wordpress.com/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covid-19.png',
    title: 'Simple Tracker Covid-19',
    info: 'Página com as estatísticas em tempo real dos casos de COVID-19 no mundo.',
    info2: 'Feito em React.js',
    url: 'https://covid19website.netlify.app/',
    repo: 'https://github.com/apfjunior/simple-tracker-covid19/',
  },
  {
    id: nanoid(),
    img: 'video-maker.png',
    title: 'Video Maker',
    info:
      'Projeto open source para fazer vídeos automatizados com a utilização da API de inteligência artificial Watson (IBM), API Machining Learn da Algorithmia, API Google Imagens e Search.',
    info2: 'Feito em Node.js.',
    url: '',
    repo: 'https://github.com/apfjunior/video-maker/',
  },
  {
    id: nanoid(),
    img: 'create-pdf.png',
    title: 'Create PDF - Empresa CTIS',
    info:
      'Bseia-se em um protótipo genérico para um formulário do técnico de campo de TI da empresa SONDA/CTIS',
    info2: 'Feito em Node.js e React.js.',
    url: '',
    repo: 'https://github.com/apfjunior/create-pdf',
  },
  {
    id: nanoid(),
    img: 'be-the-hero.png',
    title: 'Be The Hero',
    info: 'Aplicação Web e Mobile de arrecadação de fundos para ONGs de apoio aos animais.',
    info2: 'API feita em Node.js, Web com React.js e mobile com React Native.',
    url: '',
    repo: 'https://github.com/apfjunior/be-the-hero',
  },
  {
    id: nanoid(),
    img: 'github-explorer.png',
    title: 'Github Explorer',
    info: 'Aplicação destinada a busca de repositórios utilizando a API do GitHub.',
    info2: '',
    url: 'https://github-explorer-apfjunior.netlify.app/',
    repo: 'https://github.com/apfjunior/github-explorer',
  },
  {
    id: nanoid(),
    img: 'arch-linux.png',
    title: 'Arch Linux Post Install',
    info: 'Criação de um script de pós-instalação do Arch Linux.',
    info2: '',
    url: '',
    repo: 'https://github.com/apfjunior/arch-linux-post-install/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/antoninopraxedes/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/apfjunior',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
