// route has to have the same name as videoFile

export default [
  {
    title: 'Posty',
    route: 'posty',
    videoFile: 'posty',
    description:
      'A social media platform. It is a full stack application with all the necessary functionality as well as some neat features such as AI generated profile picture.',
    demoLink: '',
    sourceLink: '',
    technologies: [
      'typescript',
      'reactNativeWeb',
      'apollo',
      'express',
      'kubernetes',
    ],
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
