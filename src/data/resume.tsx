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
    "Software engineer[ with 3+ years of full-stack development experience. I pursued a master’s degree in Computer Science and have worked at various tech companies (service and product startup).](#/education) [I am also a passionate vocalist, mix engineer and make music.](/music)",
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
      description: `Contributed to the development and enhancement of the XO Platform, and XO Contact Centre focusing on scalability and user experience.
\n Products: Unified XO Platform, XO Contact Center
\n Skills: Angular 15, RxJS, TypeScript, JavaScript, WebRTC, WebSockets, Npm 
`,
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
      description: `Significantly Contributed to the analysis, design and development of the 'Change My Return' feature on the Canada Revenue Agency's My Account Portal. Played a key role in implementing the front-end using Angular and integrating back-end services with Java.
\nThis feature improved the user experience by making it easier for taxpayers to modify their return submissions and claims, enhancing overall platform efficiency and usability.
\nOverview - https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals/change-return.html
\nTech stack: Angular, Java, SonarQube, Jenkins, Gittea, Maven, JAX-RS`,
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
      description: `Developed features and enhanced an internal client-facing web application, creating new dashboard functionalities and resolving bugs to deliver a more robust, user-friendly interface, significantly boosting
client satisfaction.
\nTech stack: Angular, Java`,
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
      description: `•Migrated legacy Java web services to MuleSoft’s Anypoint platform, streamlining data integration and enhancing API connectivity.
\n•Designed and developed RESTful APIs using Java and MuleSoft Anypoint Platform, enabling efficient communication between disparate systems and reducing integration time by 40%.
\n•Implemented complex data transformations and mappings using DataWeave 2.0, improving data processing efficiency and accuracy.
\n•Developed robust exception handling mechanisms in Java to improve error management and system reliability, achieving a 95% reduction in system downtime.
\n•Optimized Java code and MuleSoft APIs, resulting in a 30% reduction in latency by improving algorithm efficiency, data handling, and system responsiveness.
\n•Delivered knowledge transfer sessions for newly onboarded members, boosting team efficiency by 30%.
\n•Tech Stack: Java, JAX-RS, MuleSoft, Anypoint Platform, XML, SQL, IBM DB2, Rabbit MQ`,
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
        "Built a responsive SaaS product landing page template, with design inspired by Tribe.",
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
      video: "/SaasTemplate.webm",
    },
    {
      title: "Exclusive Signup - Landing Page",
      href: "https://loch-landing-page-one.vercel.app",
      dates: "Nov 2023 – Dec 2023",
      active: true,
      description:
        "I designed and developed a sleek, responsive landing page as part of a technical coding challenge for a US-based startup, showcasing my ability to deliver polished, high-quality web solutions under tight assessment conditions.",
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
