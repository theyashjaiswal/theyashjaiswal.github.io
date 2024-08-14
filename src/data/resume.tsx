import { Icons } from "@/components/icons";
import {
  CodeIcon,
  HomeIcon,
  Music4,
  NotebookIcon,
  FileDown,
} from "lucide-react";

export const DATA = {
  name: "Yash Jaiswal",
  initials: "YJ",
  url: "https://yashjaiswal.com",
  location: "Halifax, NS, CA",
  locationLink: "https://maps.app.goo.gl/rHe1MmGL5xBX8y1T9",
  description: "Software Engineer 👨🏽‍💻 x Music Artist 🎙️🎹🎵",
  summary:
    "Software engineer[ with 3+ years of full-stack development experience. I pursued a master’s degree in Computer Science and have worked at various tech companies (service and product startup).](#/education) [I am also a passionate vocalist, music producer, and mix engineer.](/music)",
  avatarUrl: "/me.jpg",
  skills: [
    "Angular",
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Java",
    "Python",
    "MySQL",
    "Postgres",
    "MongoDB",
    "Docker",
    "AWS",
    "Google Cloud Platform",
    "Firebase",
  ],
  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      iconAnimationStyle: "animate-none",
      label: "Home",
    },
    {
      href: "/resume.pdf",
      icon: FileDown,
      iconAnimationStyle: "animate-bounceSlow",
      label: "Download Resume",
    },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    {
      href: "/#projects",
      icon: CodeIcon,
      iconAnimationStyle: "animate-none",
      label: "Projects",
    },
    {
      href: "/music",
      icon: Music4,
      iconAnimationStyle: "animate-none",
      label: "Music",
    },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/theyashjaiswal",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/theyashjaiswal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      Youtube: {
        name: "Youtube",
        url: "http://www.youtube.com/channel/UClK_OOx05LPM3ZoD-On4eFw",
        icon: Icons.youtube,
        navbar: true,
      },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "Kore.ai",
      href: "https://kore.ai/",
      badges: [],
      location: "Hyderabad, India (On-site)",
      title: "Software Engineer",
      logoUrl: "/kore-ai.svg",
      start: "Dec 2023",
      end: "Apr 2024",
      description: "",
    },
    {
      company: "Canada Revenue Agency",
      badges: [],
      href: "https://www.canada.ca/en/revenue-agency/",
      location: "Halifax, Canada (Remote)",
      title: "IT Developer (CS-02)",
      logoUrl: "/cra.jpeg",
      start: "Dec 2021",
      end: "Nov 2023",
      description: "",
    },
    {
      company: "Canada Revenue Agency",
      badges: [],
      href: "https://www.canada.ca/en/revenue-agency/",
      location: "Halifax, Canada (Remote)",
      title: "IT Developer Intern",
      logoUrl: "/cra.jpeg",
      start: "Sep 2021",
      end: "Dec 2021",
      description: "",
    },
    {
      company: "Infosys",
      href: "https://www.infosys.com/",
      badges: [],
      location: "Hyderabad, India (On-site)",
      title: "Systems Engineer",
      logoUrl: "/infosys.jpg",
      start: "Sep 2018",
      end: "Feb 2020",
      description: "",
    },
  ],
  education: [
    {
      school: "Dalhousie University",
      href: "https://www.dal.ca/",
      degree: "Master's of Applied Computer Science",
      logoUrl: "/dalu.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "Karunya Institute of Technology & Sciences",
      href: "https://www.karunya.edu/",
      degree: "Bachelor's of Technology in Computer Science & Engineering",
      logoUrl: "/kits.webp",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Saas Product - Landing Page Template",
      href: "https://saas-landing-yash.vercel.app/",
      dates: "July 2024 - Aug 2024",
      active: true,
      description:
        "Built a responsive SaaS landing page template, with design inspired by Tribe.",
      technologies: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://saas-landing-yash.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/theyashjaiswal/Saas-Landing-Page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/SaasLandingPageTemplate.webm",
    },
    {
      title: "Exclusive Signup - Landing Page",
      href: "https://loch-landing-page-one.vercel.app",
      dates: "Nov 2023 – Dec 2023",
      active: true,
      description:
        "I crafted a clean and sophisticated responsive landing page.",
      technologies: ["ReactJS", "Tailwind", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://loch-landing-page-one.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/theyashjaiswal/loch-landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/LandingPage.webm",
    },
    {
      title: "Halifax Foodie",
      href: "",
      dates: "Apr 2021 – Aug 2021",
      active: true,
      description:
        "Built a Serverless application that facilitates an online food ordering system with features such as chatbot, ML food recipe tagging, multi-factor authentication, report generation, and visualization.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Java",
        "Docker",
        "AWS Lambda functions",
        "Google Cloud Run",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/theyashjaiswal/Halifax-Foodie",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/theyashjaiswal/Halifax-Foodie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/HalifaxFoodie.webm",
    },
    {
      title: "Audio Splitter",
      href: "",
      dates: "Mar 2021 - Apr 2021",
      active: true,
      description:
        "Built a web application that splits the vocals and instrumental track from an audio file. Developed the front-end and back-end APIs, lambda functions for API authentication, and deployed the applications to AWS Services, and Heroku.",
      technologies: [
        "ReactJS",
        "Flask",
        "Celery",
        "Spleeter Library",
        "DynamoDB",
        "AWS Services",
        "Heroku",
        "Docker",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/theyashjaiswal/Cloud-Of-Duty",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/theyashjaiswal/Cloud-Of-Duty",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/AudioSplitter.webm",
    },

    {
      title: "Tutor Point",
      href: "",
      dates: "Jan 2021 - Mar 2021",
      active: true,
      description:
        "Built a web application that connects students with tutors and provides easy access to schedule appointments, book tutoring sessions, and workshops.",
      technologies: [
        "ReactJS",
        "Node.js",
        "Express.js",
        "Material Desing for Bootstrap",
        "MongoDB",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/theyashjaiswal/TutorPoint-MERN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/TutorPoint.webm",
    },
    {
      title: "Expertire",
      href: "",
      dates: "Jan 2021 - Mar 2021",
      active: true,
      description:
        "Created a MERN(MongoDB, Express, React, Node) stack web application similar to Kijiji or OLX, where the Institutes can post their requirements for the Experts and Experts can contact the Institutes based on the Postings.",
      technologies: [
        "ReactJS",
        "Node.js",
        "Express.js",
        "React Bootstrap",
        "MongoDB",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/theyashjaiswal/Expertire-MERN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Expertire.webm",
    },
    {
      title: "eyeVee",
      href: "",
      dates: "Dec 2017 – Mar 2018",
      active: true,
      description:
        "Developed a web-based platform that connects institutions with industries for easy booking of industrial visits, bridging the gap between theoretical learning and practical experience. Institutions select from available offers, while industries post visit details and availability.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "MySQL",
        "XAMPP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/theyashjaiswal/eyevee",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Eyevee.webm",
    },
  ],
} as const;
