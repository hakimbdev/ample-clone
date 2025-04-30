"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useSession, signOut } from "next-auth/react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-32">
            <Image
              src="https://res.cloudinary.com/dc5qncppu/image/upload/v1745936639/Happy_New_Year-removebg-preview_ofd3ek.png"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks session={session} />
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile onClick={toggleMenu} session={session} />
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLinks = ({
  mobile = false,
  onClick = () => {},
  session,
}: { mobile?: boolean; onClick?: () => void; session?: any }) => {
  return (
    <>
      <NavItem href="/about" label="About" mobile={mobile} onClick={onClick} />
      <NavItem href="/projects" label="Projects" mobile={mobile} onClick={onClick} />
      <NavItem href="/media" label="Media" mobile={mobile} onClick={onClick} />
      <NavItem href="/contact" label="Contact" mobile={mobile} onClick={onClick} />
      {session ? (
        <>
          <NavItem href="/dashboard" label="Dashboard" mobile={mobile} onClick={onClick} />
          <NavItem
            href="#"
            label="Logout"
            mobile={mobile}
            onClick={() => {
              signOut({ callbackUrl: "/" })
              if (onClick) onClick()
            }}
            isButton
          />
        </>
      ) : (
        <NavItem href="/login" label="Login" mobile={mobile} onClick={onClick} isButton />
      )}
    </>
  )
}

const NavItem = ({
  href,
  label,
  mobile = false,
  isButton = false,
  onClick = () => {},
}: {
  href: string
  label: string
  mobile?: boolean
  isButton?: boolean
  onClick?: any
}) => {
  if (isButton) {
    return (
      <Link
        href={href}
        className={`${mobile ? "w-full" : ""} px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-center`}
        onClick={onClick}
      >
        {label}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`${mobile ? "w-full" : ""} hover:text-orange-500 transition-colors relative group`}
      onClick={onClick}
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
    </Link>
  )
}

export default Header
