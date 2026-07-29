import type { Project } from '@portfolio/types'

export const buildProjectMock = (overrides: Partial<Project> = {}): Project => ({
  name: 'Example',
  description: 'An example project used in tests.',
  tags: ['TypeScript'],
  url: 'https://example.com',
  ...overrides,
})
