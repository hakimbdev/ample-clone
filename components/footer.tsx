import type React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">Subscribe to our newsletter for the latest updates on properties and investment opportunities.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow"
                />
                <button className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white relative inline-block">
              Mams Innovative Homes
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500"></span>
            </h3>
            <p className="mb-6 text-gray-400 leading-relaxed">
              We create real estate investment opportunities that delivers great value and returns.
            </p>
            <div className="flex space-x-3">
              <SocialIcon
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                }
                href="https://facebook.com"
              />
              <SocialIcon
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                }
                href="https://twitter.com"
              />
              <SocialIcon
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
                  </svg>
                }
                href="https://instagram.com"
              />
              <SocialIcon
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                }
                href="https://linkedin.com"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500"></span>
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/projects" label="Our Projects" />
              <FooterLink href="/media" label="Media" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/login" label="Login" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Projects
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500"></span>
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/projects/residential" label="Residential" />
              <FooterLink href="/projects/commercial" label="Commercial" />
              <FooterLink href="/projects/investment" label="Investment" />
              <FooterLink href="/projects/upcoming" label="Upcoming" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 mt-1 text-orange-500 group-hover:text-orange-400 transition-colors" />
<<<<<<< HEAD
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">SUITE 302A BAHAMAS PLAZA, PLOT 1080 JOSEPH GOMWALK STREET GUDU DISTRICT, ABUJA.</span>
=======
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">No. 25 Ajayi Crowther Street, Asokoro Quarters,
                Federal Capital Territory, Nigeria.</span>
>>>>>>> f48f83fdc3f5085246afb650f5f71307264236f9
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 text-orange-500 group-hover:text-orange-400 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">+234 806 255 8567</span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 text-orange-500 group-hover:text-orange-400 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">info@mams.com.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mams Innovative Homes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-orange-500 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-orange-500 transition-all duration-300 p-2.5 rounded-full hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
    >
      {icon}
    </a>
  )
}

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-orange-500 transition-all duration-300 flex items-center group"
      >
        <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
        {label}
      </Link>
    </li>
  )
}

export default Footer
