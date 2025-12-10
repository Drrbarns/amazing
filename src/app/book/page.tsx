import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Book a Consultation | Amazing Grace Kover",
  description: "Schedule a strategic consultation with our financial and HR experts.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Schedule Your Consultation</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take the first step towards financial clarity and operational excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            
            {/* Left Side: Value Prop */}
            <div className="bg-surface p-8 md:w-2/5 border-r border-gray-100">
              <h2 className="text-xl font-bold text-primary mb-6">What to expect</h2>
              <ul className="space-y-4">
                {[
                  "In-depth needs assessment",
                  "Review of current challenges",
                  "Strategic recommendations",
                  "Clear roadmap for next steps",
                  "Confidential discussion"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  &quot;The consultation was an eye-opener. We identified leaks in our cash flow immediately.&quot;
                </p>
                <p className="text-xs font-bold text-primary mt-2">- Retail Client, Takoradi</p>
              </div>
            </div>

            {/* Right Side: Booking Form */}
            <div className="p-8 md:w-3/5">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Request a Session</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Select a service...</option>
                    <option value="cfo">Fractional CFO</option>
                    <option value="accounting">Accounting & Bookkeeping</option>
                    <option value="payroll">Payroll Management</option>
                    <option value="audit">Audit Support</option>
                    <option value="hr">HR Services</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Briefly describe your business needs..."></textarea>
                </div>

                <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold">
                  Confirm Booking Request
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

