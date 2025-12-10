import { BarChart3, FileText, Users, ShieldCheck, TrendingUp, Search } from "lucide-react";

export const services = [
  {
    slug: "fractional-cfo",
    title: "Fractional CFO Services",
    icon: BarChart3,
    description: "Strategic financial leadership tailored for growing businesses. We provide high-level financial strategy, budgeting, and forecasting without the cost of a full-time CFO.",
    features: [
      "Strategic Financial Planning",
      "Cash Flow Management & Forecasting",
      "Budgeting & Variance Analysis",
      "Financial Risk Management",
      "Board & Investor Reporting"
    ],
    details: "Our Fractional CFO services bridge the gap between basic bookkeeping and high-level strategic financial management. For many SMEs, hiring a full-time Chief Financial Officer is cost-prohibitive. Amazing Grace Kover provides seasoned financial executives on a part-time or retainer basis to guide your financial strategy, optimize cash flow, and prepare your business for scalable growth."
  },
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    icon: FileText,
    description: "Precision-driven accounting services to keep your records spotless. We handle day-to-day bookkeeping, monthly reconciliations, and financial statement preparation.",
    features: [
      "Daily/Weekly Bookkeeping",
      "Bank & Credit Card Reconciliations",
      "Financial Statement Preparation (P&L, Balance Sheet)",
      "Accounts Payable & Receivable Management",
      "Expense Tracking & Categorization"
    ],
    details: "Accurate financial records are the backbone of any successful business. Our accounting and bookkeeping team ensures that every transaction is recorded correctly and compliance is maintained. We provide you with timely, accurate financial statements that give you a clear picture of your business health."
  },
  {
    slug: "payroll",
    title: "Payroll Management",
    icon: Users,
    description: "Comprehensive payroll solutions ensuring your team is paid on time and you remain compliant with all tax regulations (GRA) and labor laws.",
    features: [
      "Payroll Processing & Disbursement",
      "Tax Filing (PAYE, SSNIT, Tier 2)",
      "Benefits Administration",
      "Leave & Attendance Management",
      "Payslip Generation & Distribution"
    ],
    details: "Managing payroll can be complex and time-consuming, especially with changing tax regulations. We take the burden off your shoulders by handling the entire payroll process, from calculating wages and deductions to filing taxes with the Ghana Revenue Authority (GRA) and SSNIT, ensuring your employees are happy and your business is compliant."
  },
  {
    slug: "internal-controls",
    title: "Internal Control Systems",
    icon: ShieldCheck,
    description: "Design and implementation of robust internal controls to safeguard your assets, prevent fraud, and ensure the accuracy of your financial data.",
    features: [
      "Risk Assessment & Gap Analysis",
      "Process Documentation & SOPs",
      "Fraud Prevention & Detection Controls",
      "Inventory Management Systems",
      "Segregation of Duties Implementation"
    ],
    details: "Weak internal controls expose businesses to fraud, errors, and operational inefficiencies. We assess your current processes and design a customized framework of internal controls that protects your assets and ensures the reliability of your financial reporting, giving you peace of mind."
  },
  {
    slug: "audit-support",
    title: "Audit & Compliance Support",
    icon: Search,
    description: "Expert assistance to navigate external audits and regulatory requirements smoothly. We prepare your schedules and manage the auditor relationship.",
    features: [
      "Audit Readiness Assessment",
      "Preparation of Audit Schedules",
      "Liaison with External Auditors",
      "Regulatory Filing Assistance",
      "Post-Audit Remediation"
    ],
    details: "Facing an audit can be stressful. Our team acts as your advocate and support system. We prepare all necessary documentation, answer auditor queries, and ensure the process runs smoothly and efficiently, minimizing disruption to your daily operations."
  },
  {
    slug: "hr-services",
    title: "HR Services & Employee Management",
    icon: Users,
    description: "Strategic HR solutions to build and manage high-performing teams. From recruitment support to performance management systems.",
    features: [
      "HR Policy Development",
      "Recruitment & Onboarding Support",
      "Performance Management Systems",
      "Employee Relations & Compliance",
      "Organizational Structuring"
    ],
    details: "Your people are your greatest asset. We help you attract, retain, and develop top talent through strategic HR practices. Whether you need an employee handbook, help with a difficult termination, or a complete performance appraisal system, we have the expertise to support you."
  },
  {
    slug: "growth-advisory",
    title: "Business Growth Advisory",
    icon: TrendingUp,
    description: "Data-driven consulting to accelerate your business growth. We help with market expansion, operational efficiency, and strategic planning.",
    features: [
      "Strategic Business Planning",
      "Market Entry Strategies",
      "Operational Efficiency Audits",
      "Revenue Growth Strategies",
      "Mergers & Acquisitions Support"
    ],
    details: "Growth requires a clear plan and disciplined execution. Our consultants work alongside you to identify opportunities, overcome challenges, and implement strategies that drive sustainable expansion and increased profitability."
  }
];

export const industries = [
  {
    name: "Hospitality",
    icon: "Calendar", // Using string for now to avoid icon passing issues in server components if not careful, but imported icons are fine
    desc: "Hotels, restaurants, and tourism businesses require unique inventory and cost control systems."
  },
  {
    name: "Wholesale Distribution",
    icon: "ShoppingBag",
    desc: "Optimizing supply chain finance and inventory management for high-volume traders."
  },
  {
    name: "Event Management",
    icon: "Users",
    desc: "Project-based accounting and budget management for large-scale events."
  },
  {
    name: "Professional Services",
    icon: "Briefcase",
    desc: "Streamlined billing and practice management for law firms, medical practices, and agencies."
  }
];

