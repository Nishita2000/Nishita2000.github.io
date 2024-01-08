// gitprofile.config.js

const config = {
  github: {
    username: 'Nishita2000', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Student_ID_Card','Quiz_App','todo_app','190041105-CSE-4302','Timer_App','demo2',], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sadiaalamnishita',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'sadiaalam17',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    codeforces: 'Nishita2000',
    email: 'sadiaalam@iut-dhaka.edu',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1LSdETyRHko8dR-gOnYWuulCUnVQ7m927/view?usp=drivesdk', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'Python',
    'Java',
    'JavaScript',
    'JavaFX',
    'Flutter',
    'Node.js',
    'MySQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Islamic University of Technology',
      position: 'Assistant General Secretary Management (IUTCS)',
      from: 'September 2022',
      to: 'August 2023',
      companyLink: '',
    },
    {
      company: 'Battery Low Interactive Ltd.',
      position: 'Software Engineer (Intern)',
      from: 'May 2023',
      to: 'June 2023',
      companyLink: 'https://batterylowinteractive.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Islamic University of Technology (IUT)',
      degree: 'BSc in CSE',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Chittagong College',
      degree: 'HSC',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'Bangladesh Mahila Samity Girls High School & College',
      degree: 'SSC',
      from: '2005',
      to: '2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Mood-Movie',
      description:
        'Mood Movie is an innovative movie recommendation application powered by machine learning. Built with a Convolutional Neural Network (CNN) model, integrated with the TMDB API, and developed using NextJS, the app offers personalized movie suggestions based on the users emotions.',
      // imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/shahnewaz-labib/mood-movie',
    },
    {
      title: 'Musicana',
      description:
        'Musicana is a versatile music player app developed using Flutter and integrated with the Spotify API. Enjoy a seamless music experience with features like daily featured songs and albums, the ability to search for specific songs, and create and save playlists.',
     // imageUrl: 'https://github.com/Nishita2000/Nishita2000.github.io/blob/main/public/app_logo.png/250x250',
      link: 'https://github.com/nabliha-11/Music_App',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'sadiaalam17', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'black',
      'dracula',
      'night',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
