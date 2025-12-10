import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck, Users, BarChart3, FileText, Briefcase, ShoppingBag, Calendar, Award, PieChart, Clock, Lock } from "lucide-react";
import { ScrollAnimation, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";

export default function Home() {
  return (
    <>
      {/* A. Hero Section - Redesigned: Corporate Split Layout */}
      <section className="relative w-full h-screen min-h-[90vh] sm:min-h-[85vh] lg:min-h-[85vh] flex flex-col lg:flex-row bg-[#0A1D37] overflow-hidden">
        {/* Background Image - Mobile Only */}
        <div className="absolute inset-0 lg:hidden z-0">
          <ScrollAnimation direction="none" duration={1.5} className="w-full h-full">
        <Image
              src="/image5.jpg"
              alt="Corporate consulting session in modern office"
              fill
              className="object-cover opacity-90"
          priority
              sizes="100vw"
            />
          </ScrollAnimation>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1D37]/80 via-[#0A1D37]/85 to-[#0A1D37]/95" />
        </div>

        {/* Content - Center on Mobile, Left Side on Desktop */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-0 z-10 relative text-center lg:text-left min-h-full">
           <div className="max-w-xl mx-auto lg:mx-0">
              <ScrollAnimation direction="down" duration={0.8}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
                  <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="whitespace-nowrap">Premier Consulting Firm in Ghana</span>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="left" delay={0.2} duration={0.8}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.15] mb-4 sm:mb-6">
                  Strategic Financial & HR Solutions for <span className="text-secondary italic">Excellence</span>.
          </h1>
              </ScrollAnimation>
              
              <ScrollAnimation direction="left" delay={0.4} duration={0.8}>
                <p className="text-base sm:text-lg text-gray-200 lg:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  We empower SMEs with compliance-focused, transparent, and growth-driven consulting tailored to Ghana&apos;s unique business landscape.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation direction="up" delay={0.6} duration={0.8}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-[#0A1D37] font-bold text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 transition-transform active:scale-95">
                    <Link href="/book">Request Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white hover:text-[#0A1D37] font-medium text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 backdrop-blur-sm transition-transform active:scale-95">
                    <a href="tel:0549820388">Call 054 982 0388</a>
                  </Button>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.8} duration={0.8}>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20 lg:border-white/10 max-w-md mx-auto lg:mx-0">
                   <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">98%</h3>
                      <p className="text-xs sm:text-sm text-gray-300 lg:text-gray-400">Client Retention Rate</p>
                   </div>
                   <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">10+</h3>
                      <p className="text-xs sm:text-sm text-gray-300 lg:text-gray-400">Industries Served</p>
                   </div>
                </div>
              </ScrollAnimation>
           </div>
           
           {/* Decorative elements - Desktop Only */}
           <div className="hidden lg:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-3xl animate-pulse duration-[5000ms]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-3xl animate-pulse duration-[7000ms]"></div>
           </div>
        </div>

        {/* Right Image Side - Desktop Only */}
        <div className="hidden lg:block w-full lg:w-1/2 relative h-auto bg-gray-900 overflow-hidden">
           <ScrollAnimation direction="none" duration={1.5} className="w-full h-full">
            <Image
              src="/image5.jpg"
              alt="Corporate consulting session in modern office"
              fill
              className="object-cover opacity-90 transition-transform duration-[20s] hover:scale-110"
              priority
              sizes="50vw"
            />
          </ScrollAnimation>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A1D37]/40 to-[#0A1D37] opacity-60" />
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white border-b border-gray-100 py-6 sm:py-8 md:py-10">
        <div className="container-custom">
           <FadeIn>
             <p className="text-center text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 sm:mb-6 px-4">Trusted by businesses in key sectors</p>
             <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6 md:gap-x-12 md:gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for logos - using icons for now as per constraints */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 hover:text-primary transition-colors cursor-default"><Briefcase className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary" /> <span className="whitespace-nowrap">Global Trade</span></div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 hover:text-primary transition-colors cursor-default"><ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary" /> <span className="whitespace-nowrap">Retail Pro</span></div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 hover:text-primary transition-colors cursor-default"><Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary" /> <span className="whitespace-nowrap">Event Masters</span></div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 hover:text-primary transition-colors cursor-default"><PieChart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary" /> <span className="whitespace-nowrap">FinTech Solutions</span></div>
             </div>
           </FadeIn>
        </div>
      </div>

      {/* B. About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <ScrollAnimation direction="right">
              <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl group order-2 md:order-1">
                <Image
                  src="/image4.jpg"
                  alt="Consulting team meeting"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </ScrollAnimation>
            <div className="order-1 md:order-2">
              <ScrollAnimation direction="left" delay={0.2}>
                <div className="inline-block px-3 py-1 bg-surface text-primary text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                  Who We Are
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-4 sm:mb-6">
                  Your Trusted Partner in Financial & Operational Excellence
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Amazing Grace Kover is a Ghana-based consultancy firm offering specialized accounting, financial, and HR solutions to small and medium-sized businesses. We provide fractional CFO services, audit support, payroll management, and internal control systems tailored to the unique needs of clients across sectors.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Our mission is to empower Ghanaian businesses with the financial clarity, systems, and operational excellence needed for sustainable growth, ensuring compliance and transparency at every step.
                </p>
                
                <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    "Fractional CFO Services",
                    "Audit & Regulatory Support",
                    "Payroll Management",
                    "Internal Control Systems",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start sm:items-center gap-2 group">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0 mt-0.5 sm:mt-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base text-gray-700 font-medium group-hover:text-primary transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full sm:w-auto hover:scale-105 transition-transform active:scale-95">
                  <Link href="/about" className="group">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* C. Services Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
                Comprehensive Consulting Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 px-4">
                Expert solutions designed to streamline your operations, ensure compliance, and drive profitability.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Fractional CFO Services",
                desc: "Strategic financial leadership without the full-time cost. Budgeting, forecasting, and cash flow management.",
                icon: BarChart3,
                href: "/services/fractional-cfo"
              },
              {
                title: "Accounting & Bookkeeping",
                desc: "Accurate, timely financial records ensuring you always know your financial position.",
                icon: FileText,
                href: "/services/accounting"
              },
              {
                title: "Payroll Management",
                desc: "End-to-end payroll processing, tax filings (GRA), and benefits administration.",
                icon: Users,
                href: "/services/payroll"
              },
              {
                title: "Internal Control Systems",
                desc: "Robust processes to safeguard assets, prevent fraud, and ensure operational efficiency.",
                icon: ShieldCheck,
                href: "/services/internal-controls"
              },
              {
                title: "Audit & Compliance Support",
                desc: "Preparation for external audits and ensuring adherence to regulatory requirements.",
                icon: CheckCircle,
                href: "/services/audit-support"
              },
              {
                title: "Business Growth Advisory",
                desc: "Data-driven strategies to expand market share and optimize business performance.",
                icon: TrendingUp,
                href: "/services/growth-advisory"
              }
            ].map((service, index) => (
              <StaggerItem key={index}>
                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full hover:-translate-y-1 active:scale-[0.98]">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow">{service.desc}</p>
                  <Link href={service.href} className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-1 mt-auto text-sm sm:text-base group-hover:translate-x-1 duration-300">
                    Learn More <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform active:scale-95">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* D. Industries Served */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
             <ScrollAnimation direction="right">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
                 Tailored Expertise Across Industries
               </h2>
               <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8">
                 We understand that every sector has unique challenges. Our deep industry knowledge allows us to provide specialized solutions that work.
               </p>
               <Button asChild variant="secondary" className="w-full sm:w-auto hover:scale-105 transition-transform active:scale-95">
                 <Link href="/industries">Explore Industries</Link>
               </Button>
             </ScrollAnimation>
             <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6" staggerChildren={0.15}>
               {[
                 { name: "Hospitality", icon: Calendar },
                 { name: "Wholesale Distribution", icon: ShoppingBag },
                 { name: "Event Management", icon: Users },
                 { name: "Professional Services", icon: Briefcase },
               ].map((ind, i) => (
                 <StaggerItem key={i}>
                   <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1 cursor-default group active:scale-[0.98]">
                     <ind.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-secondary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                     <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">{ind.name}</h3>
                   </div>
                 </StaggerItem>
               ))}
             </StaggerContainer>
          </div>
        </div>
      </section>

      {/* E. Why Choose Us - Redesigned: Split Layout with Image */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
           <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-20">
              {/* Left Side: Content & Image */}
              <div className="lg:w-2/5">
                <ScrollAnimation direction="right">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-4 sm:mb-6">
                    Why Partner With Amazing Grace Kover?
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    We deliver more than just advice; we deliver results through a partnership built on trust, integrity, and operational excellence.
                  </p>
                  
                  <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/image7.jpg"
                      alt="Consulting partnership handshake"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-primary/20"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6 bg-gradient-to-t from-primary/90 to-transparent text-white">
                       <p className="font-bold text-lg sm:text-xl mb-1">Results Driven</p>
                       <p className="text-xs sm:text-sm text-gray-200">Focused on measurable business growth.</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Right Side: Grid of Benefits */}
              <div className="lg:w-3/5">
                 <StaggerContainer className="grid sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-10">
                   {[
                     { 
                       title: "Compliance-Focused", 
                       desc: "We ensure you never miss a regulatory deadline. Our team stays ahead of GRA and RGD requirements so you don't have to.",
                       icon: ShieldCheck
                     },
                     { 
                       title: "Transparent Reporting", 
                       desc: "No hidden jargon. We provide clear, understandable financial insights that empower you to make confident decisions.",
                       icon: FileText
                     },
                     { 
                       title: "Experienced Consultants", 
                       desc: "Access a team of seasoned professionals with deep knowledge of the Ghanaian business landscape and international standards.",
                       icon: Award
                     },
                     { 
                       title: "Industry Specific", 
                       desc: "We don't do one-size-fits-all. Our strategies are customized to fit the specific challenges of your market sector.",
                       icon: Briefcase
                     },
                     { 
                       title: "Timely Execution", 
                       desc: "We respect your time. Our team is committed to delivering high-quality work on schedule, every single time.",
                       icon: Clock
                     },
                     { 
                       title: "Ethical & Confidential", 
                       desc: "Your business secrets are safe. We adhere to strict data privacy and ethical standards in all our engagements.",
                       icon: Lock
                     },
                   ].map((item, i) => (
                     <StaggerItem key={i}>
                       <div className="flex gap-3 sm:gap-4 group">
                          <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                             <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-secondary transition-colors" />
                          </div>
                          <div>
                             <h3 className="text-base sm:text-lg font-bold text-primary mb-1 sm:mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                             <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                     </StaggerItem>
                   ))}
                 </StaggerContainer>
              </div>
           </div>
        </div>
      </section>

      {/* F. Vision & Approach */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
             <FadeIn>
               <div className="text-center mb-10 sm:mb-12 md:mb-16">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-4 sm:mb-6">Our Consulting Approach</h2>
                 <p className="text-base sm:text-lg md:text-xl text-gray-700 italic px-4">
                   &quot;To empower Ghanaian businesses with the financial clarity, systems, and operational excellence needed for sustainable growth.&quot;
                 </p>
               </div>
             </FadeIn>
             
             <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative">
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -z-10 -translate-y-1/2"></div>
               {[
                 { step: "01", title: "Assess", desc: "We deeply understand your operations and identify gaps." },
                 { step: "02", title: "Optimize", desc: "We implement robust controls and efficient systems." },
                 { step: "03", title: "Accelerate", desc: "We guide your sustainable growth and ongoing compliance." },
               ].map((step, i) => (
                 <StaggerItem key={i}>
                   <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md text-center relative hover:shadow-lg transition-shadow duration-300 group active:scale-[0.98]">
                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-secondary font-bold text-lg sm:text-xl flex items-center justify-center rounded-full mx-auto mb-3 sm:mb-4 border-4 border-white shadow-sm group-hover:scale-110 transition-transform">
                       {step.step}
                     </div>
                     <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{step.title}</h3>
                     <p className="text-sm sm:text-base text-gray-600">{step.desc}</p>
                   </div>
                 </StaggerItem>
               ))}
             </StaggerContainer>
          </div>
        </div>
      </section>

      {/* G. Contact CTA Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
        <div className="container-custom relative z-10 text-center px-4">
          <ScrollAnimation direction="up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
              Let&apos;s strengthen your business financial foundation.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Book a consultation today to discover how Amazing Grace Kover can transform your business operations and compliance.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto bg-secondary text-primary hover:bg-white hover:text-primary font-bold text-base sm:text-lg px-8 sm:px-10 h-11 sm:h-12 hover:scale-105 transition-transform active:scale-95 shadow-lg hover:shadow-xl">
              <Link href="/book">Schedule a Consultation</Link>
            </Button>
          </ScrollAnimation>
    </div>
      </section>
    </>
  );
}
