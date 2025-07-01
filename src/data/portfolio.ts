export const portfolioData = {
  personal: {
    name: "Quoi",
    title: "Full Stack Developer",
    email: "hvquoi.cv@gmail.com",
    phone: "+84 38 208 4246",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    avatar:
      "/personal-pic.jpg",
    experiences: "2 years",
    bio: "in frontend development using ReactJS, NextJS, VueJS, I specialize in building dynamic, responsive user interfaces that enhance user experience. Additionally, I have hands-on experience in backend development with ExpressJS and NestJS, allowing me to contribute effectively to full-stack projects.",
  },
  skills: [
    {
      group: "Programming languages",
      skills: [
        {
          name: "Javascript",
          image: "/skills/javascript.svg"
        },
        {
          name: "Typescript",
          image: "/skills/typescript.svg"
        }
      ]
    },
    {
      group: "Frontend",
      skills: [
        {
          name: "ReactJs",
          image: "/skills/react.svg"
        },
        {
          name: "NextJs",
          image: "/skills/nextjs.svg"
        },
        {
          name: "Vue 3",
          image: "/skills/vue.svg"
        },
        {
          name: "Redux",
          image: "/skills/redux.svg"
        },
        {
          name: "Pinia",
          image: "/skills/pinia.svg"
        },
        {
          name: "React Query",
          image: "/skills/react-query.svg"
        },
        {
          name: "Tailwind CSS",
          image: "/skills/tailwindcss.svg"
        },
        {
          name: "Element Plus",
          image: "/skills/element.svg"
        },
        {
          name: "Ant Design",
          image: "/skills/ant.svg"
        },
        {
          name: "Shadcn",
          image: "/skills/shadcn-ui.svg"
        },
        {
          name: "Sass",
          image: "/skills/sass.svg"
        },
      ]
    },
    {
      group: "Backend",
      skills: [
        {
          name: "NodeJs",
          image: "/skills/nodejs.svg"
        },
        {
          name: "NestJs",
          image: "/skills/nestjs.svg"
        },
        {
          name: "Express",
          image: "/skills/express.svg"
        },
        {
          name: "Colyseus",
          image: "/skills/colyseus.png"
        }
      ]
    },
    {
      group: "Database",
      skills: [
        {
          name: "Postgre SQL",
          image: "/skills/postgresql.svg"
        },
        {
          name: "MongoDB",
          image: "/skills/mongodb.svg"
        },
      ]
    },
    {
      group: "Other",
      skills: [
        {
          name: "Docker",
          image: "/skills/docker.svg"
        },
        {
          name: "Vite",
          image: "/skills/vitejs.svg"
        },
        {
          name: "Nginx",
          image: "/skills/nginx.svg"
        },
      ]
    },
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce platform với React, Node.js, và MongoDB. Tích hợp payment gateway và admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "/skeleton-project.jpg",
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
      image:
        "/skeleton-project.jpg",
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
      image:
        "/skeleton-project.jpg",
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://your-weather-demo.com",
      featured: false,
    },
  ],
  experience: [
    {
      company: "Tech Startup",
      position: "Frontend Developer",
      duration: "2023 - Present",
      description:
        "Phát triển và maintain các web applications sử dụng React, Next.js. Collaborate với team để deliver high-quality products.",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2022 - 2023",
      description:
        "Xây dựng websites và web applications cho các clients. Chuyên về e-commerce và business websites.",
    },
  ],
};
