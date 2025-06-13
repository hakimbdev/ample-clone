import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions or need more information? We're here to help. Get in touch with us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We look forward to
                hearing from you.
              </p>

              <form className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                You can also reach us using the contact information below. We are available Monday to Friday, 9:00 AM to
                5:00 PM.
              </p>

              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">No. 25 Ajayi Crowther Street, Asokoro Quarters,
                    Federal Capital Territory, Nigeria.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+234 806 25 58567</p>
                    <p className="text-gray-600">+234 803 597 6531</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@mams.com.ng</p>
                    <p className="text-gray-600">support@mams.com.ng</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about MIH and our real estate investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const faqs = [
  {
    id: 1,
    question: "How do I start investing with MIH?",
    answer:
      "To start investing with MIH, you need to create an account on our platform, browse available projects, select a project that aligns with your investment goals, and complete the investment process.",
  },
  {
    id: 2,
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment amount varies by project. Generally, our projects have a minimum investment of ₦1,000,000, but this can vary based on the specific project and investment structure.",
  },
  {
    id: 3,
    question: "How are returns calculated and distributed?",
    answer:
      "Returns are calculated based on the performance of the specific project and the terms outlined in the investment agreement. Returns are typically distributed quarterly or annually, depending on the project.",
  },
  {
    id: 4,
    question: "Can I invest if I'm not in Nigeria?",
    answer:
      "Yes, we welcome investors from around the world. Our platform is designed to accommodate international investors, and we provide support for international transactions.",
  },
  {
    id: 5,
    question: "How secure are my investments?",
    answer:
      "We prioritize the security of your investments. All projects undergo rigorous due diligence, and we implement robust security measures to protect your investment and personal information.",
  },
  {
    id: 6,
    question: "Can I sell my investment before the project is completed?",
    answer:
      "Yes, we offer a secondary market where you can sell your investment to other investors. However, this is subject to availability of buyers and the terms of the specific project.",
  },
]
