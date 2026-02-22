// =============================
// COMPANY INFO
// =============================

export const companyInfo = {
  name: "Sturrock HVAC Solutions",
  phone: "(571) 258-7983",
  phoneE164: "+15712587983",
  email: "info@sturrockhvac.com",
  tagline: "Your Comfort is Our Priority",
};

// =============================
// SERVICE AREAS
// =============================

export const serviceAreas = {
  short:
    "Loudoun & Fairfax Counties (VA) and Montgomery & Frederick Counties (MD)",
  full:
    "Loudoun County and Fairfax County in Virginia, as well as Montgomery County and Frederick County in Maryland",
};

// =============================
// SERVICES WITH SUBSERVICES
// =============================

export const services = [
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    summary:
      "Expert air conditioning repair, preventive maintenance, and installation.",
    description:
      "Expert air conditioning repair, preventive maintenance, and full system installation to keep your home cool, efficient, and dependable through the hottest months.",
    footerText: "Stay cool before the heat becomes a problem.",
    ctaText: "Schedule AC Service",

    subservices: [
      {
        key: "ac-repair",
        name: "AC Repair",
        description:
          "Fast diagnostics and reliable repair to restore cooling performance and airflow.",
      },
      {
        key: "ac-installation",
        name: "New AC Installation",
        description:
          "Professional installation of properly sized, energy-efficient air conditioning systems.",
      },
      {
        key: "ac-replacement",
        name: "AC Replacement",
        description:
          "Upgrade aging systems to improve efficiency, reliability, and long-term performance.",
      },
      {
        key: "ac-tune-up",
        name: "Seasonal AC Tune-Up",
        description:
          "Preventive maintenance designed to reduce breakdowns and improve energy efficiency.",
      },
    ],

    benefits: [
      "Fast, accurate diagnostics",
      "Energy-efficient system upgrades",
      "Seasonal maintenance programs",
      "Service for all major brands",
      "Improved comfort and lower utility costs",
    ],
  },

  {
    slug: "heating",
    title: "Heating & Furnace",
    summary:
      "Professional furnace repair, maintenance, and energy-efficient installation.",
    description:
      "Professional heating and furnace repair, maintenance, and installation to keep your home warm and energy-efficient throughout the winter.",
    footerText: "Restore warmth before temperatures drop.",
    ctaText: "Schedule Heating Service",

    subservices: [
      {
        key: "furnace-repair",
        name: "Furnace Repair",
        description:
          "Comprehensive diagnostics and dependable repair to restore safe heating.",
      },
      {
        key: "furnace-installation",
        name: "New Furnace Installation",
        description:
          "Properly sized, high-efficiency heating systems installed for long-term reliability.",
      },
      {
        key: "furnace-replacement",
        name: "Furnace Replacement",
        description:
          "Upgrade aging equipment to improve efficiency and comfort.",
      },
      {
        key: "heating-tune-up",
        name: "Heating Tune-Up",
        description:
          "Preventive inspections and maintenance before peak winter demand.",
      },
    ],

    benefits: [
      "Reliable winter performance",
      "High-efficiency installation options",
      "Reduced breakdown risk",
      "Lower heating costs",
      "Service for major brands",
    ],
  },

  {
    slug: "heat-pumps",
    title: "Heat Pumps",
    summary:
      "Efficient heat pump installation and service for year-round comfort.",
    description:
      "Professional heat pump repair, installation, and maintenance delivering efficient heating and cooling from a single system.",
    footerText: "Get efficient year-round comfort.",
    ctaText: "Schedule Heat Pump Service",

    subservices: [
      {
        key: "heat-pump-repair",
        name: "Heat Pump Repair",
        description:
          "Restore performance and efficiency with accurate troubleshooting.",
      },
      {
        key: "heat-pump-installation",
        name: "Heat Pump Installation",
        description:
          "High-efficiency heat pump systems sized and installed properly.",
      },
      {
        key: "heat-pump-replacement",
        name: "Heat Pump Replacement",
        description:
          "Upgrade to modern, energy-efficient equipment.",
      },
      {
        key: "heat-pump-maintenance",
        name: "Heat Pump Maintenance",
        description:
          "Preventive inspections to maintain year-round reliability.",
      },
    ],

    benefits: [
      "Energy-efficient comfort",
      "Single-system heating and cooling",
      "Lower operating costs",
      "Reliable year-round performance",
    ],
  },

  {
    slug: "system-replacement",
    title: "System Replacement",
    summary:
      "Upgrade aging HVAC systems with high-efficiency equipment.",
    description:
      "Professional evaluation and replacement of outdated heating and cooling systems for improved performance and energy savings.",
    footerText: "Upgrade your comfort and efficiency.",
    ctaText: "Request Replacement Estimate",

    subservices: [],
    benefits: [
      "High-efficiency system options",
      "Professional load calculations",
      "Improved airflow and comfort",
      "Manufacturer-backed warranties",
    ],
  },

  {
    slug: "ductwork",
    title: "Ductwork & Venting",
    summary:
      "Professional duct inspection, repair, and airflow optimization.",
    description:
      "Improve airflow, eliminate hot and cold spots, and maximize system efficiency through expert ductwork and venting services.",
    footerText: "Improve airflow and balanced comfort.",
    ctaText: "Schedule Duct Service",

    subservices: [
      {
        key: "duct-inspection",
        name: "Duct Inspection",
        description:
          "Identify leaks, restrictions, and airflow issues.",
      },
      {
        key: "duct-repair",
        name: "Duct Repair",
        description:
          "Seal and repair damaged duct sections to improve efficiency.",
      },
      {
        key: "airflow-balancing",
        name: "Airflow Balancing",
        description:
          "Correct uneven temperatures and airflow distribution.",
      },
    ],

    benefits: [
      "Improved airflow",
      "Reduced energy loss",
      "Balanced indoor comfort",
    ],
  },

  {
    slug: "maintenance",
    title: "Maintenance & Tune-Ups",
    summary:
      "Preventative service plans that extend equipment life.",
    description:
      "Seasonal inspections and maintenance programs designed to reduce breakdowns and improve efficiency year-round.",
    footerText: "Prevent breakdowns before they happen.",
    ctaText: "Schedule Tune-Up",

    subservices: [],
    benefits: [
      "Reduced emergency repairs",
      "Improved system lifespan",
      "Priority scheduling",
    ],
  },
];

// =============================
// BRAND LOGOS
// =============================

export const brandLogos = [
  { name: "Carrier", alt: "Carrier HVAC" },
  { name: "Trane", alt: "Trane HVAC" },
  { name: "Lennox", alt: "Lennox HVAC" },
  { name: "Rheem", alt: "Rheem HVAC" },
  { name: "York", alt: "York HVAC" },
  { name: "American Standard", alt: "American Standard HVAC" },
];

// =============================
// FINAL CTA
// =============================

export const finalCTA = {
  title: "Ready to Get Started?",
  subtitle:
    "Call us today for fast, reliable HVAC service across Loudoun, Fairfax, Montgomery, and Frederick counties.",
  buttonText: "Request Service",
};