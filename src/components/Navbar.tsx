'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? 'bg-blue-100 text-blue-900' : 'text-blue-100 hover:bg-blue-200/20 hover:text-white'
      }`}
    >
      {label}
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-200/50 bg-blue-700/95 backdrop-blur supports-[backdrop-filter]:bg-blue-700/70">
      <nav className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="text-white font-semibold">
          Siddharth Pathak
        </Link>
        <div className="flex items-center gap-1">
          <NavLink href="/" label="Home" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact" />
        </div>
      </nav>
    </header>
  )
}