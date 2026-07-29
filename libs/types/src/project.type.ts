export type Project = {
  name: string
  description: string
  /** Short tags rendered as pills on the project card. */
  tags: string[]
  url: string
  githubRepository?: string
}
