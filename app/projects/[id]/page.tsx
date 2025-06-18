import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

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
  gallery?: string[]
  details?: {
    size: string
    bedrooms?: number
    bathrooms?: number
    parking?: number
    amenities: string[]
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "MIH Heights",
    location: "Abuja",
    price: "₦50,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936950/WhatsApp_Image_2025-01-28_at_10.34.08_df1e3ccf_bsw2st.jpg",
    type: "Residential",
    status: "Ongoing",
    description:
      "A luxury residential apartment complex in the heart of Lekki. MIH Heights offers a perfect blend of comfort, luxury, and convenience. The project is strategically located with easy access to major roads, shopping centers, and entertainment spots.",
    features: ["3 Bedroom Apartments", "Swimming Pool", "Gym", "24/7 Security", "Backup Power"],
    roi: "20% per annum",
    duration: "24 months",
    gallery: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936938/slider15_eoy6hu.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936936/slider14_icu1d3.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936935/slider13_nsoeam.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936938/slider16_wxhtvp.jpg",
    ],
    details: {
      size: "150 sqm",
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      amenities: [
        "Swimming Pool",
        "Gym",
        "Children's Playground",
        "24/7 Security",
        "Backup Power",
        "Water Treatment Plant",
        "Landscaped Gardens",
        "CCTV Surveillance",
      ],
    },
  },
  {
    id: 2,
    title: "MIH Towers",
    location: "Abuja",
    price: "₦120,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936950/WhatsApp_Image_2025-01-28_at_10.34.14_11ea9268_fc4lxx.jpg",
    type: "Commercial",
    status: "Completed",
    description:
      "A premium office space in the business district of Victoria Island. MIH Towers is designed to meet the needs of modern businesses with its state-of-the-art facilities and strategic location. The project offers a conducive environment for businesses to thrive.",
    features: ["Office Spaces", "Conference Rooms", "Parking", "24/7 Security", "Backup Power"],
    roi: "18% per annum",
    duration: "36 months",
    gallery: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936934/slider8_orsoaj.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936934/slider12_f0gm3a.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936934/slider11_dzecsa.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936934/slider10_murwrd.jpg",
    ],
    details: {
      size: "200 sqm",
      parking: 3,
      amenities: [
        "Conference Rooms",
        "High-Speed Internet",
        "24/7 Security",
        "Backup Power",
        "CCTV Surveillance",
        "Central Air Conditioning",
        "Elevator",
        "Parking",
      ],
    },
  },
  {
    id: 3,
    title: "MIH Gardens",
    location: "Abuja",
    price: "₦85,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936950/WhatsApp_Image_2025-01-28_at_10.34.14_9fd08a12_qqq8tr.jpg",
    type: "Residential",
    status: "Upcoming",
    description:
      "A serene residential estate with modern amenities in Ikoyi. MIH Gardens is designed for those who appreciate nature and tranquility while still enjoying the conveniences of urban living.",
    features: ["4 Bedroom Duplexes", "Swimming Pool", "Tennis Court", "24/7 Security", "Backup Power"],
    roi: "22% per annum",
    duration: "18 months",
    gallery: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936934/slider9_medazn.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936933/slider7_qn9gt3.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936931/slider4_vkbfpq.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936931/slider2_hyoafk.jpg",
    ],
    details: {
      size: "250 sqm",
      bedrooms: 4,
      bathrooms: 4,
      parking: 2,
      amenities: [
        "Swimming Pool",
        "Tennis Court",
        "Jogging Track",
        "24/7 Security",
        "Backup Power",
        "Water Treatment Plant",
        "Landscaped Gardens",
        "CCTV Surveillance",
      ],
    },
  },
  {
    id: 4,
    title: "MIH Plaza",
    location: "Abuja",
    price: "₦70,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936950/WhatsApp_Image_2025-01-28_at_10.20.57_d171a0ad_eokjak.jpg",
    type: "Commercial",
    status: "Ongoing",
    description:
      "A modern shopping plaza in the bustling area of Ikeja. MIH Plaza offers retail spaces for businesses looking to establish their presence in one of Lagos' most vibrant commercial districts.",
    features: ["Retail Spaces", "Food Court", "Parking", "24/7 Security", "Backup Power"],
    roi: "19% per annum",
    duration: "30 months",
    gallery: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936932/slider3_npg5xi.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936931/slider1_d2rlgl.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936932/slider6_caefcl.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936941/slider18_zoviyz.jpg",
    ],
    details: {
      size: "180 sqm",
      parking: 4,
      amenities: [
        "Food Court",
        "High-Speed Internet",
        "24/7 Security",
        "Backup Power",
        "CCTV Surveillance",
        "Central Air Conditioning",
        "Elevator",
        "Parking",
      ],
    },
  },
  {
    id: 5,
    title: "MIH Residences",
    location: "Abuja",
    price: "₦45,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936948/WhatsApp_Image_2025-01-28_at_10.20.57_288202ae_edj805.jpg",
    type: "Residential",
    status: "Completed",
    description:
      "A residential estate with affordable luxury homes in Ajah. MIH Residences is perfect for families looking for comfortable living spaces in a secure and friendly community.",
    features: ["2 & 3 Bedroom Apartments", "Swimming Pool", "Playground", "24/7 Security", "Backup Power"],
    roi: "17% per annum",
    duration: "24 months",
    gallery: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936940/slider17_inu3o6.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936938/slider15_eoy6hu.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936936/slider14_icu1d3.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936935/slider13_nsoeam.jpg",
    ],
    details: {
      size: "120 sqm",
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      amenities: [
        "Swimming Pool",
        "Playground",
        "24/7 Security",
        "Backup Power",
        "Water Treatment Plant",
        "Landscaped Gardens",
        "CCTV Surveillance",
      ],
    },
  },
  {
    id: 6,
    title: "MIH Business Park",
    location: "Abuja",
    price: "₦100,000,000",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936941/slider18_zoviyz.jpg",
    type: "Commercial",
    status: "Upcoming",
    description:
      "A state-of-the-art business park with modern facilities in Maryland. MIH Business Park is designed to provide a conducive environment for businesses of all sizes to operate efficiently.",
    features: ["Office Spaces", "Conference Center", "Parking", "24/7 Security", "Backup Power"],
    roi: "21% per annum",
    duration: "36 months",
    gallery: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936938/slider16_wxhtvp.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936934/slider8_orsoaj.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936934/slider12_f0gm3a.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1745936934/slider11_dzecsa.jpg",
    ],
    details: {
      size: "220 sqm",
      parking: 5,
      amenities: [
        "Conference Center",
        "High-Speed Internet",
        "24/7 Security",
        "Backup Power",
        "CCTV Surveillance",
        "Central Air Conditioning",
        "Elevator",
        "Parking",
      ],
    },
  },
]

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="relative h-80 md:h-96 lg:h-[500px] mb-4 rounded-lg overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {project.status}
                </div>
              </div>

              {project.gallery && (
                <div className="grid grid-cols-4 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-20 md:h-24 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
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

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Price</p>
                    <p className="font-bold text-xl text-orange-500">{project.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Type</p>
                    <p className="font-bold">{project.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">ROI</p>
                    <p className="font-bold">{project.roi}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Duration</p>
                    <p className="font-bold">{project.duration}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {project.details && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Property Details</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600 text-sm">Size</p>
                      <p className="font-bold">{project.details.size}</p>
                    </div>
                    {project.details.bedrooms && (
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <p className="text-gray-600 text-sm">Bedrooms</p>
                        <p className="font-bold">{project.details.bedrooms}</p>
                      </div>
                    )}
                    {project.details.bathrooms && (
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <p className="text-gray-600 text-sm">Bathrooms</p>
                        <p className="font-bold">{project.details.bathrooms}</p>
                      </div>
                    )}
                    {project.details.parking && (
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <p className="text-gray-600 text-sm">Parking</p>
                        <p className="font-bold">{project.details.parking}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Features & Amenities</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.details?.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-orange-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded text-center"
                >
                  Invest Now
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-gray-100 transition-colors border border-gray-300 text-gray-800 px-6 py-3 rounded text-center"
                >
                  Request More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Similar Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id && p.type === project.type)
              .slice(0, 3)
              .map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                >
                  <div className="relative h-64">
                    <Image src={p.image || "/placeholder.svg"} alt={p.title} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {p.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
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
                      {p.location}
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">{p.type}</span>
                      <span className="font-bold text-orange-500">{p.price}</span>
                    </div>
                    <Link
                      href={`/projects/${p.id}`}
                      className="inline-block w-full text-center bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 px-4 py-2 rounded"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
