import type { Project } from '@portfolio/types'

export const projects: Project[] = [
  {
    name: 'PortQueue',
    description:
      'A distributed queue implementation that is database agnostic and scales horizontally without a dedicated broker — plug in the storage you already run and add workers as load grows.',
    tags: ['Distributed', 'Database agnostic', 'Scalable'],
    url: 'https://episclera.github.io/portqueue',
    githubRepository: 'episclera/portqueue',
  },
  {
    name: 'Episclera',
    description:
      'A company building distributed systems — designing and operating the infrastructure, queues, and services that keep high-throughput products running.',
    tags: ['Distributed systems', 'Infrastructure', 'Open source'],
    url: 'https://episclera.github.io',
  },
]
