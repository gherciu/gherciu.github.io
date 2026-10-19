import AnimateOnScroll from '@/components/animate-on-scroll'
import IconButton from '@/components/icon-button'
import Section from '@/components/section'
import { projects } from '@/constants/projects'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import ProjectCard from './project-card'

export default async function Home() {
  return (
    <>
      <div className="flex shrink-0 items-center justify-center square-background py-14 md:min-h-[60vh] md:py-0">
        <div className="container flex flex-col gap-10 md:flex-row md:items-center md:justify-center md:gap-14">
          <div
            className="h-[150px] w-[150px] shrink-0 overflow-hidden rounded-[2rem] bg-white md:h-[300px] md:w-[300px]"
            style={{
              backgroundImage: "url('/images/pb.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '4px solid rgba(255, 255, 255, 0.2)',
            }}
          />
          <div className="w-full md:max-w-lg">
            <p className="text-gradient text-4xl font-extrabold">Hi there,</p>
            <p className="mt-4 text-xl">
              my name is Gheorghe. I build scalable systems and enjoy trying out new things along
              the way.
            </p>
            <div className="mt-7 flex space-x-8">
              <IconButton target="_blank" href="https://github.com/gherciu" aria-label="GitHub">
                <FaGithub size={20} />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/gherciu/"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </IconButton>
              <IconButton target="_blank" href="mailto:gherciu553@gmail.com" aria-label="Email">
                <HiMail size={20} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <Section className="mt-8 md:mt-10" title="Projects" subTitle="What I'm Building">
        <div className="container">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <AnimateOnScroll key={project.name}>
                <ProjectCard project={project} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
