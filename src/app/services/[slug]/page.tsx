import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";
import { CheckCircle, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Amazing Grace Kover`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-primary py-20 text-white">
        <div className="container-custom">
          <Link href="/services" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex flex-col md:flex-row gap-6 items-start">
             <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <service.icon className="h-8 w-8 text-secondary" />
             </div>
             <div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-gray-300 max-w-2xl">
                  {service.description}
                </p>
             </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Overview</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {service.details}
              </p>

              <h3 className="text-xl font-bold text-primary mb-6">Key Features & Deliverables</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 border border-gray-100 rounded-lg hover:border-secondary/30 transition-colors">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-surface p-8 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-4">Why This Matters for Your Business</h3>
                <p className="text-gray-600 mb-0">
                  Effective management of {service.title.toLowerCase()} is crucial not just for compliance, but for enabling strategic decision-making. By outsourcing this to Amazing Grace Kover, you gain access to expert insights without the overhead of expanding your in-house team.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-surface p-6 rounded-xl border border-gray-200">
                 <h3 className="text-lg font-bold text-primary mb-4">Ready to get started?</h3>
                 <p className="text-gray-600 mb-6 text-sm">
                   Schedule a consultation to discuss how our {service.title} can support your specific needs.
                 </p>
                 <Button asChild className="w-full">
                   <Link href="/book">Book Consultation</Link>
                 </Button>
              </div>
              
              <div className="bg-primary p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-4">Other Services</h3>
                <ul className="space-y-3">
                  {services.filter(s => s.slug !== service.slug).slice(0, 4).map(s => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-gray-300 hover:text-white text-sm block py-1 border-b border-white/10 hover:border-white/30 transition-colors">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="inline-block mt-4 text-secondary text-sm font-semibold hover:underline">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

