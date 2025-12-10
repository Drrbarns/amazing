import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/data";
import { Calendar, ShoppingBag, Users, Briefcase, Building2, LucideIcon } from "lucide-react";

export const metadata = {
  title: "Industries We Serve | Amazing Grace Kover",
  description: "Specialized accounting and consulting solutions for Hospitality, Wholesale Distribution, Events, and Professional Services in Ghana.",
};

const iconMap: Record<string, LucideIcon> = {
  "Calendar": Calendar,
  "ShoppingBag": ShoppingBag,
  "Users": Users,
  "Briefcase": Briefcase
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deep sector knowledge combined with financial expertise to solve industry-specific challenges.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon] || Building2;
              return (
                <div key={ind.name} className="flex gap-6 p-8 bg-surface rounded-xl border border-gray-100 hover:border-secondary/50 transition-colors">
                   <div className="shrink-0">
                     <div className="h-14 w-14 bg-white rounded-lg flex items-center justify-center shadow-sm">
                       <Icon className="h-7 w-7 text-primary" />
                     </div>
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-primary mb-3">{ind.name}</h3>
                     <p className="text-gray-600 mb-6">{ind.desc}</p>
                     <Button asChild variant="link" className="p-0 h-auto">
                       <Link href="/book">Schedule a consultation for your sector</Link>
                     </Button>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 text-center">
         <div className="container-custom max-w-3xl">
           <h2 className="text-3xl font-serif font-bold text-primary mb-6">Don&apos;t see your industry?</h2>
           <p className="text-gray-600 mb-8">
             Our fundamental accounting and financial principles apply to most businesses. We are adaptable and quick to learn new operational models.
           </p>
           <Button asChild size="lg">
             <Link href="/contact">Let&apos;s Discuss Your Business</Link>
           </Button>
         </div>
      </section>
    </>
  );
}
