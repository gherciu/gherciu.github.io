import { ReactNode } from 'react'

export default function Section({
  title,
  subTitle,
  children,
}: {
  title: string
  subTitle?: string
  children: ReactNode
}) {
  return (
    <section className="mt-16 md:mt-20">
      <h2 className="mb-2 text-center font-bold">{title}</h2>
      {subTitle && <p className="text-center text-gray-300">{subTitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}
