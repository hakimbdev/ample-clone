import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Mams Innovative Homes
            </h3>
            <p className="mb-6 text-gray-400">
              We create real estate investment opportunities that delivers great value and returns.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/projects" label="Our Projects" />
              <FooterLink href="/media" label="Media" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/login" label="Login" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Projects</h4>
            <ul className="space-y-3">
              <FooterLink href="/projects/residential" label="Residential" />
              <FooterLink href="/projects/commercial" label="Commercial" />
              <FooterLink href="/projects/investment" label="Investment" />
              <FooterLink href="/projects/upcoming" label="Upcoming" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-orange-500" />
                <span>No. 25 Ajayi Crowther Street, Asokoro Quarters,
                Federal Capital Territory, Nigeria.</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-orange-500" />
                <span>+234 806 255 8567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-orange-500" />
                <span>info@mams.com.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mams Innovative Homes. All rights reserved.</p>
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
      className="bg-gray-800 hover:bg-orange-500 transition-colors p-2 rounded-full"
    >
      {icon}
    </a>
  )
}

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-orange-500 transition-colors">
        {label}
      </Link>
    </li>
  )
}

export default Footer
