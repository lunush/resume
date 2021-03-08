// route has to have the same name as videoFile

export default [
  {
    title: 'Posty', // Title is used at '/' as text for PortfolioLink and in the work page
    route: 'posty', // e.g. localhost:5000/posty
    videoFile: 'posty', // assets/videos/posty.webm
    description:
      'A social media platform. It is a full stack application with all the necessary functionality as well as some neat features such as AI generated profile picture.',
    demoLink: 'https://posty.lunu.sh/',
    sourceLink: 'https://github.com/lunush/posty',
    technologies: [
      'typescript',
      'reactNativeWeb',
      'mongodb',
      'kubernetes',
      'apollo',
    ], // Max 5 icons. 4 will be displayed on small screens. They must be defined at ./techIcons.ts
  },
  {
    title: 'Notes',
    route: 'notes',
    videoFile: 'notes',
    description:
      'A simple note-taking app. It is a progressive web app with persistent storage, so it can be used without internet connection.',
    demoLink: 'https://notes-blue.vercel.app/',
    sourceLink: 'https://github.com/lunush/notes',
    technologies: ['javascript', 'react', 'styledComponents', 'jest'],
  },
];
