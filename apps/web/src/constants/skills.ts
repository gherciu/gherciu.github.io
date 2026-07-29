import type { Skill } from '@portfolio/types'

/**
 * Flat list rendered as a single horizontal marquee. Ordered so the rail reads as a
 * rough journey: languages → backend → data → infra → frontend.
 */
export const skills: Skill[] = [
  { name: 'TypeScript', icon: 'typescript-plain' },
  { name: 'Node.js', icon: 'nodejs-plain' },
  { name: 'Nest.js', icon: 'nestjs-plain' },
  { name: 'GraphQL', icon: 'graphql-plain' },
  { name: 'PostgreSQL', icon: 'postgresql-plain' },
  { name: 'MongoDB', icon: 'mongodb-plain' },
  { name: 'Redis', icon: 'redis-plain' },
  { name: 'Docker', icon: 'docker-plain' },
  { name: 'Kubernetes', icon: 'kubernetes-plain' },
  { name: 'Ansible', icon: 'ansible-plain' },
  { name: 'React', icon: 'react-original' },
  { name: 'Angular', icon: 'angularjs-plain' },
]
