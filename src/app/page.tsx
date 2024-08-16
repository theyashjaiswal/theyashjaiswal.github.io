"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import RetroGrid from "@/components/magicui/retro-grid";
import SparklesText from "@/components/magicui/sparkles-text";
import { Separator } from "@/components/ui/separator";
import { CoolMode } from "@/components/magicui/cool-mode";
import {
  ArrowDownToLine,
  ArrowUp,
  CirclePlay,
  FileDown,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Send,
  SendHorizontal,
  X,
} from "lucide-react";
import {
  FaAngular,
  FaAws,
  FaJava,
  FaNode,
  FaPython,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import InstagramEmbed from "./instagram";
import { useEffect, useState } from "react";
import * as React from "react";
import { useTheme } from "next-themes";
import { buttonVariants } from "@/components/ui/button";
import PulsatingButton from "@/components/ui/pulsating-button";

type FormData = {
  message: string;
};

const BLUR_FADE_DELAY = 0.04;

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function Page() {
  const [formData, setFormData] = useState<FormData>({ message: "" });

  const writerRef = React.useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [msgsLoaded, setMsgsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userTyping, setUserTyping] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const containerRef = React.useRef(null);
  const endOfMessagesRef = React.useRef(null);

  const [userData, setUserData] = useState({
    userAgent: "",
    referrer: "",
    screenResolution: "",
    language: "",
    timezone: "",
    deviceType: "",
    location: "",
    ip: "",
    userTime: "",
    date: "",
  });

  useEffect(() => {
    // Get user agent
    const userAgent = navigator.userAgent;

    // Get referrer URL
    const referrer = document.referrer;

    // Get screen resolution and viewport size
    const screenResolution = `${window.screen.width}x${window.screen.height}`;

    // Get language and locale
    const language = navigator.language;

    // Get timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Determine device type
    const deviceType = /Mobi|Android/i.test(userAgent) ? "Mobile" : "Desktop";

    const userTime = new Date().toLocaleTimeString();

    const date = new Date().toDateString();

    // Get IP address and location (Using a third-party service like ipify)
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setUserData((prevData) => ({
          ...prevData,
          ip: data.ip,
        }));

        // Optionally, use another API to get geolocation from the IP
        fetch(`https://ipapi.co/${data.ip}/json/`)
          .then((response) => response.json())
          .then((locationData) => {
            setUserData((prevData) => ({
              ...prevData,
              location: `${locationData.city}, ${locationData.country}`,
            }));
          });
      });

    // Set all captured data
    setUserData((prevData) => ({
      ...prevData,
      userAgent,
      referrer,
      screenResolution,
      language,
      timezone,
      deviceType,
      userTime,
      date,
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (userMessage.trim() === "") {
        return;
      }
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.trim(),
          userData: userData,
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        addMessage(userMessage);
        // Reset form or show success message
        setFormData({ message: "" });
      } else {
        console.error("Failed to submit form");
        // Show error message
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const Writing = () => (
    <div
      className={`flex items-center justify-end h-10 w-24 bg-gray-200 rounded  order-last  mt-4`}
    >
      <div
        className={`dot  ${
          theme === "dark" ? "bg-black" : "bg-gray-400"
        } opacity-30 h-3.5 w-3.5 rounded-full mx-2 animate-bounce delay-0`}
      ></div>
      <div
        className={`dot ${
          theme === "dark" ? "bg-black" : "bg-gray-400"
        } opacity-30 h-3.5 w-3.5 rounded-full mx-2 animate-bounce delay-150`}
      ></div>
      <div
        className={`dot ${
          theme === "dark" ? "bg-black" : "bg-gray-400"
        } opacity-30 h-3.5 w-3.5 rounded-full mx-2 animate-bounce delay-300`}
      ></div>
    </div>
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // or event.code === 'Enter'
      event.preventDefault(); // Prevents the default action (e.g., form submission)
      console.log("Enter key pressed");
      handleSubmit(event);

      // Handle the Enter key press here
    }
  };
  const handleClose = () => {
    setIsOpen(false);
    console.log("Dialog was closed");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openChatDialog = () => {
    const showMessage = (id) => {
      const message = document.getElementById(`message-${id}`);
      const imageLogo = document.getElementById(`imageLogo-${id}`);
      if (message) {
        message.style.display = "block";
        imageLogo.style.display = "inline-flex";
        doBounce(message, 1, "4px", 150);
      }
    };

    const doBounce = (element, times, distance, speed) => {
      for (let i = 0; i < times; i++) {
        element.animate(
          [{ marginTop: `-=${distance}` }, { marginTop: `+=${distance}` }],
          { duration: speed }
        );
      }
    };

    const start = () => {
      const messages = document.querySelectorAll(".message");
      let timeOut = 1000;

      messages.forEach((_, index) => {
        if (index + 1 === messages.length) {
          setTimeout(() => {
            if (writerRef.current) {
              writerRef.current.remove();
            }
          }, timeOut);
        }
        setTimeout(() => {
          showMessage(index + 1);
        }, timeOut);
        timeOut += 1000;
      });
    };

    start();
    setTimeout(() => {
      setMsgsLoaded(true);
    }, 3000);

    const myElement: any = document.getElementById("replay");
    if (myElement) {
      myElement.onclick = start;
    }
  };

  let openDialog: boolean = false;
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStoryClicked, setIsStoryClicked] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  const addMessage = (userMessage) => {
    if (userMessage.trim() === "") {
      return;
    }
    const newDiv = document.createElement("div");
    const innerNewDiv = document.createElement("div");
    newDiv.className =
      "message bg-[#0E7AFE] rounded flex flex-col text-base max-w-sm px-2 pt-1 order-1 text-white";
    innerNewDiv.className =
      "relative rounded leading-5 max-w-1/4 p-2 break-words";
    innerNewDiv.innerText = userMessage;
    newDiv.appendChild(innerNewDiv);

    const finalDiv = document.createElement("div");
    const finalGrandDiv = document.createElement("div");
    const imgDiv = document.createElement("img");
    finalDiv.className =
      "circle relative h-10 w-10 shrink-0 overflow-hidden rounded-full order-2";
    finalGrandDiv.className = "flex flex-row gap-2 items-end";
    imgDiv.src =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4=";
    imgDiv.className =
      "aspect-square h-full w-full dark:bg-white/80 bg-black/10";
    finalDiv.append(imgDiv);
    finalGrandDiv.append(finalDiv);
    finalGrandDiv.appendChild(newDiv);

    if (containerRef.current) {
      containerRef.current.appendChild(finalGrandDiv);
    }
    setTimeout(() => {
      setUserMessage("");
    }, 100);
  };

  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleStoryView = () => {
    setIsStoryClicked(true);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  const handleStoryClose = () => {
    setIsStoryClicked(false);
    setIsLoaded(false);
  };

  const getIconNameFromSkill = (skill: any) => {
    switch (skill.toLowerCase()) {
      case "angular":
        return <FaAngular />;
      case "react":
        return <FaReact />;
      case "node.js":
        return <FaNode />;
      case "typescript":
        return <SiTypescript />;
      case "next.js":
        return <RiNextjsFill />;
      case "java":
        return <FaJava />;
      case "javascript":
        return <IoLogoJavascript />;
      case "python":
        return <FaPython />;
      case "postgres":
        return <BiLogoPostgresql />;
      case "mysql":
        return <SiMysql />;
      case "mongodb":
        return <SiMongodb />;
      case "firebase":
        return <IoLogoFirebase />;
      case "docker":
        return <FaDocker />;
      case "aws":
        return <FaAws />;
      case "google cloud platform":
        return <SiGooglecloud />;
      // Add more cases as needed
      default:
        return <TbWorld />;
    }
  };
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="fixed inset-0">{/* <RetroGrid /> */}</div>
      <section id="hero">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <CoolMode>
            <div className="gap-2 flex justify-space-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                {/* <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              /> */}
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="flex flex-row flex-wrap gap-1">
                    <p>Software Engineer 👨🏽‍💻 </p>
                    <p>{" | "}</p>
                    <p>Music Artist 🎙️🎹🎵</p>
                  </div>
                  <div className="flex flex-row flex-wrap gap-1">
                    <p>📚 CS @ Dal 🐯</p>
                    <p> | </p>
                    <p>📍 🌎 🇮🇳 ✈️ 🇨🇦</p>
                  </div>
                  {/* <div className="flex flex-row flex-wrap gap-1 pt-2">
                    <Button style={{
                      backgroundColor: 'rgb(0, 149, 246)', // Primary button color
                      color: 'white',
                    }}
                      className="hover:bg-blue-600 gap-2 text-white font-bold py-2 px-4 rounded text-xs"
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgb(24, 119, 242)')}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgb(0, 149, 246)')}
                      onClick={() => {
                        window.location.href = 'https://www.instagram.com/theyashjaiswal';
                      }}
                    >Follow <Instagram className="size-4" /></Button>
                  </div> */}
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                {/* <Avatar className={`size-28 border bg-gradient-to-tr from-yellow-300 to-fuchsia-800 p-1 rounded-full`} onClick={handleStoryView}>
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="bg-white block rounded-full p-1 hover:-rotate-1 transform transition duration-300" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>  */}

                <div className="circle size-32" onClick={handleStoryView}>
                  <svg
                    className={`circle-svg ${
                      isStoryClicked
                        ? "animate-spin"
                        : "animate-none circle-still"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient
                        id="gradient-stroke"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#8a3ab9", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#cd486b", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      stroke="url(#gradient-stroke)"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                  <img
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="circle-img aspect-squar bg-white block rounded-full p-1 hover:-rotate-1 transform transition duration-300"
                    style={{ height: `7.25rem`, width: `7.25rem` }}
                  />
                </div>
              </BlurFade>
              {isLoaded ? (
                <>
                  <div className="fixed min-h-full inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div>
                  <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
                    <div
                      className="fixed right-[0.15rem] hover:text-gray-400"
                      onClick={handleStoryClose}
                    >
                      {" "}
                      <X />
                    </div>

                    <InstagramEmbed permalink="https://www.instagram.com/reel/CwCNg8ih-XJ/?utm_source=ig_embed&amp;utm_campaign=loading" />
                  </div>
                </>
              ) : null}
            </div>
          </CoolMode>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company + id}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => {
              return (
                <>
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge
                      className="w-auto h-9 items-center inline-flex"
                      key={skill}
                    >
                      {skill} &nbsp; {getIconNameFromSkill(skill)}
                    </Badge>
                  </BlurFade>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-8 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 mt-0">
                {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my{" "}
                  <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent">
                    Projects
                  </span>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on variety of projects, from simple websites
                  to complex web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-6xl mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full pb-0">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3 mt-0">
              {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div> */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <SparklesText text="Get in Touch" />
              </h2>
              <div onClick={handleClick}>
                {/* <div className="space-y-1 text-lg">
                  {`Let's Start Our Next Project Together!`}
                </div> */}
                <div className="">
                  <AnimatedGradientText>
                    🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                      )}
                    >
                      Let's Start Our Next Project Together!
                    </span>
                    <CirclePlay className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedGradientText>
                </div>
                {/* <Separator className="my-4" /> */}
                <div className="flex h-5 justify-center space-x-4 my-4 text-sm items-center">
                  <Link
                    href="mailto:yashjaiswalofficial@gmail.com"
                    className=""
                  >
                    <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                      {" "}
                      <Mail style={{ width: "1.75rem", height: "1.75rem" }} />
                    </div>
                  </Link>{" "}
                  <Separator orientation="vertical" />
                  <Link href="sms:+17828822600" className="">
                    <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                      <Send style={{ width: "1.75rem", height: "1.75rem" }} />
                    </div>
                  </Link>{" "}
                  <Separator orientation="vertical" />
                  <Link href="tel:+17828822600" className="">
                    <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                      <Phone style={{ width: "1.75rem", height: "1.75rem" }} />
                    </div>
                  </Link>{" "}
                  <Separator orientation="vertical" />
                  <Link
                    href="https://wa.me/message/LT5SX6EWLESIN1"
                    className=""
                  >
                    <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                      <FaWhatsapp
                        style={{ width: "1.75rem", height: "1.75rem" }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <footer className="flex justify-center">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          <p className="pt-4 mt-4 text-gray-400 text-center text-sm">
            Built with{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui
            </a>
            ,{" "}
            <a
              href="https://magicui.design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              magic ui
            </a>
            . Licensed under the{" "}
            <a
              href="https://github.com/dillionverma/portfolio/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            .
          </p>
        </BlurFade>
      </footer>

      <div>
        {isOpen ? (
          <>
            <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div>
            <div className="fixed h-[100%]  overflow-hidden left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
              <div
                className="fixed right-[0.20rem] top-[0.20rem] hover:text-gray-400"
                onClick={() => {
                  setIsOpen(false);
                  if (open) {
                    setMsgsLoaded(false);
                  }
                }}
              >
                {" "}
                <X />
              </div>
              <div className="flex-col overflow-scroll">
                <div className="text-left p-6 flex flex-col gap-4 w-fit">
                  <div className="flex flex-row gap-2 items-end">
                    <div
                      id="imageLogo-1"
                      className="circle relative  h-10 w-10 shrink-0 overflow-hidden rounded-full hidden"
                    >
                      <img
                        alt={DATA.name}
                        src={DATA.avatarUrl}
                        className="aspect-square h-full w-full"
                      />
                    </div>
                    <div
                      className={`message w-max hidden bg-gray-200 rounded max-w-sm px-2 pt-1 ${
                        theme === "dark" ? "text-black" : ""
                      } font-roboto text-base rounded`}
                      id="message-1"
                    >
                      <div className="relative rounded leading-5 max-w-1/4 p-2 break-words">
                        Hi, there!
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 items-end">
                    <div
                      id="imageLogo-2"
                      className="circle relative h-10 w-10 shrink-0 overflow-hidden rounded-full hidden"
                    >
                      <img
                        alt={DATA.name}
                        src={DATA.avatarUrl}
                        className="aspect-square h-full w-full"
                      />
                    </div>
                    <div
                      className={`message w-max hidden bg-gray-200 rounded max-w-sm px-2 pt-1 ${
                        theme === "dark" ? "text-black" : ""
                      }  font-roboto text-base rounded`}
                      id="message-2"
                    >
                      <div className="relative rounded leading-5 max-w-1/4 p-2 break-words ">
                        <div className="self-start">Contact me at{"  "}</div>
                        <a
                          href="mailto:yashjaiswalofficial@gmail.com"
                          className="text-blue-700"
                          target="blank"
                        >
                          yashjaiswalofficial@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 items-end">
                    <div
                      id="imageLogo-3"
                      className="circle relative h-10 w-10 shrink-0 overflow-hidden rounded-full hidden"
                    >
                      <img
                        alt={DATA.name}
                        src={DATA.avatarUrl}
                        className="aspect-square h-full w-full"
                      />
                    </div>
                    <div
                      className={`message w-max hidden bg-gray-200 rounded  max-w-sm px-2 pt-1 ${
                        theme === "dark" ? "text-black" : ""
                      }  font-roboto text-base rounded`}
                      id="message-3"
                    >
                      <div className="relative rounded leading-5 max-w-1/4 p-2 break-words">
                        Otherwise, feel free to drop me a message below 📤
                      </div>
                    </div>
                  </div>

                  <div className="writing-container flex items-center justify-start">
                    {!msgsLoaded ? <Writing /> : null}
                  </div>
                </div>
                <div
                  className="flex flex-col justify-end items-end gap-4"
                  ref={containerRef}
                >
                  {" "}
                </div>
                <div>
                  {" "}
                  {userTyping ? (
                    <div
                      className="flex justify-end content-end items-end"
                      ref={endOfMessagesRef}
                    >
                      <Writing />
                    </div>
                  ) : null}{" "}
                </div>
              </div>

              <div className="footer flex flex-row sm:justify-center justify-center w-full items-end">
                <form
                  id="chat-form"
                  className={`flex items-center p-2 transition-colors ${
                    darkMode ? "bg-gray-800" : ""
                  } relative  w-full`}
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    id="user-input"
                    name="message"
                    className={`flex-1 border px-4 py-2 rounded-full text-sm outline-none  text-${
                      theme === "dark" ? "white" : "black"
                    } ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-200 border-gray-400"
                    } transition-colors`}
                    placeholder="Type your message..."
                    value={userMessage}
                    onChange={(e) => {
                      setUserMessage(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      setUserMessage(e.currentTarget.value);
                      endOfMessagesRef?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setUserTyping(true);
                      setTimeout(() => {
                        setUserTyping(false);
                      }, 1200);
                    }}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    type="submit"
                    className={`send bg-[#0E7AFE] text-${
                      theme === "dark" ? "black" : "white"
                    } font-semibold w-8 h-8 rounded-full flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2`}
                  >
                    <ArrowUp
                      className="transition-transform duration-300 ease-in-out hover:text-gray-200"
                      onClick={() => {
                        addMessage(userMessage);
                      }}
                    />
                  </button>
                </form>
              </div>

              {/* <InstagramEmbed permalink="https://www.instagram.com/reel/CwCNg8ih-XJ/?utm_source=ig_embed&amp;utm_campaign=loading" /> */}
            </div>
          </>
        ) : null}

        <PulsatingButton
          className="flex p-2 z-30 shrink-0 grow-0 justify-around w-10 h-10 rounded-full
                  fixed bottom-20 right-5 bg-white/70 text-black dark:text-white dark:bg-black/50
                  text-sm"
          onClick={() => {
            setIsOpen(true);
            setTimeout(() => {
              openChatDialog();
            }, 1000);
          }}
        >
          <div className="fixed bottom-[4.820rem] right-[0.925rem]">
            <div
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                `size-12 hover:text-${
                  theme == "dark" ? "white" : "dark"
                } hover:bg-${
                  theme == "dark" ? "black" : "white"
                } transition-transform duration-300 ease-in-out hover:scale-125`
              )}
            >
              <MessageCircle style={{ width: "1.5rem", height: "1.5rem" }} />
            </div>
          </div>
        </PulsatingButton>
      </div>
    </main>
  );
}
