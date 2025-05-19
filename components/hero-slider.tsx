"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

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

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className="relative h-screen w-full overflow-hidden">
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
                  className={`text-white text-3xl md:text-4xl font-light mb-2 transition-all duration-700 delay-100 ${
                    index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                >
                  {slide.title}
                </h2>
                <h1
                  className={`text-white text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-200 ${
                    index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </h1>
                <p
                  className={`text-white text-lg mb-8 transition-all duration-700 delay-300 ${
                    index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className={`inline-flex items-center bg-orange-500 hover:bg-orange-600 transition-all duration-700 delay-400 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-orange-500/30 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {slide.buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
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

      <button
        onClick={prevSlide}
        className="absolute left-6 bottom-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white p-3 rounded-full border border-white/20 shadow-lg transform -translate-y-1/2 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 bottom-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white p-3 rounded-full border border-white/20 shadow-lg transform -translate-y-1/2 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-2 bg-orange-500 rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
