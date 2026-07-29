import Card from '@/components/card'
import githubService from '@/lib/github'
import type { Project } from '@portfolio/types'
import Link from 'next/link'
import { HiArrowRight, HiStar } from 'react-icons/hi'

export default async function ProjectCard({ project }: { project: Project }) {
  const stars = project.githubRepository
    ? await githubService.getStarsByRepository(project.githubRepository).catch(() => undefined)
    : undefined

  return (
    <Card className="group flex h-full flex-col transition duration-300 hover:border-neutral-500">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold">{project.name}</h3>
        {stars !== undefined && (
          <p
            className="flex shrink-0 items-center gap-1 text-sm text-gray-400"
            title={`${stars} stars on GitHub`}
          >
            <HiStar />
            {stars}
          </p>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-300">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border-[1px] border-neutral-700 bg-foreground px-3 py-1 text-xs text-gray-400"
          >
            {tag}
          </li>
        ))}
      </ul>

      <Link
        target="_blank"
        rel="noreferrer"
        href={project.url}
        className="mt-auto flex w-fit items-center gap-2 pt-6 text-sm"
      >
        Learn more
        {/* The arrow sits outside the gradient text so it stays visible — the global link
            style paints text with a gradient via `color: transparent`. */}
        <HiArrowRight className="text-purple-500 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  )
}
