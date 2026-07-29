import { skills } from '@/constants/skills'
import SkillPill from './skill-pill'

/**
 * A single horizontal rail that scrolls continuously and fades out at both edges.
 *
 * The track is rendered twice so the animation can translate -50% and loop seamlessly.
 * The gap between pills is applied *inside* each copy plus a matching trailing `pr-4`,
 * rather than as a gap on the outer flex — otherwise the two copies are separated by one
 * extra gap that -50% doesn't account for, and the loop visibly jumps each cycle.
 *
 * The second copy is `aria-hidden` because it's purely visual filler.
 */
export default function SkillsRail() {
  return (
    <div className="relative overflow-hidden fade-x py-2">
      <div className="flex w-max marquee-track">
        <ul className="flex shrink-0 gap-4 pr-4">
          {skills.map((skill) => (
            <SkillPill key={skill.name} {...skill} />
          ))}
        </ul>
        <ul className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
          {skills.map((skill) => (
            <SkillPill key={`${skill.name}-duplicate`} {...skill} />
          ))}
        </ul>
      </div>
    </div>
  )
}
