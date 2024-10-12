import {
  type LucideIcon,
  UserCheck2,
  ChartSpline,
  LineChart,
  ShieldCheck,
  ListTodo,
  PiggyBank,
  Briefcase,
  Home,
  Banknote,
  Scale,
  ClipboardCheck,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  redirect: string;
}

export const services: Service[] = [
  {
    title: "Accounting and Taxation",
    description:
      "Our expert team offers comprehensive accounting and taxation services, ensuring compliance with UAE regulations while optimizing your tax efficiency.",
    icon: UserCheck2,
    redirect: "/accounting-taxation",
  },
  {
    title: "Aggressive Investment Portfolio",
    description:
      "For investors seeking higher returns with increased risk, our aggressive portfolio strategies focus on growth-oriented assets with significant upside potential.",
    icon: ChartSpline,
    redirect: "/aggressive-portfolio",
  },
  // {
  //   title: "Arranging For Custody and Credit",
  //   description:
  //     "Our innovative firm specializes in facilitating secure and beneficial credit investments, while also providing expert assistance in navigating the complexities of custody arrangements.",
  //   icon: "/assets/icons/security-safe.svg",
  //   bgColor: "bg-[#FAFAFA]",
  //   textColor: "text-gray-900",
  //   maxwidth: "lg:max-w-[16rem]",
  // },
  // {
  //   title: "Arranging For Deals in Investment",
  //   description:
  //     "Your investments are actively monitored, and our team makes timely adjustments based on market changes. This proactive approach ensures that your portfolio remains optimized for growth and stability.",
  //   icon: "/assets/icons/presention-chart.svg",
  //   bgColor: "bg-[#FAFAFA]",
  //   textColor: "text-gray-900",
  //   double: true,
  //   maxwidth: "lg:max-w-[16rem]",
  // },
  {
    title: "Banking and Financial Services",
    description:
      "We provide personalized banking and financial solutions, ensuring your financial needs are met with expert advice on loans, mortgages, and more.",
    icon: ShieldCheck,
    redirect: "/banking-financial-services",
  },
  {
    title: "Business Setup and Licensing",
    description:
      "We assist in the complete process of business setup and licensing in the UAE, ensuring your new venture complies with all legal requirements and is primed for success.",
    icon: ListTodo,
    redirect: "/business-setup-licensing",
  },
  {
    title: "Conservative Investment Portfolio",
    description:
      "Our conservative portfolio strategies focus on capital preservation and steady income, ideal for investors seeking lower-risk, stable returns.",
    icon: PiggyBank,
    redirect: "/conservative-portfolio",
  },
  {
    title: "Corporate Advisory",
    description:
      "We offer expert corporate advisory services, providing insights and solutions to optimize your business strategy and drive sustainable growth.",
    icon: Briefcase,
    redirect: "/corporate-advisory",
  },
  // {
  //   title: "Diverse Investment Portfolios",
  //   description:
  //     "Your investments are actively monitored, and our team makes timely adjustments based on market changes. This proactive approach ensures that your portfolio remains optimized for growth and stability.",
  //   // icon: "/assets/icons/coin.svg",
  //   bgColor: "bg-[#FAFAFA]",
  //   textColor: "text-gray-900",
  //   maxwidth: "lg:max-w-[30rem]",
  // },
  {
    title: "Estate Planning",
    description:
      "Ensure your legacy is protected and efficiently transferred with our estate planning services, covering wills, trusts, and wealth transfer strategies.",
    icon: ClipboardCheck,
    redirect: "/estate-planning",
  },
  // {
  //   title: "Fund Management",
  //   description:
  //     "We strive to maximize investment returns through our differentiated investment approach in an environment where traditional strategies have become commoditized.",
  //   // icon: "/assets/icons/convert-card.svg",
  //   bgColor: "bg-[#FAFAFA]",
  //   textColor: "text-gray-900",
  //   maxwidth: "lg:max-w-[12rem]",
  // },
  {
    title: "Golden Visa Services",
    description:
      "Our Golden Visa services help you secure long-term UAE residency, offering support through the application process and guiding you on the benefits of this prestigious status.",
    icon: Banknote,
    redirect: "/golden-visa",
  },
  {
    title: "Investment Advisory",
    description:
      "We provide comprehensive investment advisory services to help you optimize returns, manage risks, and navigate the ever-evolving market landscape.",
    icon: LineChart,
    redirect: "/investments",
  },
  {
    title: "Moderate Investment Portfolio",
    description:
      "Our moderate portfolio strategies balance growth with risk management, providing a stable investment approach for those seeking moderate returns with controlled risk.",
    icon: Scale,
    redirect: "/moderate-portfolio",
  },
  // {
  //   title: "Private Wealth Management",
  //   description:
  //     "Benefit from the expertise of our seasoned financial advisors. Our team is dedicated to providing personalized guidance, helping you navigate market trends, and making informed investment decisions.",
  //   // icon: "/assets/icons/profile-tick.svg",
  //   bgColor: "bg-[#FAFAFA]",
  //   textColor: "text-gray-900",
  //   maxwidth: "lg:max-w-[16rem]",
  // },
  {
    title: "Rental and Resale Property",
    description:
      "Our rental and resale property services ensure that your real estate investments in the UAE are efficiently managed, maximizing returns through strategic leasing and resale strategies.",
    icon: Home,
    redirect: "/rental-resale-property",
  },
];

export const featuresHeading = {
  title: "Investing Simplified, Success Amplified",
  description: `Choosing the right investment partner is pivotal for a successful
              financial journey. At JSK, we provide a seamless and rewarding
              investment experience backed by transparency, expertise, and a
              commitment to your financial goals.`,
};
