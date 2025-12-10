import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Services | Amazing Grace Kover",
  description: "Explore our comprehensive accounting, financial, and HR consulting services tailored for Ghanaian businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions to streamline operations, ensure compliance, and drive growth.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col">
                <div className="p-8 flex flex-col h-full">
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full justify-between group">
                    <Link href={`/services/${service.slug}`}>
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Need a custom solution?</h2>
          <p className="mb-8 text-gray-300">
            We understand every business is unique. Contact us to discuss your specific needs.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

