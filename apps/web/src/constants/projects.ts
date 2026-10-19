import type { Project } from '@portfolio/types'

export const projects: Project[] = [
  {
    name: 'Episclera',
    description:
      'An organization building the unglamorous pieces — queues, infrastructure, and services that products lean on when traffic stops being polite. The kind of tooling you install once and stop thinking about.',
    tags: ['Scalable systems', 'Infrastructure', 'Open source'],
    url: 'https://github.com/episclera',
  },
  {
    name: 'PortQueue',
    description:
      'A horizontally scalable job queue that runs on the database you already have. No broker to deploy, no extra service to babysit — point it at your storage and add workers and instances as load grows.',
    tags: ['Horizontally scalable', 'Database agnostic', 'Broker-free'],
    url: 'https://episclera.github.io/portqueue',
    githubRepository: 'episclera/portqueue',
  },
]
