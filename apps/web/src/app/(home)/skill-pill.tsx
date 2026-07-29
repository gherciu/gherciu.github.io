import DevIcon from '@/components/dev-icon'
import type { Skill } from '@portfolio/types'

const SkillPill = ({ name, icon }: Skill) => {
  return (
    <li className="flex shrink-0 items-center gap-3 rounded-full border-[1px] border-neutral-700 bg-foreground py-2.5 pr-5 pl-4 transition duration-300 hover:scale-105 hover:border-neutral-500">
      <DevIcon icon={icon} size={24} />
      <span className="text-sm whitespace-nowrap">{name}</span>
    </li>
  )
}

export default SkillPill
