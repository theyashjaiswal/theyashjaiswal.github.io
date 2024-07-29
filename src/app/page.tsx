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
import { Separator } from "@/components/ui/separator"
import { CoolMode } from "@/components/magicui/cool-mode";
import { CirclePlay, Mail, Phone, Send } from "lucide-react";
import { FaAngular, FaAws, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
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

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
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

  const getIconNameFromSkill = (skill: any) => {
    switch (skill.toLowerCase()) {
      case 'angular':
        return <FaAngular />;
      case 'react':
        return <FaReact />;
      case 'node.js':
        return <FaNode />;
      case 'typescript':
        return <SiTypescript />;
      case 'next.js':
        return <RiNextjsFill />;
      case 'java':
        return <FaJava />;
      case 'javascript':
        return <IoLogoJavascript />;
      case 'python':
        return <FaPython />;
      case 'postgres':
        return <BiLogoPostgresql />;
      case 'mysql':
        return <SiMysql />;
      case 'mongodb':
        return <SiMongodb />;
      case 'firebase':
        return <IoLogoFirebase />
      case 'docker':
        return <FaDocker />
      case 'aws':
        return <FaAws />;
      case 'google cloud platform':
        return <SiGooglecloud />;
      // Add more cases as needed
      default:
        return <TbWorld />;
    }
  }
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="fixed inset-0">
        <RetroGrid />
      </div>
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
                    <p>{' | '}</p>
                    <p> Music Artist 🎙️🎹🎵</p>
                  </div>
                </BlurFade>

              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
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
              return <>
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill} &nbsp; {getIconNameFromSkill(skill)}</Badge>
                </BlurFade>

              </>
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 mt-0">
                {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent">
                    Projects
                  </span>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
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
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full pb-12">
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
                <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                  <AnimatedGradientText>
                    🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                      )}
                    >
                      Let's Start Our Next Project Together!
                    </span>
                    <CirclePlay className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedGradientText></div>
                <Separator className="my-4" />
                <div className="flex h-5 justify-center space-x-4 text-sm">
                  <Link
                    href="mailto:yashjaiswalofficial@gmail.com"
                    className=""
                  >
                    <div className="transition-transform duration-300 ease-in-out hover:scale-150">  <Mail style={{ width: '1.75rem', height: '1.75rem' }}
                    /></div>

                  </Link>{" "}
                  <Separator orientation="vertical" />
                  <Link
                    href="sms:+17828822600"
                    className=""
                  >
                    <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                      <Send style={{ width: '1.75rem', height: '1.75rem' }} />
                    </div>
                  </Link>{" "}
                  <Separator orientation="vertical" />
                  <Link
                    href="tel:+17828822600"
                    className=""
                  >
                    <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                      <Phone style={{ width: '1.75rem', height: '1.75rem' }} /></div>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
