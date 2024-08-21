export interface Service {
  title: string;
  description: string;
  iconPath: string;
  bgColor: string;
  textColor: string;
  double?: boolean;
  maxwidth?: string;
}

export const services: Service[] = [
  {
    title: "Private Wealth Management",
    description:
      "Benefit from the expertise of our seasoned financial advisors. Our team is dedicated to providing personalized guidance, helping you navigate market trends, and making informed investment decisions.",
    iconPath: "/assets/icons/profile-tick.svg",
    bgColor: "bg-[#372E97]",
    textColor: "text-white",
    maxwidth: "lg:max-w-[16rem]",
  },
  {
    title: "Fund Management",
    description:
      "We strive to maximize investment returns through our differentiated investment approach in an environment where traditional strategies have become commoditized.",
    iconPath: "/assets/icons/convert-card.svg",
    bgColor: "bg-[#FAFAFA]",
    textColor: "text-gray-900",
    maxwidth: "lg:max-w-[12rem]",
  },
  {
    title: "Arranging For Custody and Credit",
    description:
      "Our innovative firm specializes in facilitating secure and beneficial credit investments, while also providing expert assistance in navigating the complexities of custody arrangements.",
    iconPath: "/assets/icons/security-safe.svg",
    bgColor: "bg-[#FAFAFA]",
    textColor: "text-gray-900",
    maxwidth: "lg:max-w-[16rem]",
  },
  {
    title: "Arranging For Deals in Investment",
    description:
      "Your investments are actively monitored, and our team makes timely adjustments based on market changes. This proactive approach ensures that your portfolio remains optimized for growth and stability",
    iconPath: "/assets/icons/presention-chart.svg",
    bgColor: "bg-[#FAFAFA]",
    textColor: "text-gray-900",
    double: true,
    maxwidth: "lg:max-w-[16rem]",
  },
  {
    title: "Diverse Investment Portfolios",
    description:
      "Your investments are actively monitored, and our team makes timely adjustments based on market changes. This proactive approach ensures that your portfolio remains optimized for growth and stability",
    iconPath: "/assets/icons/coin.svg",
    bgColor: "bg-[#FAFAFA]",
    textColor: "text-gray-900",
    maxwidth: "lg:max-w-[30rem]",
  },
];

export const featuresHeading = {
  title: "Investing Simplified, Success Amplified",
  description: `Choosing the right investment partner is pivotal for a successful
              financial journey. At JSK, we provide a seamless and rewarding
              investment experience backed by transparency, expertise, and a
              commitment to your financial goals.`,
};
