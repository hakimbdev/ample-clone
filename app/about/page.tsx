import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About MIH</h1>
            <p className="text-xl text-gray-600 mb-8">
              We are a leading real estate investment company dedicated to creating opportunities that deliver great
              value and returns.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, MIH was born out of a vision to transform the real estate investment landscape in
                Nigeria. We recognized the challenges faced by investors in accessing quality real estate opportunities
                and set out to create a platform that would bridge this gap.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have grown from a small team of passionate individuals to a full-fledged real estate
                investment company with a portfolio of successful projects across Nigeria.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by a commitment to excellence, innovation, and customer satisfaction. We
                continue to push the boundaries of what is possible in real estate investment, leveraging technology and
                expertise to deliver exceptional value to our investors.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1745936940/WhatsApp_Image_2025-01-28_at_09.56.38_1b3608a4_marqnp.jpg"
                alt="Our story"
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
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600">We are driven by a clear mission and vision that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h3>
              <p className="text-gray-600">
                To create accessible and valuable real estate investment opportunities that empower individuals to build
                wealth and secure their financial future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading real estate investment platform in Africa, known for innovation, transparency, and
                delivering exceptional returns to investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              Our core values define who we are and how we operate. They are the foundation of our culture and guide our
              decisions and actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4 text-orange-500">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600">
              Meet the dedicated professionals behind MIH. Our team brings together expertise from real estate,
              finance, technology, and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg?height=300&width=300"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-gray-300 mb-8">
                We are always looking for talented individuals to join our team. If you are passionate about real
                estate, technology, and making a difference, we would love to hear from you.
              </p>
              <Link
                href="/careers"
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded inline-block"
              >
                View Open Positions
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1746002234/Happy_New_Year_2_eogi7a.png"
                alt="Team culture"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const values = [
  {
    id: 1,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical behavior in all our dealings.",
    icon: "🤝",
  },
  {
    id: 2,
    title: "Innovation",
    description: "We constantly seek new and better ways to serve our clients and improve our offerings.",
    icon: "💡",
  },
  {
    id: 3,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from project selection to customer service.",
    icon: "🏆",
  },
  {
    id: 4,
    title: "Transparency",
    description: "We believe in open and honest communication with our clients and partners.",
    icon: "🔍",
  },
  {
    id: 5,
    title: "Customer Focus",
    description: "Our clients are at the center of everything we do. Their success is our success.",
    icon: "👥",
  },
  {
    id: 6,
    title: "Sustainability",
    description: "We are committed to sustainable practices that benefit our communities and the environment.",
    icon: "🌱",
  },
]

const team = [
  {
    id: 1,
    name: "Alhaji Muhammadu Maikudi",
    role: "CEO & Founder",
    bio: "With over 17 years of experience in real estate and finance, John leads our vision and strategy.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746001589/ceo_mams_xmohwd.png",
  },
  {
    id: 2,
    name: "Abdulhakim Ahmad",
    role: "Head of IT Department",
    bio: "Abdulhakim leads our technology initiatives, ensuring we leverage the latest innovations.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746001689/pp1_dg2rv8.jpg",
  },
  {
    id: 3,
    name: "Michael Eze",
<<<<<<< HEAD
    role: "Quantity Survey Team Lead",
=======
    role: "Head of Technology",
>>>>>>> f48f83fdc3f5085246afb650f5f71307264236f9
    bio: "Michael leads our technology initiatives, ensuring we leverage the latest innovations.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Amina Ibrahim",
    role: "Customer Success Manager",
    bio: "Amina ensures our clients have the best experience and get the support they need.",
    image: "/placeholder.svg?height=300&width=300",
  },
]
