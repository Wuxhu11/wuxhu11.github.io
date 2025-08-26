// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "\* indicates my student, † indicates equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Theoretically profound and practically feasible",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Experience, Interest, and Future",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Leverage people&#39;s strengths and make up for their shortcomings",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teamg/";
          },
        },{id: "nav-funding",
          title: "Funding",
          description: "Work hard",
          section: "Navigation",
          handler: () => {
            window.location.href = "/funding/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "Shape a Better World",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "news-our-paper-on-ai-for-decision-making-is-accepted-to-ieee-tsc-ccf-a-in-collaboration-with-prof-han-yu-prof-giuliano-casale-and-prof-guanyu-gao-sparkles",
          title: 'Our paper on AI for decision-making is accepted to IEEE TSC (CCF A),...',
          description: "",
          section: "News",},{id: "news-we-are-organizing-the-international-workshop-on-federated-learning-with-generative-ai-at-ijcai-2025-fedgenai-ijcai-39-25-together-with-prof-jindong-wang-dr-lingjuan-lyu-dr-dimitrios-dimitriadis-and-prof-han-yu-sparkles",
          title: 'We are organizing the International Workshop on Federated Learning with Generative AI at...',
          description: "",
          section: "News",},{id: "news-two-papers-on-collaborative-federated-learning-and-vision-language-models-are-accepted-to-icml-2025-ccf-a-in-collaboration-with-prof-han-yu-prof-qicheng-lao-dr-tiantian-he-dr-qiqi-liu-prof-yew-soon-ong-and-prof-yaochu-jin-sparkles",
          title: 'Two papers on collaborative federated learning and vision language models are accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-on-personalized-federated-learning-is-accepted-to-iccv-2025-ccf-a-in-collaboration-with-dr-qiqi-liu-prof-yaochu-jin-dr-lingjuan-lyu-and-prof-han-yu-sparkles",
          title: 'Our paper on personalized federated learning is accepted to ICCV 2025 (CCF A),...',
          description: "",
          section: "News",},{id: "projects-federated-learning",
          title: 'Federated Learning',
          description: "Free-riding, market competition, collaboration formation, measuring data heterogeneity, personalization, multi-task learning, federated foundation models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-miscellaneous",
          title: 'Miscellaneous',
          description: "Mathematical optimization, algorithmic game theory, information security",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-scenery",
          title: 'Scenery',
          description: "Overseas cities where I ever stayed",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-machine-learning",
          title: 'Machine Learning',
          description: "Foundation models, fine-tuning, prompt-tuning, neural network, reinforcement learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%75%78%68%75%31%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/https://orcid.org/0000-0003-3699-5241", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
