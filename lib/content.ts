// =============================
// COMPANY INFO
// =============================

export const companyInfo = {
  name: "Sturrocks HVAC Solutions",
  phone: "(571) 258-7983",
  phoneE164: "+15712587983",
  email: "andy@hvac-solutions.com",
  tagline: "Your Comfort is Our Priority",
};

// =============================
// SERVICE AREAS
// =============================

export const serviceAreas = {
  short:
    "Loudoun/Fairfax Counties (VA) and Montgomery/Frederick Counties (MD)",
  full:
    "Loudoun County and Fairfax County in Virginia, as well as Montgomery County and Frederick County in Maryland",
};

// =============================
// SERVICES
// =============================

export const services = [
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    summary:
      "Expert air conditioning repair, preventive maintenance, and installation.",
    description:
      "Professional cooling solutions including system diagnostics, repair, installation, and seasonal maintenance to keep your home comfortable during peak summer heat.",
    commonRequests: [
      "AC blowing warm air",
      "System short cycling",
      "High summer energy bills",
      "Weak airflow in certain rooms"
    ],
    subservices: [
      { key: "ac-repair", name: "AC Repair" },
      { key: "ac-installation", name: "New AC Installation" },
      { key: "ac-replacement", name: "AC Replacement" },
      { key: "ac-tune-up", name: "Seasonal AC Tune-Up" },
    ],
  },
  {
    slug: "heating",
    title: "Heating & Furnace",
    summary:
      "Professional furnace repair, maintenance, and energy-efficient installation.",
    description:
      "Complete heating services including furnace repair, replacement, and seasonal maintenance to ensure reliable winter performance.",
    commonRequests: [
      "Furnace not turning on",
      "Cold air from vents",
      "Strange smells or burning odor",
      "Uneven heating throughout the home"
    ],
    subservices: [
      { key: "furnace-repair", name: "Furnace Repair" },
      { key: "furnace-installation", name: "New Furnace Installation" },
      { key: "furnace-replacement", name: "Furnace Replacement" },
      { key: "heating-tune-up", name: "Heating Tune-Up" },
    ],
  },
  {
    slug: "heat-pumps",
    title: "Heat Pump Services",
    summary:
      "Efficient heat pump installation and service for year-round comfort.",
    description:
      "Professional heat pump repair, installation, and maintenance delivering efficient heating and cooling from a single system.",
    commonRequests: [
      "Heat pump stuck in one mode",
      "System running constantly",
      "Icing on outdoor unit",
      "Poor heating performance in winter"
    ],
    subservices: [
      { key: "heat-pump-repair", name: "Heat Pump Repair" },
      { key: "heat-pump-installation", name: "Heat Pump Installation" },
      { key: "heat-pump-replacement", name: "Heat Pump Replacement" },
      { key: "heat-pump-maintenance", name: "Heat Pump Maintenance" },
    ],
  },
  {
    slug: "ductwork",
    title: "Ductwork & Venting",
    summary:
      "Professional duct inspection, repair, and airflow optimization.",
    description:
      "Improve airflow, eliminate hot and cold spots, and maximize system efficiency through expert ductwork services.",
    commonRequests: [
      "Hot and cold spots in rooms",
      "Weak airflow from vents",
      "Noisy duct rattling",
      "Excess dust buildup"
    ],
    subservices: [
      { key: "duct-inspection", name: "Duct Inspection" },
      { key: "duct-repair", name: "Duct Repair" },
      { key: "airflow-balancing", name: "Airflow Balancing" },
    ],
  },
  {
    slug: "thermostats",
    title: "Thermostats",
    summary:
      "Smart thermostat installation and upgrade services.",
    description:
      "Upgrade your HVAC control with programmable and smart thermostat solutions.",
    commonRequests: [
      "Thermostat not responding",
      "Inaccurate temperature readings",
      "WiFi connectivity issues",
      "Upgrade to smart thermostat"
    ],
    subservices: [],
  },
  {
    slug: "plumbing",
    title: "Plumbing Services",
    summary:
      "Water heating and sump pump solutions for residential properties.",
    description:
      "Installation, replacement, and service for water heaters and sump pump systems.",
    commonRequests: [
      "Water heater not producing hot water",
      "Water heater leaking",
      "Sump pump not activating",
      "Replacement of aging water heater"
    ],
    subservices: [],
  },
  {
    slug: "preventative-maintenance",
    title: "Preventative Maintenance",
    summary:
      "Seasonal HVAC maintenance plans to maximize performance and system lifespan.",
    description:
      "Protect your investment with professional seasonal maintenance designed to improve efficiency, reduce unexpected breakdowns, and extend the life of your HVAC system.",
    commonRequests: [
      "Seasonal AC or heating tune-ups",
      "Reduce risk of unexpected breakdowns",
      "Improve energy efficiency",
      "Extend system lifespan"
    ],
    subservices: [
      { key: "ac-maintenance", name: "AC Maintenance" },
      { key: "heating-maintenance", name: "Heating Maintenance" },
      { key: "system-inspection", name: "Full System Inspection" }
    ],
  },
  {
    slug: "commercial-hvac",
    title: "Commercial HVAC",
    summary:
      "Heating and cooling solutions for commercial properties.",
    description:
      "Installation, maintenance, and repair services for light commercial HVAC systems.",
    commonRequests: [
      "Inconsistent office temperatures",
      "Rooftop unit not cooling properly",
      "Preventative maintenance scheduling",
      "System performance concerns"
    ],
    subservices: [],
  },
];

// =============================
// BRANDS
// =============================

export type Brand = {
  name: string;
  file: string;
  url: string;
  tier: "primary" | "secondary";
};

export const brands: Brand[] = [
  { name: "Carrier", file: "carrier.svg", url: "https://www.carrier.com/residential", tier: "primary" },
  { name: "Trane", file: "trane.svg", url: "https://www.trane.com/residential", tier: "primary" },
  { name: "Lennox", file: "lennox.svg", url: "https://www.lennox.com", tier: "primary" },
  { name: "American Standard", file: "american-standard.svg", url: "https://www.americanstandardair.com", tier: "primary" },
  { name: "York", file: "york.svg", url: "https://www.york.com/residential-equipment", tier: "primary" },
  { name: "Rheem", file: "rheem.svg", url: "https://www.rheem.com", tier: "primary" },

  { name: "Bryant", file: "bryant.svg", url: "https://www.bryant.com", tier: "secondary" },
  { name: "Goodman", file: "goodman.svg", url: "https://www.goodmanmfg.com", tier: "secondary" },
  { name: "Amana", file: "amana.svg", url: "https://www.amana-hac.com", tier: "secondary" },
  { name: "Ruud", file: "ruud.svg", url: "https://www.ruud.com", tier: "secondary" },
  { name: "Heil", file: "heil.svg", url: "https://www.heil-hvac.com", tier: "secondary" },
  { name: "Tempstar", file: "tempstar.svg", url: "https://www.tempstar.com", tier: "secondary" },
  { name: "Daikin", file: "daikin.svg", url: "https://www.daikincomfort.com", tier: "secondary" },
  { name: "Mitsubishi Electric", file: "mitsubishi-electric.svg", url: "https://www.mitsubishicomfort.com", tier: "secondary" },
  { name: "Bosch", file: "bosch.svg", url: "https://www.bosch-thermotechnology.us", tier: "secondary" },
  { name: "LG", file: "lg.svg", url: "https://www.lghvac.com", tier: "secondary" },
  { name: "Aprilaire", file: "aprilaire.svg", url: "https://www.aprilaire.com", tier: "secondary" },
  { name: "Honeywell Home", file: "honeywell-home.svg", url: "https://www.honeywellhome.com", tier: "secondary" },
  { name: "Ducane", file: "ducane.svg", url: "https://www.ducanehvac.com", tier: "secondary" },
  { name: "Comfortmaker", file: "comfortmaker.svg", url: "https://www.comfortmaker.com", tier: "secondary" },
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