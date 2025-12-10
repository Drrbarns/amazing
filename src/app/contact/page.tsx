import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Amazing Grace Kover",
  description: "Get in touch with Amazing Grace Kover for expert financial and HR consulting services in Ghana.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business? Reach out to us today.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a specific question about our services or want to discuss a comprehensive consulting package, we are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Phone</h3>
                    <p className="text-gray-600 mb-1">Mon-Fri from 8am to 5pm</p>
                    <a href="tel:0549820388" className="text-primary font-semibold hover:text-secondary">054 982 0388</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Email</h3>
                    <p className="text-gray-600 mb-1">Our friendly team is here to help.</p>
                    <a href="mailto:info@amazinggracekover.com" className="text-primary font-semibold hover:text-secondary">info@amazinggracekover.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Office</h3>
                    <p className="text-gray-600 mb-1">Come say hello at our office headquarters.</p>
                    <p className="text-primary font-semibold">Takoradi, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input type="text" id="first-name" name="first-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input type="text" id="last-name" name="last-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none transition-colors" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none transition-colors" placeholder="+233 54 000 0000" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By clicking send, you agree to our privacy policy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

