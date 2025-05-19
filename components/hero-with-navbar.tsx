"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Creating",
    subtitle: "New Opportunities",
    description: "We create real estate investment opportunities that delivers great value and returns",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746004469/mih1_mpybaj.jpg",
    buttonText: "Discover more",
    buttonLink: "/about",
  },
  {
    id: 5,
    title: "Sustainable",
    subtitle: "Development",
    description: "Committed to creating environmentally conscious real estate projects",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746004482/WhatsApp-Image-2023-12-26-at-12.32.01-PM_cn1ywo.jpg",
    buttonText: "Learn more",
    buttonLink: "/about",
  },
  {
    id: 6,
    title: "Modern",
    subtitle: "Architecture",
    description: "Cutting-edge design meets functionality in our architectural masterpieces",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936941/slider18_zoviyz.jpg",
    buttonText: "View projects",
    buttonLink: "/projects",
  },
  {
    id: 7,
    title: "Urban",
    subtitle: "Living",
    description: "Strategically located properties in the heart of vibrant urban centers",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746004489/young-male-adult-taking-pictures-building_cihtac.jpg",
    buttonText: "Discover more",
    buttonLink: "/about",
  }
]

const HeroWithNavbar = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    handleSliderInteraction() // Pause auto-scroll when user interacts
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    handleSliderInteraction() // Pause auto-scroll when user interacts
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Go to specific slide
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    handleSliderInteraction() // Pause auto-scroll when user interacts
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-scroll functionality
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to start auto-scrolling
  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
    }

    autoScrollIntervalRef.current = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }
    }, 6000) // 6 seconds interval
  }, [isAnimating, slides.length])

  // Start auto-scrolling on component mount
  useEffect(() => {
    if (autoScrollEnabled) {
      startAutoScroll()
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [autoScrollEnabled, startAutoScroll])

  // Pause auto-scrolling when user interacts with slider
  const handleSliderInteraction = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
    }

    // Restart auto-scrolling after a delay
    setTimeout(() => {
      if (autoScrollEnabled) {
        startAutoScroll()
      }
    }, 10000) // 10 seconds pause after interaction
  }

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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navbar - Responsive */}
      <div className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md py-1 sm:py-2"
          : "bg-transparent py-2 sm:py-4"
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-16 sm:h-12 sm:w-24 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1745936639/Happy_New_Year-removebg-preview_ofd3ek.png"
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="ml-1 text-xs sm:text-sm font-bold text-white group-hover:text-orange-500 transition-colors truncate max-w-[120px] sm:max-w-none">Mams Innovative Homes</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <NavLinks />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md py-4 sm:py-6 px-4 sm:px-6 shadow-lg border-t border-gray-800 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <NavLinks mobile onClick={toggleMenu} />
            </nav>
          </div>
        )}
      </div>

      {/* Hero Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className={`object-cover transition-transform duration-10000 ease-out ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
            priority={index === 0}
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl transform transition-all duration-700 ease-out">
                <h2
                  className={`text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-1 sm:mb-2 transition-all duration-700 delay-100 ${
                    index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                >
                  {slide.title}
                </h2>
                <h1
                  className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 transition-all duration-700 delay-200 ${
                    index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </h1>
                <p
                  className={`text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl transition-all duration-700 delay-300 ${
                    index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className={`inline-flex items-center bg-orange-500 hover:bg-orange-600 transition-all duration-700 delay-400 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-lg hover:shadow-orange-500/30 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {slide.buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Professional Navigation Buttons - Hidden on small screens */}
      <div className="absolute left-4 md:left-10 bottom-10 z-30 hidden sm:flex space-x-3">
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 text-white p-3 md:p-4 rounded-md border border-white/20 shadow-lg hover:shadow-xl group"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 text-white p-3 md:p-4 rounded-md border border-white/20 shadow-lg hover:shadow-xl group"
          aria-label="Next slide"
        >
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Mobile Navigation Buttons - Only visible on small screens */}
      <div className="absolute inset-x-0 bottom-1/2 z-30 flex justify-between sm:hidden px-2">
        <button
          onClick={prevSlide}
          className="bg-black/30 backdrop-blur-sm transition-all duration-300 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/30 backdrop-blur-sm transition-all duration-300 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Professional Slide Indicator - Responsive */}
      <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 z-30">
        <div className="flex flex-col items-end space-y-2 sm:space-y-4">
          {/* Slide Counter with Title - Hidden on very small screens */}
          <div className="hidden sm:block bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-white/20 shadow-lg">
            <div className="flex flex-col">
              <span className="text-orange-400 text-xs uppercase tracking-wider mb-1 font-medium">
                {slides[currentSlide].title}
              </span>
              <div className="flex items-center">
                <span className="text-white font-medium text-lg sm:text-xl">{currentSlide + 1}</span>
                <span className="text-white/50 mx-2">/</span>
                <span className="text-white/70 text-sm">{slides.length}</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
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
          ? "w-full py-2 px-3 hover:bg-white/10 rounded-lg flex items-center text-white"
          : "relative group text-white"
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

export default HeroWithNavbar
