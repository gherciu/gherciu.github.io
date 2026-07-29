import type { Skill } from '@portfolio/types'

export const buildSkillMock = (overrides: Partial<Skill> = {}): Skill => ({
  name: 'TypeScript',
  icon: 'typescript-plain',
  ...overrides,
})
