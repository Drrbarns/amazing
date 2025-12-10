import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Target, Lightbulb, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Amazing Grace Kover",
  description: "Learn about Amazing Grace Kover's mission to empower Ghanaian businesses with financial clarity and operational excellence.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Office background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Amazing Grace Kover</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your strategic partner for financial integrity and business growth in Ghana.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Story & Purpose</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Amazing Grace Kover was founded with a singular purpose: to bridge the gap between complex financial regulations and the day-to-day operational realities of small and medium-sized enterprises (SMEs) in Ghana.
               </p>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 We recognized that many growing businesses struggle not from a lack of vision, but from a lack of structural financial discipline. Our firm provides the high-level expertise typically reserved for large corporations—fractional CFOs, rigorous audits, and strategic HR—accessible to the businesses that drive our economy.
               </p>
               <div className="bg-surface p-6 rounded-lg border-l-4 border-secondary">
                 <p className="text-primary font-medium italic">
                   &quot;We don&apos;t just balance books; we build the financial foundations for sustainable legacies.&quot;
                 </p>
               </div>
             </div>
             <div className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
               <Image
                 src="/image1.jpg"
                 alt="Consultants working together"
                 fill
                 className="object-cover"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower Ghanaian businesses with compliance-focused, transparent, and growth-driven consulting services that ensure long-term stability and profitability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted consultancy firm in Ghana, known for transforming SMEs into financially robust, compliant, and market-leading enterprises.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Core Values</h3>
              <ul className="space-y-2">
                {[
                  "Integrity & Transparency",
                  "Professional Excellence",
                  "Client-Centric Growth",
                  "Regulatory Compliance"
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-3xl">
           <h2 className="text-3xl font-serif font-bold text-primary mb-6">Led by Experts</h2>
           <p className="text-gray-600 mb-8">
             Our team consists of chartered accountants, HR professionals, and business strategists with years of experience across the Ghanaian and international business landscape.
           </p>
           <Button asChild size="lg">
             <Link href="/contact">Get in Touch With Us</Link>
           </Button>
        </div>
      </section>
    </>
  );
}
