import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";

export const projects: Project[] = [];

export const skills: Skill = {
  languages: [
    {
      name: "NodeJS",
      icon: "nodejs-plain",
    },
    {
      name: "TypeScript",
      icon: "typescript-plain",
    },
  ],
  backend: [
    {
      name: "GraphQL",
      icon: "graphql-plain",
    },
    {
      name: "Nest.js",
      icon: "nestjs-plain",
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      icon: "postgresql-plain",
    },
    {
      name: "MongoDB",
      icon: "mongodb-plain",
    },
    {
      name: "Redis",
      icon: "redis-plain",
    },
  ],
  devops: [
    {
      name: "Kubernetes",
      icon: "kubernetes-plain",
    },
    {
      name: "Ansible",
      icon: "ansible-plain",
    },
    {
      name: "Docker",
      icon: "docker-plain",
    },
  ],
  frontend: [
    {
      name: "React",
      icon: "react-plain",
    },
    {
      name: "Angular",
      icon: "angular-plain",
    },
  ],
};
