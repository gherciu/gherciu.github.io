import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="container my-5 flex items-center justify-between gap-4">
      <div className="flex items-center">
        <Image height={40} width={40} src="/images/logo.png" alt="" />
        <h1 className="ml-[2px] text-2xl font-bold">
          <span className="hidden">G</span>heorghe Gherciu
        </h1>
      </div>
      {/* `text-white` resets the global gradient link colour — react-icons paint with
          `currentColor`, and the gradient sets `color: transparent`, hiding the glyph. */}
      <Link
        href="https://github.com/gherciu"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        className="shrink-0 text-white transition hover:text-gray-400 hover:no-underline"
      >
        <FaGithub size={22} />
      </Link>
    </header>
  )
}
