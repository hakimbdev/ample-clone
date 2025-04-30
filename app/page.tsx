import Image from "next/image"
import Link from "next/link"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  return (
    <>
      <HeroSlider />

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
    location: "Lekki, Lagos",
    price: "₦50,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936935/slider13_nsoeam.jpg",
    type: "Residential",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "MIH Towers",
    location: "Victoria Island, Lagos",
    price: "₦120,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936932/slider6_caefcl.jpg",
    type: "Commercial",
    status: "Completed",
  },
  {
    id: 3,
    title: "MIH Gardens",
    location: "Ikoyi, Lagos",
    price: "₦85,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936932/slider3_npg5xi.jpg",
    type: "Residential",
    status: "Upcoming",
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
          {project.status}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
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
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{project.type}</span>
          <span className="font-bold text-orange-500">{project.price}</span>
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="mt-4 inline-block w-full text-center bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 px-4 py-2 rounded"
        >
          View Details
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
    icon: "📈",
  },
  {
    id: 2,
    title: "Transparency",
    description: "We believe in complete transparency in all our dealings with our investors.",
    icon: "🔍",
  },
  {
    id: 3,
    title: "Expert Team",
    description: "Our team of experts has years of experience in the real estate industry.",
    icon: "👥",
  },
  {
    id: 4,
    title: "Innovation",
    description: "We leverage technology to provide a seamless investment experience.",
    icon: "💡",
  },
]

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
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
      <p className="text-gray-600 italic">"{testimonial.comment}"</p>
    </div>
  )
}
