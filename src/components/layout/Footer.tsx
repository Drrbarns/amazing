import Link from "next/link";
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerNavigation = {
  services: [
    { name: "Fractional CFO Services", href: "/services/fractional-cfo" },
    { name: "Accounting & Bookkeeping", href: "/services/accounting" },
    { name: "Payroll Management", href: "/services/payroll" },
    { name: "Audit Support", href: "/services/audit-support" },
    { name: "Business Growth Advisory", href: "/services/growth-advisory" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Vision", href: "/about#vision" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#051120] text-white border-t-4 border-secondary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-custom pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-8 mb-10 sm:mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <Link href="/" className="inline-block">
               <span className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight block">
                 AMAZING GRACE <span className="text-secondary">KOVER</span>
               </span>
            </Link>
            <p className="text-xs sm:text-sm leading-6 text-gray-400 max-w-sm">
              Empowering Ghanaian businesses with compliance-focused, transparent, and growth-driven consulting services. We build the financial foundations for sustainable legacies.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="bg-white/5 p-2.5 sm:p-2 rounded-full text-gray-400 hover:text-white hover:bg-secondary transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-3 sm:mb-4">Services</h3>
            <ul role="list" className="space-y-2 sm:space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs sm:text-sm leading-6 text-gray-400 hover:text-secondary transition-colors block py-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-3 sm:mb-4">Company</h3>
            <ul role="list" className="space-y-2 sm:space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs sm:text-sm leading-6 text-gray-400 hover:text-secondary transition-colors block py-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
             <div className="bg-white/5 p-4 sm:p-5 md:p-6 rounded-lg border border-white/10">
               <h3 className="text-xs sm:text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-3 sm:mb-4">Contact Us</h3>
               <ul role="list" className="space-y-3 sm:space-y-4">
                 <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm leading-6 text-gray-300">
                   <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary shrink-0 mt-0.5" />
                   <span>Takoradi, Ghana</span>
                 </li>
                 <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm leading-6 text-gray-300">
                   <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-secondary shrink-0 mt-0.5" />
                   <a href="tel:0549820388" className="hover:text-white transition-colors min-h-[44px] flex items-center">054 982 0388</a>
                 </li>
                 <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm leading-6 text-gray-300">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-secondary shrink-0 mt-0.5" />
                    <a href="mailto:info@amazinggracekover.com" className="hover:text-white transition-colors break-all min-h-[44px] flex items-center">info@amazinggracekover.com</a>
                 </li>
               </ul>
               <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                  <Button asChild size="sm" className="w-full bg-secondary text-[#0A1D37] hover:bg-white font-bold h-11 sm:h-10">
                    <Link href="/book">Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
               </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs leading-5 text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Amazing Grace Kover. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs text-gray-500">
             <Link href="/privacy" className="hover:text-gray-300 min-h-[44px] flex items-center">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-gray-300 min-h-[44px] flex items-center">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
