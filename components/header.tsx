"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 backdrop-blur-md shadow-md py-2"
        : "bg-white/80 backdrop-blur-sm shadow-sm py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative h-12 w-24 overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dc5qncppu/image/upload/v1745936639/Happy_New_Year-removebg-preview_ofd3ek.png"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="ml-1 text-sm font-bold group-hover:text-orange-500 transition-colors">Mams Innovative Homes</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-6 px-6 shadow-lg border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col space-y-5">
            <NavLinks mobile onClick={toggleMenu} />
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLinks = ({
  mobile = false,
  onClick = () => {},
}: { mobile?: boolean; onClick?: () => void }) => {
  return (
    <>
      <NavItem href="/about" label="About" mobile={mobile} onClick={onClick} />
      <NavItem href="/projects" label="Projects" mobile={mobile} onClick={onClick} />
      <NavItem href="/media" label="Media" mobile={mobile} onClick={onClick} />
      <NavItem href="/contact" label="Contact" mobile={mobile} onClick={onClick} />
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
        className={`${
          mobile
            ? "w-full justify-center"
            : ""
        } inline-flex items-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow-sm hover:shadow-orange-500/20 transition-all duration-300 text-center font-medium`}
        onClick={onClick}
      >
        {label}
        {!mobile && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
          </svg>
        )}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`${
        mobile
          ? "w-full py-2 px-3 hover:bg-gray-50 rounded-lg flex items-center"
          : "relative group"
      } hover:text-orange-500 transition-all duration-300 font-medium`}
      onClick={onClick}
    >
      {label}
      {!mobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      )}
    </Link>
  )
}

export default Header
