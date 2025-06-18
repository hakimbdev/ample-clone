import Image from "next/image"
import Link from "next/link"
import HeroWithNavbar from "@/components/hero-with-navbar"

export default function Home() {
  return (
    <>
      <HeroWithNavbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-2">A New</h2>
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Experience</h3>
              <p className="text-gray-600 mb-8">
                At MIH, you will discover a whole new experience because we leverage on technology and innovation to
                bring you the best real estate investment opportunities. Our team of experts is dedicated to ensuring
                that you get the best value for your investment.
              </p>
              <p className="text-gray-600 mb-8">
                We understand that real estate investment can be complex, which is why we have simplified the process to
                make it accessible to everyone. Whether you are a first-time investor or a seasoned professional, we
                have something for you.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
              >
                Learn more about us
                <svg
                  xmlns="https://res.cloudinary.com/dc5qncppu/image/upload/v1746002234/Happy_New_Year_2_eogi7a.png"
                  className="h-5 w-5 ml-2"
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
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1746002234/Happy_New_Year_2_eogi7a.png"
                alt="Property floor plan"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Featured Projects</h2>
            <p className="text-gray-600">
              Discover our carefully selected real estate projects that offer great investment opportunities with
              attractive returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded"
            >
              View all projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose MIH</h2>
            <p className="text-gray-600">
              We are committed to providing the best real estate investment opportunities with a focus on value,
              transparency, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
              <p className="text-gray-300 mb-8">
                Join thousands of investors who have trusted MIH for their real estate investment needs. Get started
                today and discover the opportunities that await you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded text-center"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-white/10 transition-colors border border-white text-white px-6 py-3 rounded text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1746004482/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_opx6ou.jpg"
                alt="Investment"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Investors Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what some of our investors have to say about their experience with
              MIH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

interface Project {
  id: number
  title: string
  location: string
  price: string
  image: string
  type: string
  status: string
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "MIH Heights",
    location: "Abuja",
    price: "₦50,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936935/slider13_nsoeam.jpg",
    type: "Residential",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "MIH Towers",
    location: "Abuja",
    price: "₦120,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936932/slider6_caefcl.jpg",
    type: "Commercial",
    status: "Completed",
  },
  {
    id: 3,
    title: "MIH Gardens",
    location: "Abuja",
    price: "₦85,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936932/slider3_npg5xi.jpg",
    type: "Residential",
    status: "Upcoming",
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-orange-500/10 hover:-translate-y-1">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 z-10">
          <span className={`
            inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg
            ${project.status === 'Ongoing' ? 'bg-orange-500' :
              project.status === 'Completed' ? 'bg-green-500' :
              'bg-orange-500'}
          `}>
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-6 relative">
        <div className="absolute -top-10 right-6 bg-white rounded-full p-3 shadow-lg transform transition-transform duration-300 group-hover:translate-y-0 translate-y-10 opacity-0 group-hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-orange-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {project.location}
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">{project.type}</span>
          <span className="font-bold text-orange-500 text-lg">{project.price}</span>
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="mt-2 inline-flex justify-center items-center w-full bg-gray-100 hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-800 px-4 py-3 rounded-lg font-medium"
        >
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    id: 1,
    title: "High Returns",
    description: "Our projects offer competitive returns on investment, ensuring your money grows.",
    icon: "trending-up",
  },
  {
    id: 2,
    title: "Transparency",
    description: "We believe in complete transparency in all our dealings with our investors.",
    icon: "search",
  },
  {
    id: 3,
    title: "Expert Team",
    description: "Our team of experts has years of experience in the real estate industry.",
    icon: "users",
  },
  {
    id: 4,
    title: "Innovation",
    description: "We leverage technology to provide a seamless investment experience.",
    icon: "lightbulb",
  },
]

const FeatureCard = ({ feature }: { feature: Feature }) => {
  // Map feature icons to Lucide icon names
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trending-up':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        );
      case 'search':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'lightbulb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6"></path>
            <path d="M10 22h4"></path>
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-orange-500/10 hover:-translate-y-1 text-center">
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
        {getIcon(feature.icon)}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  )
}

interface Testimonial {
  id: number
  name: string
  role: string
  comment: string
  image: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Investor",
    comment:
      "Investing with MIH has been one of the best decisions I've made. The returns have been excellent and the process was seamless.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746003572/elegant-man-suit_mcbngu.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Property Owner",
    comment:
      "The team at MIH is professional and knowledgeable. They guided me through the entire process and made it stress-free.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746003555/11434191_chbm6b.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "First-time Investor",
    comment:
      "As a first-time investor, I was nervous, but MIH made it easy. Their platform is user-friendly and their support team is always available.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746003572/elegant-man-suit_mcbngu.jpg",
    rating: 4,
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-orange-500/10 relative">
      <div className="absolute -top-5 right-8 text-orange-500 text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.76-1.018 1.058-1.733.906-2.141-.13-.406-.455-.662-.97-.766l-.814-.23c-.647-.176-1.415.006-2.003.55-.587.54-1.004 1.108-1.248 1.705-.243.596-.363 1.18-.36 1.75.006.57.094 1.094.265 1.575.17.48.394.895.67 1.243.274.35.56.638.856.867.297.23.59.394.878.496.288.1.522.173.702.217.18.042.29.072.33.09.38.106.77.183 1.177.23.41.05.816.06 1.22.036.405-.026.763-.1 1.075-.23.31-.13.582-.29.814-.49.232-.192.4-.43.51-.71.108-.282.164-.55.164-.806zm7.842 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.55-.124-1.07-.13-1.54-.022-.16-.94.09-1.615.39-2.022.76-1.02 1.058-1.734.906-2.143-.13-.408-.455-.664-.97-.768l-.814-.23c-.646-.176-1.415.006-2.003.55-.587.54-1.004 1.108-1.248 1.705-.243.596-.363 1.18-.36 1.75.006.57.094 1.094.265 1.575.17.48.394.895.67 1.243.274.35.56.638.856.867.297.23.59.394.878.496.288.1.522.173.702.217.18.042.29.072.33.09.38.106.77.183 1.177.23.41.05.816.06 1.22.036.405-.026.763-.1 1.075-.23.31-.13.582-.29.814-.49.232-.192.4-.43.51-.71.108-.282.164-.55.164-.806z" />
        </svg>
      </div>

      <p className="text-gray-600 italic mb-6 relative z-10">"{testimonial.comment}"</p>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <div className="flex items-center pt-4 border-t border-gray-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-orange-500/10 group-hover:ring-orange-500/30 transition-all">
          <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold group-hover:text-orange-500 transition-colors">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
