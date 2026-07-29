export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="container mt-16 mb-10 flex justify-between border-t border-neutral-800 pt-6">
      <p className="text-sm text-gray-400">© {year} Gheorghe Gherciu</p>
    </footer>
  )
}
