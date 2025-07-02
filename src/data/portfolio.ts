export const portfolioData = {
  personal: {
    name: "Quoi",
    title: "Full Stack Developer",
    email: "hvquoi.cv@gmail.com",
    phone: "+84 38 208 4246",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    avatar: "/personal-pic.jpg",
    experiences: "2 years",
    bio: "in frontend development using ReactJS, NextJS, VueJS, I specialize in building dynamic, responsive user interfaces that enhance user experience. Additionally, I have hands-on experience in backend development with ExpressJS and NestJS, allowing me to contribute effectively to full-stack projects.",
  },
  skills: [
    {
      group: "Programming languages",
      skills: [
        {
          name: "Javascript",
          image: "/skills/javascript.svg",
        },
        {
          name: "Typescript",
          image: "/skills/typescript.svg",
        },
      ],
    },
    {
      group: "Frontend",
      skills: [
        {
          name: "ReactJs",
          image: "/skills/react.svg",
        },
        {
          name: "NextJs",
          image: "/skills/nextjs.svg",
        },
        {
          name: "Vue 3",
          image: "/skills/vue.svg",
        },
        {
          name: "Redux",
          image: "/skills/redux.svg",
        },
        {
          name: "Pinia",
          image: "/skills/pinia.svg",
        },
        {
          name: "React Query",
          image: "/skills/react-query.svg",
        },
        {
          name: "Tailwind CSS",
          image: "/skills/tailwindcss.svg",
        },
        {
          name: "Element Plus",
          image: "/skills/element.svg",
        },
        {
          name: "Ant Design",
          image: "/skills/ant.svg",
        },
        {
          name: "Shadcn",
          image: "/skills/shadcn-ui.svg",
        },
        {
          name: "Sass",
          image: "/skills/sass.svg",
        },
      ],
    },
    {
      group: "Backend",
      skills: [
        {
          name: "NodeJs",
          image: "/skills/nodejs.svg",
        },
        {
          name: "NestJs",
          image: "/skills/nestjs.svg",
        },
        {
          name: "Express",
          image: "/skills/express.svg",
        },
        {
          name: "Colyseus",
          image: "/skills/colyseus.png",
        },
      ],
    },
    {
      group: "Database",
      skills: [
        {
          name: "Postgre SQL",
          image: "/skills/postgresql.svg",
        },
        {
          name: "MongoDB",
          image: "/skills/mongodb.svg",
        },
      ],
    },
    {
      group: "Other",
      skills: [
        {
          name: "Docker",
          image: "/skills/docker.svg",
        },
        {
          name: "Vite",
          image: "/skills/vitejs.svg",
        },
        {
          name: "Nginx",
          image: "/skills/nginx.svg",
        },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce platform với React, Node.js, và MongoDB. Tích hợp payment gateway và admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/skeleton-project.jpg",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với real-time collaboration, drag & drop, và team management features.",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      image: "/skeleton-project.jpg",
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://your-taskmanager-demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard thời tiết với data visualization, forecasting, và location-based weather alerts.",
      tech: ["React", "D3.js", "Weather API", "Tailwind"],
      image: "/skeleton-project.jpg",
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://your-weather-demo.com",
      featured: false,
    },
  ],
  experiences: [
    {
      company: "WOAY.vn",
      image: "/experiences/woay.png",
      position: "Frontend Developer",
      duration: "May 2024 - Jun 2025",
      description: [
        "Woay.vn is a gamification SaaS platform that empowers businesses to create and manage interactive marketing campaigns through engaging mini-games.",
        "At Woay, I contributed as both a Frontend and Full-stack Developer on multiple projects for major clients. I developed responsive user interfaces, optimized performance for high concurrent users, and implemented scalable backend services. My work included building features like game mechanics, real-time leaderboards, and campaign management tools, all aimed at enhancing customer engagement.",
        "Technologies: Vue 3, Pinia, TypeScript, React.js, Redux, Tailwind CSS, SCSS, Node.js, NestJS, REST API, Redis, Docker, Colyseus, Nginx",
      ],
    },
    {
      company: "Nexlab technology",
      image: "/experiences/nexlab.png",
      position: "Frontend Developer",
      duration: "May 2023 - Feb 2024",
      description: [
        "Nexlab Technology is a technology company specializing in delivering customized software solutions and digital products for enterprises across various industries.",
        "At Nexlab, I worked as a Frontend Developer on the DIVA project, where I designed and implemented dynamic user interfaces using Vue 3, Pinia, TypeScript, and GraphQL. My contributions focused on enhancing system stability and improving the user experience, helping reduce system failures by 15%. I collaborated closely with backend developers and product teams to deliver reliable, scalable web applications tailored to client needs.",
        "Technologies: Vue 3, Pinia, TypeScript, GraphQL",
      ],
    },
  ],
};
