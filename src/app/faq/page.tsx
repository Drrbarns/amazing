import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Frequently Asked Questions | Amazing Grace Kover",
  description: "Answers to common questions about our accounting, HR, and consulting services.",
};

const faqs = [
  {
    question: "What is a Fractional CFO and do I need one?",
    answer: "A Fractional CFO provides high-level financial strategy and leadership on a part-time or retainer basis. If your business is growing but you can't justify the cost of a full-time CFO (often $150k+), a fractional service gives you the expertise you need—budgeting, forecasting, cash flow management—at a fraction of the cost."
  },
  {
    question: "How do you handle client confidentiality?",
    answer: "We take data security and confidentiality extremely seriously. We sign Non-Disclosure Agreements (NDAs) with all clients, use secure encrypted software for data storage, and have strict internal access protocols. Your business secrets are safe with us."
  },
  {
    question: "Can you help with tax filings in Ghana?",
    answer: "Yes, we handle all tax compliance matters including VAT, withholding tax, corporate income tax, and PAYE. We ensure you are fully compliant with the Ghana Revenue Authority (GRA) to avoid penalties."
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely. We love helping startups set up their financial structures correctly from day one. We offer scalable packages that grow with your business."
  },
  {
    question: "What accounting software do you recommend?",
    answer: "We are experienced with major platforms like QuickBooks, Xero, and Sage. We can recommend the best fit for your industry and size, and help with implementation and training."
  },
  {
    question: "How does your pricing work?",
    answer: "We offer both project-based pricing (for audits or specific advisory tasks) and monthly retainers (for ongoing accounting, payroll, or CFO services). We will provide a transparent quote after our initial assessment."
  }
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Common questions about our services and how we work.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 hover:border-secondary/50 transition-colors bg-surface">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-3">
                  <span className="text-secondary font-serif italic text-2xl leading-none">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-8 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-primary/5 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-primary mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              We’re happy to answer any other questions you may have.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

