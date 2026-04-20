import { serviceAreas } from "@/lib/content";
import SectionTitle from "./SectionTitle";

type WhyItem = {
  title: string;
  text: string;
};

const WHY_ITEMS: readonly WhyItem[] = [
  {
    title: "State Licensed & Insured",
    text: "Fully compliant and professionally certified service.",
  },
  {
    title: "14+ Years in Business",
    text: "Established in 2012 serving Northern Virginia and Maryland.",
  },
  {
    title: "NATE-Certified Technicians",
    text: "Recognized industry training and technical excellence.",
  },
  {
    title: "Accurate Diagnostics",
    text: "Thorough troubleshooting before recommending repairs.",
  },
  {
    title: "22+ Years Industry Experience",
    text: "Extensive hands-on HVAC experience across residential systems.",
  },
  {
    title: "Transparent Pricing",
    text: "Clear recommendations with no hidden costs.",
  },
  {
    title: "All Major Brands Serviced",
    text: "Carrier, Trane, Lennox, Rheem & more.",
  },
  {
    title: "ENERGY STAR® Certified",
    text: "Installation and service of high-efficiency equipment.",
  },
  {
    title: "Long-Term Reliability",
    text: "Solutions designed for durability and performance.",
  },
];

export default function WhySturrocks() {
  const topThree = WHY_ITEMS.slice(0, 3);
  const topSix = WHY_ITEMS.slice(0, 6);

  return (
    <section className="bg-neutral-50 border-t border-white pt-10 pb-14 md:pt-12 md:pb-20">
      <div className="container mx-auto px-4">

        <SectionTitle>
          <span className="md:hidden">Why Sturrocks</span>
          <span className="hidden md:inline">Why Choose Sturrocks HVAC</span>
        </SectionTitle>

        {/* Mobile (3) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {topThree.map((item, index) => (
            <WhyCard key={index} item={item} />
          ))}
        </div>

        {/* Medium (6) */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {topSix.map((item, index) => (
            <WhyCard key={index} item={item} />
          ))}
        </div>

        {/* Large (9) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {WHY_ITEMS.map((item, index) => (
            <WhyCard key={index} item={item} />
          ))}
        </div>

        {/* Service Area */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            📍 <strong>Service Area:</strong> {serviceAreas.short}
          </p>
        </div>

      </div>
    </section>
  );
}

function WhyCard({ item }: { item: WhyItem }) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border border-primary-200
        shadow-[0_6px_18px_rgba(0,0,0,0.05)]
        px-5 py-4
        flex flex-col
        h-full
      "
    >
      <h3 className="text-base md:text-lg font-semibold text-primary-900 mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-gray-600 leading-snug">
        {item.text}
      </p>
    </div>
  );
}