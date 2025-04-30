import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our carefully selected real estate projects that offer great investment opportunities with
              attractive returns.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="residential">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects
                  .filter((project) => project.type === "Residential")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="commercial">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects
                  .filter((project) => project.type === "Commercial")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="ongoing">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects
                  .filter((project) => project.status === "Ongoing")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="completed">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects
                  .filter((project) => project.status === "Completed")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Investment Process</h2>
              <p className="text-gray-600 mb-8">
                Our investment process is designed to be simple, transparent, and efficient. We guide you through every
                step of the way to ensure a seamless experience.
              </p>
              <div className="space-y-6">
                {investmentSteps.map((step) => (
                  <div key={step.id} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1745936940/slider17_inu3o6.jpg"
                alt="Investment process"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take the first step towards building your real estate investment portfolio with MIH.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-8 py-3 rounded text-center"
            >
              Contact Us
            </Link>
            <Link
              href="/login"
              className="bg-transparent hover:bg-white/10 transition-colors border border-white text-white px-8 py-3 rounded text-center"
            >
              Login to Invest
            </Link>
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
  description: string
  features: string[]
  roi: string
  duration: string
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "MIH Heights",
    location: "Lekki, Lagos",
    price: "₦50,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936950/WhatsApp_Image_2025-01-28_at_10.34.08_df1e3ccf_bsw2st.jpg",
    type: "Residential",
    status: "Ongoing",
    description: "A luxury residential apartment complex in the heart of Lekki.",
    features: ["3 Bedroom Apartments", "Swimming Pool", "Gym", "24/7 Security", "Backup Power"],
    roi: "20% per annum",
    duration: "24 months",
  },
  {
    id: 2,
    title: "MIH Towers",
    location: "Victoria Island, Lagos",
    price: "₦120,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936950/WhatsApp_Image_2025-01-28_at_10.34.14_11ea9268_fc4lxx.jpg",
    type: "Commercial",
    status: "Completed",
    description: "A premium office space in the business district of Victoria Island.",
    features: ["Office Spaces", "Conference Rooms", "Parking", "24/7 Security", "Backup Power"],
    roi: "18% per annum",
    duration: "36 months",
  },
  {
    id: 3,
    title: "MIH Gardens",
    location: "Ikoyi, Lagos",
    price: "₦85,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936950/WhatsApp_Image_2025-01-28_at_10.34.14_9fd08a12_qqq8tr.jpg",
    type: "Residential",
    status: "Upcoming",
    description: "A serene residential estate with modern amenities in Ikoyi.",
    features: ["4 Bedroom Duplexes", "Swimming Pool", "Tennis Court", "24/7 Security", "Backup Power"],
    roi: "22% per annum",
    duration: "18 months",
  },
  {
    id: 4,
    title: "MIH Plaza",
    location: "Ikeja, Lagos",
    price: "₦70,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936950/WhatsApp_Image_2025-01-28_at_10.20.57_d171a0ad_eokjak.jpg",
    type: "Commercial",
    status: "Ongoing",
    description: "A modern shopping plaza in the bustling area of Ikeja.",
    features: ["Retail Spaces", "Food Court", "Parking", "24/7 Security", "Backup Power"],
    roi: "19% per annum",
    duration: "30 months",
  },
  {
    id: 5,
    title: "MIH Residences",
    location: "Ajah, Lagos",
    price: "₦45,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936948/WhatsApp_Image_2025-01-28_at_10.20.57_288202ae_edj805.jpg",
    type: "Residential",
    status: "Completed",
    description: "A residential estate with affordable luxury homes in Ajah.",
    features: ["2 & 3 Bedroom Apartments", "Swimming Pool", "Playground", "24/7 Security", "Backup Power"],
    roi: "17% per annum",
    duration: "24 months",
  },
  {
    id: 6,
    title: "MIH Business Park",
    location: "Maryland, Lagos",
    price: "₦100,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936941/slider18_zoviyz.jpg",
    type: "Commercial",
    status: "Upcoming",
    description: "A state-of-the-art business park with modern facilities in Maryland.",
    features: ["Office Spaces", "Conference Center", "Parking", "24/7 Security", "Backup Power"],
    roi: "21% per annum",
    duration: "36 months",
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
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">{project.type}</span>
          <span className="font-bold text-orange-500">{project.price}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <div>
            ROI: <span className="font-semibold">{project.roi}</span>
          </div>
          <div>
            Duration: <span className="font-semibold">{project.duration}</span>
          </div>
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="inline-block w-full text-center bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

const investmentSteps = [
  {
    id: 1,
    title: "Create an Account",
    description: "Sign up on our platform to get started with your investment journey.",
  },
  {
    id: 2,
    title: "Browse Projects",
    description: "Explore our available projects and select the one that aligns with your investment goals.",
  },
  {
    id: 3,
    title: "Make an Investment",
    description: "Choose your investment amount and complete the payment process securely.",
  },
  {
    id: 4,
    title: "Track Your Investment",
    description: "Monitor the progress of your investment and receive regular updates.",
  },
  {
    id: 5,
    title: "Receive Returns",
    description: "Enjoy the returns on your investment as per the agreed terms.",
  },
]
