// =============================
// COMPANY INFO
// =============================

export const brand = {
  marketingName: "Sturrock's HVAC Solutions",
  legalName: "Sturrock's HVAC-Solutions",
  shortName: "Sturrock's",
  domain: "sturrockshvac.com",

  licenses: {
    VA: {
      number: "2705144397",
      label: "Virginia DPOR License",
    },
    MD: {
      number: "85109",
      label: "Maryland HVACR License",
    },
  },

  tagline: "Your Comfort is Our Priority",
};

export const companyInfo = {
  name: brand.marketingName,
  legalName: brand.legalName,
  phone: "(571) 258-7983",
  phoneE164: "+15712587983",
  email: "andy@hvac-solutions.com",
  tagline: brand.tagline,
  licenses: brand.licenses,

  address: {
    street: "11592 Harpers Ferry Rd",
    locality: "Hillsboro",
    region: "VA",
    postalCode: "20132",
    country: "US",
  },

  geo: {
    latitude: 39.197,
    longitude: -77.7369,
  },

  businessHours: [
    { day: "Monday",    opens: "08:00", closes: "17:00" },
    { day: "Tuesday",   opens: "08:00", closes: "17:00" },
    { day: "Wednesday", opens: "08:00", closes: "17:00" },
    { day: "Thursday",  opens: "08:00", closes: "17:00" },
    { day: "Friday",    opens: "08:00", closes: "17:00" },
  ] as const,

  emergencyService: "24/7 emergency service available",

  socialProfiles: {
    yelp: "https://www.yelp.com/biz/sturrocks-hvac-solutions-lovettsville",
    nextdoor: "",
    facebook: "",
    google: "",
  },
};

// =============================
// SERVICE AREAS
// =============================

export const serviceAreas = {
  short:
    "Loudoun/Fairfax Counties (VA) and Frederick County (MD)",
  full:
    "Loudoun County and Fairfax County in Virginia, as well as Frederick County in Maryland",

  // NOTE: this list must stay aligned with the Google Business Profile
  // service areas. Google cross-references site + GBP; mismatched cities
  // weaken the local ranking signal. Update both together.
  cities: [
    // Loudoun County, VA
    { name: "Leesburg",         county: "Loudoun",   state: "VA" },
    { name: "Ashburn",          county: "Loudoun",   state: "VA" },
    { name: "Sterling",         county: "Loudoun",   state: "VA" },
    { name: "Lovettsville",     county: "Loudoun",   state: "VA" },
    { name: "Hillsboro",        county: "Loudoun",   state: "VA" },
    { name: "Purcellville",     county: "Loudoun",   state: "VA" },
    { name: "Round Hill",       county: "Loudoun",   state: "VA" },
    { name: "Hamilton",         county: "Loudoun",   state: "VA" },

    // Fairfax County, VA
    { name: "McLean",           county: "Fairfax",   state: "VA" },
    { name: "Reston",           county: "Fairfax",   state: "VA" },
    { name: "Herndon",          county: "Fairfax",   state: "VA" },
    { name: "Chantilly",        county: "Fairfax",   state: "VA" },
    { name: "Vienna",           county: "Fairfax",   state: "VA" },

    // Frederick County, MD
    { name: "Frederick",        county: "Frederick", state: "MD" },
    { name: "Brunswick",        county: "Frederick", state: "MD" },
    { name: "Point of Rocks",   county: "Frederick", state: "MD" },
    { name: "Middletown",       county: "Frederick", state: "MD" },
  ] as const,
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
      "Reliable light commercial HVAC service for offices, retail, restaurants, and property managers.",
    description:
      "We serve property managers, business owners, and facility managers across Loudoun, Fairfax, and Frederick counties with rooftop unit service, split-system maintenance, walk-in cooler and freezer repair, preventative maintenance contracts, and emergency response for commercial properties. Our NATE-certified technicians understand that for a business, HVAC downtime means lost revenue, unhappy staff, and unhappy customers — and we prioritize our commercial clients accordingly.",
    commonRequests: [
      "Rooftop unit (RTU) not heating or cooling properly",
      "Inconsistent temperatures across an office floor",
      "Walk-in cooler or freezer temperature drift",
      "After-hours or weekend emergency service",
      "Preventative maintenance contract for multi-unit property",
      "Restaurant makeup air or kitchen exhaust balance issues",
      "Retail storefront comfort complaints from customers",
      "Documentation and service reports for property managers",
    ],
    subservices: [
      { key: "rooftop-units", name: "Rooftop Unit (RTU) Service" },
      { key: "split-systems-commercial", name: "Commercial Split Systems" },
      { key: "walk-in-refrigeration", name: "Walk-in Cooler & Freezer Service" },
      { key: "commercial-pm", name: "Preventative Maintenance Contracts" },
      { key: "emergency-response", name: "After-Hours Emergency Response" },
      { key: "airflow-balancing-commercial", name: "Airflow Balancing for Commercial Spaces" },
    ],
  },
];

// =============================
// CITY LANDING PAGES
// =============================
//
// Per-city content for dedicated service-area landing pages. Populate
// incrementally — only cities with a matching entry here get a landing
// page rendered at /service-areas/<slug>. The broader service-area city
// list above (serviceAreas.cities) stays the canonical source for the
// LocalBusiness schema regardless of which pages exist.

export type StateSlug = "virginia" | "maryland";
export type CountySlug =
  | "loudoun-county"
  | "fairfax-county"
  | "frederick-county"
  | "fairfax-city"
  | "falls-church";

export type CityLandingPage = {
  slug: string;
  name: string;
  state: "VA" | "MD";
  stateSlug: StateSlug;
  county: string; // display name, e.g. "Loudoun County"
  countySlug: CountySlug;
  tier: 1 | 2;
  // Independent cities (Fairfax City, Falls Church) are peers to counties,
  // not nested under them. They render at /service-areas/<state>/<slug>
  // instead of /service-areas/<state>/<county>/<slug>.
  isIndependentCity?: boolean;
  intro: string;
  localContext: string;
  distanceNote: string;
  metaDescription: string;
};

export const cityLandingPages: CityLandingPage[] = [
  // =============================
  // LOUDOUN COUNTY, VA (Tier 1)
  // =============================
  {
    slug: "lovettsville",
    name: "Lovettsville",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "Just 10 miles from our Hillsboro base",
    metaDescription:
      "HVAC repair, installation, and maintenance in Lovettsville, VA. NATE-certified technicians, 24/7 emergency service, and 14+ years serving northern Loudoun County.",
    intro:
      "Sturrock's HVAC Solutions is based just 10 miles south of Lovettsville in neighboring Hillsboro — which makes us one of the few HVAC contractors with a real local presence in far northern Loudoun County. For over 14 years, our NATE-certified technicians have been keeping homes and businesses in the Lovettsville area comfortable year-round, from emergency furnace repairs on a 10-degree January night to full AC system replacements ahead of summer heat.",
    localContext:
      "Lovettsville sits at the northern edge of Loudoun County, right on the Potomac across from Brunswick and Point of Rocks in Maryland. The mix of historic homes in the village core, working farms and equestrian properties along the surrounding roads, and newer subdivisions each bring their own HVAC needs. Older homes often need careful attention to aging ductwork and right-sized equipment for well-insulated vs. drafty construction; newer builds tend to benefit most from high-efficiency heat pumps and smart thermostat upgrades. Because we're licensed in both Virginia and Maryland, we can cross the Brunswick Bridge to service homes in Point of Rocks, Brunswick, and Jefferson without missing a beat.",
  },
  {
    slug: "hillsboro",
    name: "Hillsboro",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "Our home base",
    metaDescription:
      "Hillsboro, VA HVAC services from Sturrock's HVAC Solutions — our hometown. NATE-certified heating and cooling repair, installation, and 24/7 emergency service.",
    intro:
      "Sturrock's HVAC Solutions is based right here in Hillsboro. It's our home — the community we live in, drive through every day, and have been keeping comfortable for over 14 years. When Hillsboro residents call, we know the roads, the housing stock, and the weather patterns intimately. That's not marketing — it's geography.",
    localContext:
      "Hillsboro sits tucked between the Blue Ridge and Short Hill Mountain along Route 9, one of the smallest incorporated towns in Virginia but with a long history — Civil War era stone homes, 19th-century farmhouses, and newer properties along the surrounding ridges. The microclimate matters: the Gap channels cold wind through the village in winter and the elevation can drop temperatures noticeably below the county average. We factor that in when sizing heating and cooling systems for Hillsboro homes, because what works in Leesburg or Purcellville isn't always the right fit up here. For older homes especially, we focus on ductwork integrity, proper insulation assumptions, and equipment that can handle the full range of Hillsboro's seasonal extremes.",
  },
  {
    slug: "purcellville",
    name: "Purcellville",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "5 miles east of our Hillsboro base",
    metaDescription:
      "HVAC repair, installation, and maintenance in Purcellville, VA. Local NATE-certified technicians serving western Loudoun. 24/7 emergency service, licensed and insured.",
    intro:
      "Sturrock's HVAC Solutions is just five miles west of Purcellville in Hillsboro, and Purcellville has been one of our core service communities since we opened our doors over 14 years ago. Whether you live in a historic Victorian downtown or a newer home in one of the developments off Route 287, our NATE-certified technicians know the housing stock and the systems that fit best.",
    localContext:
      "Purcellville is the commercial heart of western Loudoun — the \"Gateway to Wine Country\" — and its housing mix reflects that role. The 21st Street historic district has homes dating to the late 1800s with all the HVAC considerations that come with that era: retrofitted ductwork in tight spaces, load calculations that account for original-construction insulation, and equipment that won't overpower a smaller, older system. Newer developments on the edges of town tend to call for different solutions — multi-zone heat pumps, smart thermostats, and high-efficiency replacement systems. Because we live and work here, we can typically be on-site faster than contractors coming out of Leesburg or Sterling.",
  },
  {
    slug: "leesburg",
    name: "Leesburg",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "15 miles southeast of our Hillsboro base",
    metaDescription:
      "HVAC services in Leesburg, VA from Sturrock's HVAC Solutions. NATE-certified repair, installation, and maintenance. Licensed in Virginia, 24/7 emergency service.",
    intro:
      "As the county seat of Loudoun, Leesburg has an HVAC landscape as varied as any in Northern Virginia — historic downtown homes, established neighborhoods, and fast-growing new subdivisions all sit within a few miles of each other. Sturrock's HVAC Solutions has been serving Leesburg homeowners and businesses for over 14 years, and our NATE-certified technicians know the systems that work best in each.",
    localContext:
      "Leesburg's historic district contains some of the oldest homes in Loudoun County, many with original fireplaces, retrofitted ductwork, and quirks that require experience to diagnose correctly. Neighborhoods like Lansdowne, Leesburg South, and Beacon Hill skew newer and tend to benefit from high-efficiency system replacements, smart thermostats, and zoned systems. The pace of growth in Leesburg means older homes often sit next to newer construction, and what's right for one isn't right for the other. We approach each call with that context — and because we're based in Hillsboro just 15 miles away, we respond faster than the big-box contractors dispatched from farther east.",
  },
  {
    slug: "ashburn",
    name: "Ashburn",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "25 miles east of our Hillsboro base",
    metaDescription:
      "HVAC services in Ashburn, VA. Sturrock's HVAC Solutions — NATE-certified repair, installation, and maintenance for Ashburn's newer homes and townhomes. 24/7 emergency.",
    intro:
      "Ashburn's rapid growth over the past two decades has created one of the largest residential populations in Loudoun County — and some of the most varied HVAC needs. Sturrock's HVAC Solutions has been serving Ashburn homeowners for over 14 years, with NATE-certified technicians experienced in everything from high-efficiency replacements in established neighborhoods to smart-home integrations in new construction.",
    localContext:
      "Most Ashburn homes were built in the 1990s or later, which means they were designed for higher-efficiency heating and cooling from day one — but the equipment installed then is now at or past its end-of-life. We see a lot of first-generation replacement calls in neighborhoods like One Loudoun, Broadlands, Ashburn Village, and Belmont Country Club. High-efficiency heat pumps, variable-speed systems, and smart thermostats are particularly popular here, and the mature tree canopy in some neighborhoods creates airflow and ducting considerations worth planning around. We also do plenty of commercial HVAC work along the Route 7 corridor serving Ashburn's office and retail footprint.",
  },
  {
    slug: "sterling",
    name: "Sterling",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "30 miles east of our Hillsboro base",
    metaDescription:
      "Sterling, VA HVAC repair, installation, and maintenance from Sturrock's HVAC Solutions. NATE-certified technicians, 24/7 emergency service, and experience with Sterling's older home stock.",
    intro:
      "Sterling has some of the oldest suburban housing in eastern Loudoun County — much of it built in the 1970s and 1980s — which means the HVAC needs here skew toward full-system replacements, ductwork updates, and retrofits that can dramatically improve comfort and energy cost. Sturrock's HVAC Solutions has been serving Sterling homeowners for over 14 years.",
    localContext:
      "Sterling's housing stock ranges from the original Sterling Park subdivisions of the 1960s and '70s to newer infill construction near the Dulles Town Center. Older homes here are often on their third HVAC system by now, and the original ductwork — which was sized for systems that are no longer in service — doesn't always match today's high-efficiency equipment. We do a lot of load calculations, duct resizing, and zoning work in Sterling to correct decades of mismatched upgrades. For newer homes in areas like Cascades, Countryside, and Sugarland Run, the focus is more often preventative maintenance and smart thermostat upgrades.",
  },
  {
    slug: "brambleton",
    name: "Brambleton",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "28 miles southeast of our Hillsboro base",
    metaDescription:
      "Brambleton, VA HVAC service from Sturrock's HVAC Solutions — NATE-certified repair, installation, and maintenance for newer master-planned homes. 24/7 emergency service.",
    intro:
      "Brambleton is one of the largest master-planned communities in Loudoun County, built primarily from the early 2000s onward. The homes here were constructed with modern HVAC standards in mind — which means many are now hitting the 15-to-20-year mark where original equipment starts to fail. Sturrock's HVAC Solutions has been serving Brambleton homeowners as those systems reach end-of-life and benefit most from high-efficiency replacements.",
    localContext:
      "Brambleton's newer construction means most homes here have whole-house ductwork designed from day one, higher insulation values, and more airtight envelopes. That's good for efficiency, but it also means proper load calculations are more important than ever when replacing equipment — an oversized system in a modern home wastes money and runs inefficiently. We factor in the actual building envelope rather than defaulting to rule-of-thumb sizing. Brambleton homeowners tend to value smart thermostat integration, variable-speed equipment, and indoor air quality solutions, all of which we install regularly in the community.",
  },
  {
    slug: "south-riding",
    name: "South Riding",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "32 miles southeast of our Hillsboro base",
    metaDescription:
      "South Riding, VA HVAC service from Sturrock's HVAC Solutions. NATE-certified technicians handle repair, installation, and replacement for South Riding's master-planned homes.",
    intro:
      "South Riding is a master-planned community in southeastern Loudoun County, built largely between the late 1990s and 2000s. Many of its original HVAC systems are now at replacement age — and because South Riding homes were built for efficiency, replacing them thoughtfully matters more than just swapping like-for-like. Sturrock's HVAC Solutions has been serving South Riding homeowners with NATE-certified technicians for over 14 years.",
    localContext:
      "South Riding's housing stock was largely built during the same ~10-year window, which means many homes are on similar system lifecycles — if your neighbor's AC just failed, yours is probably not far behind. We see a lot of proactive replacement calls here as homeowners recognize that pattern. Modern variable-speed heat pumps are particularly well-suited to South Riding's larger single-family homes, and most homes in the community benefit noticeably from zoned systems that can cool primary living areas separately from guest rooms or basements. We also handle ductwork inspections and balancing to address the hot-and-cold spots that tend to develop over 20+ years of use.",
  },
  {
    slug: "stone-ridge",
    name: "Stone Ridge",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "30 miles southeast of our Hillsboro base",
    metaDescription:
      "Stone Ridge, VA HVAC repair and installation from Sturrock's HVAC Solutions. NATE-certified service for Stone Ridge's newer master-planned homes. 24/7 emergency service.",
    intro:
      "Stone Ridge is one of Loudoun's newer master-planned communities, with most homes built from the mid-2000s onward. Sturrock's HVAC Solutions has been part of Stone Ridge's HVAC landscape since the community's early days — installing, servicing, and now increasingly replacing the first generation of equipment as it reaches end-of-life.",
    localContext:
      "Stone Ridge homes benefit from modern building envelopes and well-designed ductwork, which makes them well-suited to variable-speed and multi-stage equipment that older homes often can't take full advantage of. We frequently recommend smart thermostats, zoned systems, and high-SEER replacements in Stone Ridge because the homes are actually able to deliver the efficiency those systems promise. Preventative maintenance is particularly worthwhile here — systems serving a well-insulated modern home tend to last longer when they're properly maintained, and catching minor refrigerant or airflow issues early prevents the full-replacement scenario that homeowners of 20-year-old equipment often face.",
  },
  {
    slug: "round-hill",
    name: "Round Hill",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "6 miles southwest of our Hillsboro base",
    metaDescription:
      "Round Hill, VA HVAC services from Sturrock's HVAC Solutions — your neighbors in Hillsboro. NATE-certified repair, installation, and maintenance. 24/7 emergency service.",
    intro:
      "Round Hill is one of our closest neighbors in western Loudoun, just a few miles down Route 9 from our Hillsboro base. We've been serving Round Hill homeowners for over 14 years — whether that's a historic home in the incorporated town center, a newer home up near Round Hill Summit, or one of the farms and properties along Mountain Road.",
    localContext:
      "The Round Hill area mixes a small historic downtown with newer residential development along the ridge and surrounding roads. The elevation here matters: like Hillsboro, Round Hill sits against the Blue Ridge, and the temperature swings can run a bit colder than homes down in the Loudoun Valley. We size heating systems for those actual conditions rather than county-average assumptions. Older homes in the town core often benefit from ductwork inspection and retrofit work; newer properties tend to need standard maintenance and eventual replacement of the original equipment installed when they were built.",
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "12 miles southeast of our Hillsboro base",
    metaDescription:
      "Hamilton, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified repair, installation, and maintenance for Hamilton homes. Local, licensed, and insured.",
    intro:
      "Hamilton is a small incorporated town on Route 7 between Purcellville and Leesburg, with a walkable historic core and a mix of older and newer surrounding homes. Sturrock's HVAC Solutions has been serving Hamilton residents for over 14 years, with NATE-certified technicians familiar with the town's housing stock and what works here.",
    localContext:
      "The homes in Hamilton's town center date back decades and sometimes over a century — which means HVAC work here often involves careful ductwork planning, retrofits into limited mechanical space, and equipment sized for older envelopes that aren't as tight as newer construction. Newer subdivisions in the surrounding area have more conventional HVAC setups. Because we're just down Route 7 in Hillsboro, we can typically respond to Hamilton service calls within a short drive — something that matters on a cold January morning when heat is out.",
  },
  {
    slug: "middleburg",
    name: "Middleburg",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    tier: 1,
    distanceNote: "15 miles southwest of our Hillsboro base",
    metaDescription:
      "Middleburg, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified technicians experienced with historic and estate homes. Licensed, insured, 24/7 emergency service.",
    intro:
      "Middleburg sits at the heart of Virginia's horse and wine country — a historic town surrounded by estate properties, working farms, and some of the oldest homes in Loudoun County. HVAC work in Middleburg often involves more than routine service: historic homes, large properties, and guest facilities each have their own considerations. Sturrock's HVAC Solutions brings NATE-certified expertise to every visit.",
    localContext:
      "Middleburg homes include some of the most architecturally significant properties in Northern Virginia, and HVAC work here frequently involves careful integration with historic building envelopes, discreet equipment placement, and systems sized for homes that don't conform to typical suburban sizing tables. For estate properties with outbuildings, guest quarters, and multi-zone main houses, we design zoned systems that give homeowners precise control without running oversized equipment unnecessarily. We're also licensed for commercial work — useful for the inns, event venues, and tasting rooms that make up much of the Middleburg business community.",
  },
  // =============================
  // FAIRFAX COUNTY, VA (Tier 1)
  // =============================
  {
    slug: "herndon",
    name: "Herndon",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "30 miles east of our Hillsboro base",
    metaDescription:
      "Herndon, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified repair, installation, and maintenance. Experienced with Herndon's mixed housing stock.",
    intro:
      "Herndon is an incorporated town in Fairfax County with a walkable historic downtown and decades of residential growth radiating outward. The housing stock ranges from early-20th-century homes near the W&OD trail to 1990s-and-newer developments closer to Dulles. Sturrock's HVAC Solutions brings NATE-certified technicians to every Herndon call.",
    localContext:
      "Herndon's housing diversity is a defining feature: we might service a 1920s bungalow one day and a 2010 townhouse the next, and the right HVAC approach is dramatically different between them. Older homes often benefit from ductwork repair and right-sized replacement equipment; newer homes are usually candidates for high-efficiency heat pumps and smart thermostat integration. The town's position near Dulles means we also do a fair amount of commercial HVAC work along the Route 28 and Elden Street corridors. Metro Silver Line expansion has accelerated growth in Herndon, and we see both increased demand and increasingly mixed-use HVAC needs as that continues.",
  },
  {
    slug: "vienna",
    name: "Vienna",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "40 miles east of our Hillsboro base",
    metaDescription:
      "Vienna, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified technicians for repair, installation, and maintenance. Licensed, insured, 24/7 emergency service.",
    intro:
      "Vienna is an affluent incorporated town known for its tree-lined streets, historic downtown, and established residential neighborhoods. The town's charm comes with older housing stock in many areas — which means HVAC work here often involves careful retrofit planning, custom ductwork, and equipment sized to work well in homes that were never designed with modern systems in mind. Sturrock's HVAC Solutions delivers NATE-certified expertise to every Vienna service call.",
    localContext:
      "Many Vienna homes sit on mature tree-canopied lots and contain renovations layered over original construction. That often shows up in the HVAC system: original ductwork that's been patched over the decades, mismatched equipment from multiple replacement cycles, and homes where true load calculations haven't been done since the original build. We approach Vienna jobs by understanding the system end-to-end rather than just replacing what's broken — often the most value we deliver comes from identifying a ductwork imbalance or sizing issue that's been making the home uncomfortable for years. Because Vienna's building envelope varies so widely, cookie-cutter recommendations don't work here.",
  },
  {
    slug: "reston",
    name: "Reston",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "35 miles east of our Hillsboro base",
    metaDescription:
      "Reston, VA HVAC repair, installation, and maintenance from Sturrock's HVAC Solutions. NATE-certified technicians experienced with Reston's planned-community housing stock.",
    intro:
      "Reston is one of the original planned communities in Northern Virginia, with housing that dates back to the 1960s and continues through today. That range produces a distinctive HVAC landscape — aging original systems in the older village sections, and modern equipment in the more recent developments. Sturrock's HVAC Solutions has the experience to service both.",
    localContext:
      "Reston's older homes — especially in Lake Anne and the original village centers — are often on their third or fourth HVAC system by now, and the homes themselves were designed around mid-century ductwork and insulation standards. Proper load calculations matter here because defaulting to rule-of-thumb sizing in a Reston home from 1968 produces oversized equipment that short-cycles and wears out early. Newer Reston homes near the Metro Silver Line stations benefit more from modern high-efficiency installations and smart thermostat integration. Because Reston is densely wooded, we also spend time on airflow and humidity issues that less-shaded neighborhoods don't deal with in the same way.",
  },
  {
    slug: "mclean",
    name: "McLean",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "45 miles east of our Hillsboro base",
    metaDescription:
      "McLean, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified repair, installation, and maintenance for McLean's large and historic homes. Licensed and insured.",
    intro:
      "McLean's housing stock includes some of the largest single-family homes in Fairfax County, along with a mix of mid-century originals, custom rebuilds, and ongoing new construction. HVAC work in McLean regularly involves multi-zone systems, custom duct runs, and equipment sized for homes that don't fit typical sizing tables. Sturrock's HVAC Solutions brings NATE-certified expertise to every McLean service call.",
    localContext:
      "McLean homeowners often have specific comfort expectations — primary-suite temperature independence from the rest of the house, consistent humidity control, quiet operation in living areas — and those expectations are best met by properly designed zoned systems with high-quality equipment. Older McLean homes often need ductwork remediation before any meaningful comfort improvement can be delivered; newer builds benefit most from variable-speed equipment, advanced filtration, and indoor air quality solutions. We work extensively with larger homes and are comfortable designing systems around the actual building, not a one-size-fits-all template.",
  },
  {
    slug: "chantilly",
    name: "Chantilly",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "25 miles east of our Hillsboro base",
    metaDescription:
      "Chantilly, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified residential and light commercial repair, installation, and maintenance near Dulles.",
    intro:
      "Chantilly sits along the Dulles corridor in western Fairfax County, with a mix of residential neighborhoods, office parks, and retail centers. The housing stock is largely from the 1980s onward, which means much of it is hitting the window where HVAC replacement becomes the right choice rather than repair. Sturrock's HVAC Solutions has been serving Chantilly homeowners and businesses for over 14 years.",
    localContext:
      "Chantilly's neighborhoods — including Greenbriar, Franklin Farm, Brookfield, and surrounding communities — were largely built during the same ~20-year window, which means many homes are on similar system lifecycles. We see a lot of proactive replacement calls here from homeowners who recognize that pattern. For Chantilly's commercial corridors along Route 28 and Route 50, we also handle light commercial HVAC — rooftop units, split systems, and preventative maintenance contracts that keep office and retail spaces running reliably.",
  },
  {
    slug: "great-falls",
    name: "Great Falls",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "40 miles east of our Hillsboro base",
    metaDescription:
      "Great Falls, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified technicians for large estate homes. Zoned systems, high-efficiency installs, 24/7 emergency.",
    intro:
      "Great Falls has a semi-rural character unlike most of Fairfax County — larger lots, mature tree canopy, and estate-sized homes often on wells and septic systems. HVAC work here regularly involves multi-zone layouts, larger-capacity equipment, and careful integration with homes that sit on significant acreage. Sturrock's HVAC Solutions brings NATE-certified expertise to every Great Falls call.",
    localContext:
      "Great Falls homes often span multiple stories with finished basements, bonus spaces, and guest quarters that each have their own comfort requirements. A single-zone system rarely does these homes justice. We design zoned layouts that give homeowners real control — primary suites that stay cool independently in summer, finished basements that don't freeze up in winter, rarely-used guest wings that don't waste energy when unoccupied. The larger properties here also give us flexibility on equipment placement that denser neighborhoods don't offer, which can be an advantage for quieter operation and easier long-term service access.",
  },
  {
    slug: "tysons",
    name: "Tysons",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "45 miles east of our Hillsboro base",
    metaDescription:
      "Tysons, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified residential and light commercial HVAC repair, installation, and maintenance in Tysons Corner.",
    intro:
      "Tysons has transformed from a shopping district into one of Northern Virginia's most urban neighborhoods — with high-rise residential buildings, mixed-use complexes, and remaining single-family neighborhoods all within a few miles of each other. That mix produces an HVAC landscape that ranges from multi-family retrofit work to traditional residential service. Sturrock's HVAC Solutions brings NATE-certified expertise across the full range.",
    localContext:
      "Tysons' remaining single-family neighborhoods — many with homes dating to the 1950s and '60s — often need full HVAC overhauls rather than routine maintenance. Older homes here were built before modern insulation and duct design standards, and the improvements we can deliver with proper ductwork remediation plus high-efficiency equipment are often dramatic. Newer condo and townhome units in the Tysons core have their own considerations around equipment placement, noise, and integration with building-level systems. We're experienced with both, and comfortable sizing and installing equipment that works within the constraints of denser housing.",
  },
  {
    slug: "centreville",
    name: "Centreville",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "35 miles southeast of our Hillsboro base",
    metaDescription:
      "Centreville, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified repair, installation, and maintenance. 14+ years of experience with Centreville's housing stock.",
    intro:
      "Centreville runs along the Route 29 corridor in western Fairfax County, with a housing stock that's largely from the 1980s and 1990s — meaning most homes are now on their second HVAC system and many are due for replacement. Sturrock's HVAC Solutions has been serving Centreville homeowners for over 14 years with NATE-certified technicians who know the local housing patterns.",
    localContext:
      "Centreville neighborhoods like Sully Station, Virginia Run, and Little Rocky Run were largely built during a concentrated period, which means similar home designs, similar ductwork layouts, and similar system lifecycles. We've serviced enough homes in these developments to quickly recognize common issues and typical failure points — which means less diagnostic time and faster resolution on service calls. Centreville's position near the Manassas battlefield area also means some older homes with larger lots that don't follow the planned-community pattern, and we handle those just as readily.",
  },
  {
    slug: "burke",
    name: "Burke",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    tier: 1,
    distanceNote: "50 miles southeast of our Hillsboro base",
    metaDescription:
      "Burke, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified repair, installation, and maintenance. Experienced with Burke Centre, Lake Braddock, and surrounding communities.",
    intro:
      "Burke is one of the larger unincorporated communities in Fairfax County, with neighborhoods like Burke Centre, Lake Braddock, and Longwood Knolls making up a mostly residential landscape built largely in the 1970s and '80s. Most original HVAC systems have been replaced at least once by now, and many homes are on their second replacement cycle. Sturrock's HVAC Solutions brings NATE-certified expertise to every Burke service call.",
    localContext:
      "Burke's housing stock is largely consistent in age, which means similar considerations apply across much of the community — aging ductwork that's been patched over decades of system replacements, envelope assumptions based on 1970s-80s construction, and equipment often sized to original-era loads rather than post-upgrade actual loads. Load calculations matter here because simply replacing what's there perpetuates sizing errors that have accumulated over multiple generations of equipment. We see real comfort improvements when we right-size a system properly for the actual home as it exists today.",
  },
  // Fairfax independent cities — rendered at /service-areas/<state>/<slug>
  // (peer to county URLs) since they are not legally within Fairfax County.
  {
    slug: "fairfax-city",
    name: "Fairfax City",
    state: "VA",
    stateSlug: "virginia",
    county: "City of Fairfax",
    countySlug: "fairfax-city",
    tier: 1,
    isIndependentCity: true,
    distanceNote: "42 miles southeast of our Hillsboro base",
    metaDescription:
      "Fairfax City, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified repair, installation, and maintenance for the City of Fairfax. 24/7 emergency service.",
    intro:
      "The City of Fairfax is an independent Virginia city — legally separate from Fairfax County — with a walkable historic downtown and a mix of established residential neighborhoods. Its housing stock spans from historic homes near the original city center to 1960s-80s subdivisions and newer infill. Sturrock's HVAC Solutions has been serving the City of Fairfax with NATE-certified technicians for over 14 years.",
    localContext:
      "Historic homes in Old Town Fairfax often require careful HVAC retrofitting — modern systems in old spaces, ductwork threaded through original construction, and equipment sized for building envelopes that don't match typical modern assumptions. Established post-war neighborhoods near the city core are often in the prime window for replacement and meaningful efficiency upgrades. Because the City of Fairfax is geographically compact, we can often handle multiple service calls efficiently when we're on-site. We also do light commercial HVAC work along the Route 50 and Main Street corridors.",
  },
  {
    slug: "falls-church",
    name: "Falls Church",
    state: "VA",
    stateSlug: "virginia",
    county: "City of Falls Church",
    countySlug: "falls-church",
    tier: 1,
    isIndependentCity: true,
    distanceNote: "50 miles east of our Hillsboro base",
    metaDescription:
      "Falls Church, VA HVAC services from Sturrock's HVAC Solutions. NATE-certified repair, installation, and maintenance for \"The Little City.\" Licensed, insured, and local.",
    intro:
      "Falls Church — \"The Little City\" — is one of Virginia's smallest independent cities, densely populated and highly walkable, with housing that ranges from early-20th-century homes to contemporary infill construction. HVAC work here often means fitting modern systems into constrained spaces and older building envelopes. Sturrock's HVAC Solutions has the NATE-certified experience to handle both.",
    localContext:
      "Falls Church homes are often smaller-footprint than typical Fairfax County properties, which means equipment placement, noise management, and ductwork routing are more constrained and require careful planning. Many homes have undergone renovations that layer modern spaces onto original construction, creating HVAC zones that don't follow the original system's design. We regularly do ductwork redesign and zoning work to address those post-renovation comfort problems. The city's compact geography also makes it practical for us to do detailed consultations and follow-up service without the drive times that larger service areas impose.",
  },
  // =============================
  // FREDERICK COUNTY, MD (Tier 1)
  // =============================
  {
    slug: "frederick",
    name: "Frederick",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    countySlug: "frederick-county",
    tier: 1,
    distanceNote: "30 miles north of our Hillsboro base",
    metaDescription:
      "Frederick, MD HVAC services from Sturrock's HVAC Solutions. Maryland-licensed NATE-certified technicians for repair, installation, and maintenance. 24/7 emergency service.",
    intro:
      "Frederick is the seat of Frederick County, Maryland — a historic city with one of the most extensive preserved downtowns on the East Coast, surrounded by decades of residential growth in every direction. The HVAC landscape here is as varied as the housing stock, from historic rowhouses to sprawling new construction. Sturrock's HVAC Solutions is Maryland-licensed (HVACR #85109) and has been serving Frederick homeowners for over 14 years.",
    localContext:
      "Frederick's historic core contains some of the oldest continuously occupied homes in the state, many with three-story narrow footprints that present unique HVAC considerations — limited mechanical space, long duct runs, and load patterns that don't match typical suburban sizing. Newer Frederick neighborhoods like those in Urbana, Ballenger Creek, and along Route 340 call for more conventional residential work, often with an emphasis on high-efficiency replacements and smart thermostat integration. Because Frederick sits at the edge of the Catoctin Mountains, winter temperatures here can run colder than the Loudoun Valley average, and we size heating systems accordingly.",
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    countySlug: "frederick-county",
    tier: 1,
    distanceNote: "15 miles north of our Hillsboro base, across the Potomac",
    metaDescription:
      "Brunswick, MD HVAC services from Sturrock's HVAC Solutions. Maryland-licensed, NATE-certified repair, installation, and maintenance. Just across the Potomac from our Hillsboro base.",
    intro:
      "Brunswick sits right across the Potomac from Lovettsville — a historic railroad town with a tight community and housing that ranges from late-1800s rowhouses to newer homes on the surrounding hills. Sturrock's HVAC Solutions is Maryland-licensed and based just 15 miles south in Hillsboro, which makes us one of the closer local HVAC contractors serving the Brunswick area.",
    localContext:
      "Brunswick's historic rowhouses present distinctive HVAC challenges — narrow floor plans, shared walls, tight mechanical spaces, and original construction that predates modern duct design by a century. We've done enough work in town to know the typical layouts and what equipment fits best. Newer homes on the slopes above town have more conventional HVAC setups. Because we cross the Brunswick Bridge regularly for work in Point of Rocks, Jefferson, and Frederick, we can often combine service visits efficiently — and because we're Maryland-licensed (HVACR #85109), there's no jurisdiction issue with us doing work north of the Potomac.",
  },
  {
    slug: "middletown",
    name: "Middletown",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    countySlug: "frederick-county",
    tier: 1,
    distanceNote: "35 miles north of our Hillsboro base",
    metaDescription:
      "Middletown, MD HVAC services from Sturrock's HVAC Solutions. Maryland-licensed NATE-certified technicians. Repair, installation, and 24/7 emergency service.",
    intro:
      "Middletown sits in the Middletown Valley between Catoctin Mountain and South Mountain — a small town with a walkable historic core and growing residential development along Route 40 and the surrounding valley. Sturrock's HVAC Solutions is Maryland-licensed (HVACR #85109) and serves Middletown homeowners with NATE-certified technicians.",
    localContext:
      "Middletown's historic downtown has homes dating back well over a century, with all the ductwork and sizing considerations that come with retrofit work in older buildings. Newer developments on the edges of the valley are more conventional modern residential HVAC work. The valley's position between two mountain ridges creates some distinctive weather patterns — wind, temperature inversions, and more variable conditions than flat-terrain neighborhoods — and we factor that into equipment sizing and recommendations for Middletown homes.",
  },
  {
    slug: "point-of-rocks",
    name: "Point of Rocks",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    countySlug: "frederick-county",
    tier: 1,
    distanceNote: "18 miles north of our Hillsboro base, across the Potomac",
    metaDescription:
      "Point of Rocks, MD HVAC services from Sturrock's HVAC Solutions. Maryland-licensed, NATE-certified, and based just across the Potomac. Repair, installation, and 24/7 emergency service.",
    intro:
      "Point of Rocks is a small community on the Maryland side of the Potomac, known for its historic 1875 train station and rural character. Sturrock's HVAC Solutions is just 18 miles south of Point of Rocks in Hillsboro, and we're Maryland-licensed (HVACR #85109) — which means Point of Rocks residents get both proximity and proper licensing when they call us.",
    localContext:
      "Point of Rocks homes are a mix of historic properties near the river and train station, and newer builds on the surrounding hillsides. Because the community is small and rural, HVAC contractors dispatched from Frederick or farther are often not prioritizing this area — which means long waits for service, especially in an emergency. We're close enough to treat Point of Rocks calls the same as we'd treat any Loudoun service call. Older homes here often benefit from ductwork assessment and right-sized replacement equipment; newer homes generally need standard preventative maintenance and eventual equipment replacement as it ages.",
  },
];

// =============================
// TIER 2: REGIONAL LANDING PAGES
// =============================
//
// Each tier-2 page covers multiple smaller communities grouped by geography.
// This lets us provide substantive, indexable content for every place without
// creating 100+ near-duplicate pages that Google's Helpful Content system
// would flag as scaled content abuse.

export type RegionalPlace = {
  slug: string;
  name: string;
  blurb: string;
};

export type RegionalLandingPage = {
  slug: string;
  name: string;
  state: "VA" | "MD";
  stateSlug: StateSlug;
  county: string;
  countySlug: CountySlug;
  intro: string;
  overview: string;
  metaDescription: string;
  places: RegionalPlace[];
};

export const regionalLandingPages: RegionalLandingPage[] = [
  // =============================
  // LOUDOUN COUNTY (2 pages)
  // =============================
  {
    slug: "western-villages",
    name: "Western Loudoun Villages",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    metaDescription:
      "HVAC service across western Loudoun County's small villages — Waterford, Bluemont, Lincoln, Lucketts, Paeonian Springs, Philomont, Saint Louis, Taylorstown, Unison.",
    intro:
      "Western Loudoun's small villages have a distinctive character — historic stone and clapboard homes, narrow farm roads, working orchards and vineyards, and some of the most architecturally significant properties in Northern Virginia. Sturrock's HVAC Solutions is based in Hillsboro at the heart of this region, which makes us the closest HVAC contractor for most of these communities.",
    overview:
      "Many of the homes in these villages predate modern HVAC design by a century or more. That means retrofitting work is less about swapping equipment and more about thoughtful system design — ductwork that threads through original construction without compromising historic fabric, equipment sized for actual envelopes rather than standard tables, and a willingness to take the time required to do things right. Because we live and work here, we approach these projects the way homeowners want: with patience and care for the property.",
    places: [
      {
        slug: "waterford",
        name: "Waterford",
        blurb:
          "Waterford is a National Historic Landmark — an 18th-century Quaker village preserved almost entirely intact. HVAC work here requires special care: equipment placement that doesn't disrupt historic sightlines, ductwork that threads through original construction, and sizing that accounts for envelopes built long before modern insulation standards. We have the experience to do it right.",
      },
      {
        slug: "bluemont",
        name: "Bluemont",
        blurb:
          "Bluemont sits at the base of the Blue Ridge at the western edge of Loudoun County — orchard country, winery country, with mountain elevation that can drop temperatures several degrees below the county average. We size heating systems for those real conditions. The mix of historic farmhouses and newer mountain-view builds each need specific attention.",
      },
      {
        slug: "lincoln",
        name: "Lincoln",
        blurb:
          "Lincoln is a small Quaker-heritage village just south of Purcellville with a tight-knit community and mostly older homes. HVAC work here usually means retrofit and replacement rather than new installations — and right-sizing equipment for actual building envelopes is more valuable than defaulting to typical suburban sizing assumptions.",
      },
      {
        slug: "lucketts",
        name: "Lucketts",
        blurb:
          "Lucketts sits in northern Loudoun between Leesburg and the Potomac — known for its antiques district and rural character. Housing ranges from historic farmhouses to newer homes on the surrounding land. Because it's closer to us in Hillsboro than it is to most HVAC contractors dispatched from the east, we can typically respond to Lucketts service calls faster than the alternatives.",
      },
      {
        slug: "paeonian-springs",
        name: "Paeonian Springs",
        blurb:
          "Paeonian Springs is a tiny rural community between Purcellville and Leesburg, mostly single-family homes on larger lots. Standard residential HVAC service applies here — repair, replacement, and preventative maintenance — and we handle it all.",
      },
      {
        slug: "philomont",
        name: "Philomont",
        blurb:
          "Philomont is a rural crossroads village in central Loudoun with a strong Quaker heritage and a scattered housing footprint across the surrounding farmland. We service it the same way we service any of our home county communities — promptly, properly, and with equipment sized for the actual home.",
      },
      {
        slug: "saint-louis",
        name: "Saint Louis",
        blurb:
          "Saint Louis is a small rural community in central Loudoun County. HVAC contractors dispatched from farther east often treat communities this size as an afterthought; we treat them the same as any other service call.",
      },
      {
        slug: "taylorstown",
        name: "Taylorstown",
        blurb:
          "Taylorstown is a small rural village in northern Loudoun not far from Lovettsville and our Hillsboro base. Historic homes mix with newer properties; HVAC work here usually means careful retrofits and right-sized replacement equipment.",
      },
      {
        slug: "unison",
        name: "Unison",
        blurb:
          "Unison is a small historic village southwest of Middleburg in the heart of horse country. Housing skews toward historic homes and estate properties — HVAC design here often means multi-zone systems that give homeowners real control across larger, older structures.",
      },
    ],
  },
  {
    slug: "eastern-communities",
    name: "Eastern Loudoun Communities",
    state: "VA",
    stateSlug: "virginia",
    county: "Loudoun County",
    countySlug: "loudoun-county",
    metaDescription:
      "HVAC service across eastern Loudoun's planned communities — Aldie, Arcola, Belmont, Broadlands, Cascades, Countryside, Lansdowne, One Loudoun, Moorefield, Sugarland Run, and more.",
    intro:
      "Eastern Loudoun County's residential landscape is dominated by planned communities and CDPs built largely since the 1990s — master-planned neighborhoods, golf-course communities, and townhome developments that collectively house the majority of Loudoun's population. Most homes here are reaching the age where first-generation HVAC equipment needs replacement, and Sturrock's HVAC Solutions has the experience to match the right equipment to each community's housing stock.",
    overview:
      "These communities were designed from the beginning around modern HVAC standards, which means they respond well to high-efficiency replacements, variable-speed equipment, and smart thermostat integration. Load calculations are particularly important here because homes built in the 1990s-2000s have specific envelope characteristics that don't match typical suburban assumptions — we see a lot of oversized-system issues from rule-of-thumb replacements done by contractors who didn't run the numbers. Right-sizing delivers real comfort improvement and lower long-term operating costs.",
    places: [
      {
        slug: "aldie",
        name: "Aldie",
        blurb:
          "Aldie is a historic crossroads village at the intersection of Route 50 and John Mosby Highway in southern Loudoun. Housing ranges from historic homes in the village itself to newer subdivisions on the surrounding roads. Standard residential HVAC service applies, with attention to the specific envelope characteristics of each home.",
      },
      {
        slug: "arcola",
        name: "Arcola",
        blurb:
          "Arcola is a fast-growing community in southeastern Loudoun near the Dulles airport corridor, with mostly newer construction. Homes here benefit from modern variable-speed equipment and are well-matched to smart thermostat integration.",
      },
      {
        slug: "belmont",
        name: "Belmont",
        blurb:
          "Belmont Country Club is an established planned community near Ashburn with larger single-family homes from the 1990s-2000s. Many are now at the replacement window for original HVAC equipment — high-efficiency heat pumps and zoned systems are particularly well-suited to the housing stock.",
      },
      {
        slug: "broadlands",
        name: "Broadlands",
        blurb:
          "Broadlands is one of the large master-planned communities between Ashburn and Brambleton, with housing built mostly in the late 1990s and 2000s. Most original HVAC equipment is now at end-of-life, and we see a steady pattern of replacement calls throughout the community.",
      },
      {
        slug: "cascades",
        name: "Cascades",
        blurb:
          "Cascades is a large CDP near the Potomac River in eastern Loudoun, with a mix of housing ages from 1980s-2000s. Older Cascades homes often need full-system replacement; newer sections benefit from maintenance and eventual first-generation replacement.",
      },
      {
        slug: "countryside",
        name: "Countryside",
        blurb:
          "Countryside is an established Sterling-adjacent CDP with 1970s-80s housing stock. Most homes are on their second or third HVAC system by now; we focus on right-sizing replacement equipment for actual envelopes rather than perpetuating original sizing assumptions.",
      },
      {
        slug: "dulles-town-center",
        name: "Dulles Town Center",
        blurb:
          "Dulles Town Center is the commercial and residential hub near the eastern Loudoun/Fairfax boundary, with light commercial properties and residential CDPs. We handle both rooftop and split-system work in the commercial corridor along with standard residential service.",
      },
      {
        slug: "goose-creek-village",
        name: "Goose Creek Village",
        blurb:
          "Goose Creek Village is a mixed-use community in eastern Loudoun with townhomes, apartments, and retail. Homes here are newer and generally in good condition — preventative maintenance and smart thermostat upgrades are the common service patterns.",
      },
      {
        slug: "kincora",
        name: "Kincora",
        blurb:
          "Kincora is a newer mixed-use development in eastern Loudoun. Residential components benefit from modern equipment standards; we handle both the residential and the light commercial HVAC needs in the area.",
      },
      {
        slug: "lansdowne",
        name: "Lansdowne",
        blurb:
          "Lansdowne is an established planned community near Leesburg along the Potomac, with larger single-family homes and a golf course. Most homes are now at the window where original HVAC is due for replacement; variable-speed equipment and zoned systems are particularly well-suited to the larger floor plans.",
      },
      {
        slug: "loudoun-valley-estates",
        name: "Loudoun Valley Estates",
        blurb:
          "Loudoun Valley Estates is a residential development in eastern Loudoun with mostly 1990s-2000s housing. HVAC replacement is the common service pattern as the original equipment reaches end-of-life.",
      },
      {
        slug: "lowes-island",
        name: "Lowes Island",
        blurb:
          "Lowes Island is an established Sterling-area community with homes from the 1980s-90s. Most homes are on their second HVAC system; we focus on load calculations to right-size replacement equipment rather than repeating original sizing errors.",
      },
      {
        slug: "moorefield",
        name: "Moorefield",
        blurb:
          "Moorefield is a planned community in eastern Loudoun with newer housing. Modern HVAC standards apply; preventative maintenance, smart thermostat integration, and first-generation replacements are the common needs.",
      },
      {
        slug: "one-loudoun",
        name: "One Loudoun",
        blurb:
          "One Loudoun is a mixed-use community in Ashburn with residential, retail, and office components. Residential HVAC here is newer and well-designed; the commercial corridor involves light commercial HVAC work that we handle regularly.",
      },
      {
        slug: "sugarland-run",
        name: "Sugarland Run",
        blurb:
          "Sugarland Run is a Sterling-adjacent established CDP with 1970s-80s housing. Many homes are on their third HVAC system; load calculations and ductwork assessment matter more here than in newer neighborhoods.",
      },
      {
        slug: "university-center",
        name: "University Center",
        blurb:
          "University Center is a mixed-use community in eastern Loudoun near Ashburn. Newer housing with modern HVAC standards applies; we handle residential service alongside light commercial work in the surrounding area.",
      },
    ],
  },
  // =============================
  // FAIRFAX COUNTY (5 pages)
  // =============================
  {
    slug: "southern-communities",
    name: "Southern Fairfax Communities",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    metaDescription:
      "HVAC service across southern Fairfax County — Lorton, Mount Vernon, Fort Belvoir area, Fort Hunt, Mason Neck, Woodlawn, Kingstowne, and Richmond Highway communities.",
    intro:
      "Southern Fairfax County runs along the Richmond Highway corridor and the Potomac River south of the Beltway — a mix of historic homes near Mount Vernon, 1950s-80s suburban neighborhoods, and newer townhome developments near Fort Belvoir. The housing diversity produces a correspondingly diverse HVAC landscape, and Sturrock's HVAC Solutions has NATE-certified technicians experienced across the range.",
    overview:
      "Many of the homes in southern Fairfax date to the 1950s and '60s, which means the original HVAC systems have been replaced multiple times. Accumulated sizing errors across those replacement cycles are common, and ductwork that's been patched repeatedly often underperforms in ways homeowners have simply learned to live with. We approach these jobs by looking at the whole system — not just replacing what's broken, but identifying what needs to change for the home to actually work the way it should.",
    places: [
      {
        slug: "lorton",
        name: "Lorton",
        blurb:
          "Lorton sits in far southern Fairfax County with a mix of older neighborhoods and newer townhome developments. Housing ages are widely varied; we match equipment to the actual home rather than defaulting to generic sizing.",
      },
      {
        slug: "mount-vernon",
        name: "Mount Vernon",
        blurb:
          "Mount Vernon-area homes include some of the most historic properties in the region alongside established suburban neighborhoods. HVAC work here often involves careful retrofit planning and equipment sized for older envelopes.",
      },
      {
        slug: "fort-belvoir",
        name: "Fort Belvoir",
        blurb:
          "The Fort Belvoir area includes both military housing and surrounding residential neighborhoods. We handle residential HVAC service throughout the surrounding civilian neighborhoods with the same care and responsiveness we bring anywhere.",
      },
      {
        slug: "fort-hunt",
        name: "Fort Hunt",
        blurb:
          "Fort Hunt is an established neighborhood near Mount Vernon with mostly mid-century single-family homes. Original HVAC has long since been replaced; right-sizing and ductwork assessment are common focuses in our work here.",
      },
      {
        slug: "mason-neck",
        name: "Mason Neck",
        blurb:
          "Mason Neck is a peninsula community in southern Fairfax with larger lots and a mix of housing ages. Service here often means longer drive times between calls, so we batch work efficiently and focus on thorough service visits.",
      },
      {
        slug: "woodlawn",
        name: "Woodlawn",
        blurb:
          "Woodlawn is a historic community near Mount Vernon. Housing mixes historic properties with mid-century suburban neighborhoods; HVAC work varies accordingly.",
      },
      {
        slug: "newington",
        name: "Newington",
        blurb:
          "Newington is an established community in southern Fairfax near the Beltway. Housing is largely mid-century; many homes are now on their third HVAC cycle.",
      },
      {
        slug: "newington-forest",
        name: "Newington Forest",
        blurb:
          "Newington Forest is a residential neighborhood with 1980s-90s housing. Most homes are at or past the replacement window for original HVAC equipment.",
      },
      {
        slug: "laurel-hill",
        name: "Laurel Hill",
        blurb:
          "Laurel Hill is a newer planned community on the former Lorton Prison site. Housing is modern and responds well to high-efficiency equipment and smart thermostat integration.",
      },
      {
        slug: "hayfield",
        name: "Hayfield",
        blurb:
          "Hayfield is an established residential area in southern Fairfax. Housing is mostly 1970s-80s; load-calc-based replacement is typically more valuable than like-for-like swaps.",
      },
      {
        slug: "groveton",
        name: "Groveton",
        blurb:
          "Groveton is a community along the Richmond Highway corridor with mixed housing ages. Standard residential HVAC service applies, with attention to the specific envelope of each home.",
      },
      {
        slug: "hybla-valley",
        name: "Hybla Valley",
        blurb:
          "Hybla Valley is an established residential community in southern Fairfax with mid-century housing. Most homes have had multiple HVAC replacements; we focus on correcting accumulated sizing errors.",
      },
      {
        slug: "belle-haven",
        name: "Belle Haven",
        blurb:
          "Belle Haven is an affluent established neighborhood near the Potomac with larger homes and mature landscaping. Multi-zone systems often make sense here for whole-house comfort.",
      },
      {
        slug: "huntington",
        name: "Huntington",
        blurb:
          "Huntington is an established community near the Beltway in southern Fairfax. Housing is largely mid-century; many homes benefit from ductwork assessment alongside equipment replacement.",
      },
    ],
  },
  {
    slug: "central-communities",
    name: "Central Fairfax Communities",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    metaDescription:
      "HVAC service across central Fairfax County — Fairfax Station, Mantua, Kings Park, Oakton, Merrifield, Dunn Loring, and surrounding communities.",
    intro:
      "Central Fairfax County covers the area between the City of Fairfax, the Beltway, and the major commuter corridors — a region of mature suburban neighborhoods with substantial residential populations. Most of this area was built out between the 1960s and 1990s, which means original HVAC equipment has been replaced multiple times and accumulated sizing errors are common.",
    overview:
      "The housing diversity here — from 1960s ramblers to 1990s executive homes — means a one-size-fits-all approach doesn't work. We run load calculations on every significant job, assess ductwork condition rather than assuming, and match equipment to the actual building envelope. For homes that have been through multiple renovation cycles, the HVAC system often wasn't updated to match — identifying and correcting that is often where we deliver the most value.",
    places: [
      {
        slug: "mantua",
        name: "Mantua",
        blurb:
          "Mantua is an affluent established neighborhood near the City of Fairfax with mostly 1960s-70s housing. Homes often have had renovations layered on top of original construction — updating HVAC to match the renovated footprint is common work here.",
      },
      {
        slug: "fairfax-station",
        name: "Fairfax Station",
        blurb:
          "Fairfax Station is an upscale community in central Fairfax with larger homes on wooded lots, mostly from the 1980s-90s. Multi-zone systems are particularly well-suited to the larger floor plans and finished basements common in the area.",
      },
      {
        slug: "george-mason",
        name: "George Mason",
        blurb:
          "George Mason is an established community adjacent to the university of the same name. Housing is largely mid-century to 1980s; standard residential HVAC service applies.",
      },
      {
        slug: "kings-park",
        name: "Kings Park",
        blurb:
          "Kings Park is an established community in central Fairfax with mostly 1960s-70s housing. Most homes are on their third HVAC cycle; load-calc-based replacement is valuable here.",
      },
      {
        slug: "kings-park-west",
        name: "Kings Park West",
        blurb:
          "Kings Park West is a companion community to Kings Park with similar housing stock and HVAC considerations. Aging ductwork often needs attention alongside equipment replacement.",
      },
      {
        slug: "woodburn",
        name: "Woodburn",
        blurb:
          "Woodburn is an established residential community in central Fairfax. Housing is largely mid-century; routine residential HVAC service applies.",
      },
      {
        slug: "long-branch",
        name: "Long Branch",
        blurb:
          "Long Branch is an established community with mixed housing ages. We match equipment to each home's actual envelope rather than assuming standard sizing.",
      },
      {
        slug: "ravensworth",
        name: "Ravensworth",
        blurb:
          "Ravensworth is an established residential area. Mid-century housing stock means most homes are on their second or third HVAC system; accumulated sizing issues are common.",
      },
      {
        slug: "wakefield",
        name: "Wakefield",
        blurb:
          "Wakefield is an established community in central Fairfax. Housing ages vary; we approach each job with the specific building in mind.",
      },
      {
        slug: "oakton",
        name: "Oakton",
        blurb:
          "Oakton is an affluent established community with larger homes on wooded lots. Many homes are candidates for multi-zone systems and high-efficiency variable-speed equipment.",
      },
      {
        slug: "merrifield",
        name: "Merrifield",
        blurb:
          "Merrifield is a mixed-use community near the Beltway and the Merrifield Metro corridor. Residential HVAC work is standard; we also handle light commercial work in the growing retail and office footprint.",
      },
      {
        slug: "dunn-loring",
        name: "Dunn Loring",
        blurb:
          "Dunn Loring is an established community near the Metro corridor. Housing mixes mid-century homes with newer infill; HVAC approach varies accordingly.",
      },
    ],
  },
  {
    slug: "seven-corners-area",
    name: "Seven Corners & Annandale Area",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    metaDescription:
      "HVAC service across the Seven Corners, Annandale, and Route 7 corridor — Bailey's Crossroads, Lincolnia, Lake Barcroft, West Falls Church, Pimmit Hills, Idylwood.",
    intro:
      "The Seven Corners and Annandale area runs along the Route 7 and Leesburg Pike corridors inside the Beltway — a densely populated region with some of the oldest suburban housing in Fairfax County. Many homes here date to the 1940s-60s and have complex HVAC histories spanning multiple replacement cycles.",
    overview:
      "Older suburban housing means older ductwork, and older ductwork means real opportunities to improve comfort when equipment is replaced. Load calculations matter more in this area than almost anywhere else in our service footprint — the original equipment was sized for homes that have since been renovated, expanded, and re-insulated, and the current system often doesn't match the current building. We see dramatic comfort improvements when the HVAC is finally sized for the home as it actually exists.",
    places: [
      {
        slug: "seven-corners",
        name: "Seven Corners",
        blurb:
          "Seven Corners is a dense commercial and residential area at the intersection of multiple major routes. Housing is largely mid-century; we handle both residential and light commercial HVAC in the corridor.",
      },
      {
        slug: "baileys-crossroads",
        name: "Bailey's Crossroads",
        blurb:
          "Bailey's Crossroads is a dense mixed-use community along the Columbia Pike corridor. Residential HVAC here often involves older buildings and apartment-style considerations alongside standard single-family work.",
      },
      {
        slug: "lincolnia",
        name: "Lincolnia",
        blurb:
          "Lincolnia is an established residential community with mostly mid-century housing. Most homes are on their third HVAC cycle; ductwork assessment often matters more than equipment spec alone.",
      },
      {
        slug: "annandale",
        name: "Annandale",
        blurb:
          "Annandale is a large established community with 1950s-70s housing stock. Accumulated sizing errors across multiple replacement cycles are common here; we run load calculations to correct them.",
      },
      {
        slug: "lake-barcroft",
        name: "Lake Barcroft",
        blurb:
          "Lake Barcroft is an affluent lake community with larger mid-century homes. Multi-zone systems and high-efficiency equipment are typically good fits; we design around the actual building.",
      },
      {
        slug: "pimmit-hills",
        name: "Pimmit Hills",
        blurb:
          "Pimmit Hills is an established post-war community with compact 1950s homes. Right-sizing replacement equipment matters here — oversized systems short-cycle in small envelopes and wear out early.",
      },
      {
        slug: "west-falls-church",
        name: "West Falls Church",
        blurb:
          "West Falls Church is an established community near the City of Falls Church and Metro. Housing mixes mid-century and newer infill; HVAC approach varies accordingly.",
      },
      {
        slug: "idylwood",
        name: "Idylwood",
        blurb:
          "Idylwood is an established residential area with mostly mid-century housing. Mature tree canopy affects airflow considerations; we account for that in humidity management and equipment placement.",
      },
    ],
  },
  {
    slug: "burke-springfield-area",
    name: "Burke & Springfield Area",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    metaDescription:
      "HVAC service across the Burke and Springfield area of Fairfax County — Burke Centre, West Springfield, North Springfield, Franconia, Rose Hill, South Run, and more.",
    intro:
      "The Burke and Springfield area of southeastern Fairfax County represents one of the largest concentrations of 1970s-80s suburban housing in Northern Virginia. Most homes are now on their second or third HVAC system, and typical replacement patterns benefit significantly from load-calc-based right-sizing rather than like-for-like swaps.",
    overview:
      "Springfield and Burke-area homes were largely built in a concentrated window, which means they share similar housing characteristics and similar HVAC lifecycles. That familiarity lets us move efficiently through diagnostics and recommend solutions that actually fit the home. Because so many systems have been replaced two or three times, the cumulative sizing drift across those cycles often produces comfort issues the homeowner has learned to live with — we identify and correct them.",
    places: [
      {
        slug: "burke-centre",
        name: "Burke Centre",
        blurb:
          "Burke Centre is one of the largest planned communities in Fairfax County with consistent 1970s-80s housing stock. Similar homes and similar lifecycles make diagnostics efficient; replacement with correct sizing is the common recommendation.",
      },
      {
        slug: "springfield",
        name: "Springfield",
        blurb:
          "Springfield is a large unincorporated community with a mix of housing ages and types. Standard residential HVAC service applies; we run load calculations to match equipment to each home.",
      },
      {
        slug: "west-springfield",
        name: "West Springfield",
        blurb:
          "West Springfield is a companion community with similar 1970s-80s housing to Burke and Springfield. The same replacement-cycle patterns apply.",
      },
      {
        slug: "north-springfield",
        name: "North Springfield",
        blurb:
          "North Springfield is an established community with older housing stock. Many homes are on their third HVAC cycle; ductwork assessment matters alongside equipment replacement.",
      },
      {
        slug: "franconia",
        name: "Franconia",
        blurb:
          "Franconia is an established community in southeastern Fairfax with mostly 1970s-80s housing. Load-calc-based replacement delivers real comfort improvement here.",
      },
      {
        slug: "rose-hill",
        name: "Rose Hill",
        blurb:
          "Rose Hill is a residential community with established housing stock. Standard residential HVAC work applies, with focus on right-sizing replacement equipment.",
      },
      {
        slug: "south-run",
        name: "South Run",
        blurb:
          "South Run is a residential community in southern Fairfax with mostly 1980s housing. Most homes are at the window where original HVAC is due for replacement.",
      },
      {
        slug: "crosspointe",
        name: "Crosspointe",
        blurb:
          "Crosspointe is an established residential community with 1980s housing. Similar replacement patterns apply — most homes benefit from proper load calculations at the replacement stage.",
      },
    ],
  },
  {
    slug: "northern-communities",
    name: "Northern & Western Fairfax Communities",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    countySlug: "fairfax-county",
    metaDescription:
      "HVAC service across northern and western Fairfax County — Clifton, Wolf Trap, Floris, Fair Lakes, Fair Oaks, Greenbriar, Franklin Farm, Sully Square, and more.",
    intro:
      "Northern and western Fairfax County covers the Dulles corridor, the Great Falls orbit, and the residential communities strung along Routes 7, 28, and 50. The housing mix ranges from the tiny incorporated town of Clifton to large newer developments near Dulles; HVAC approaches vary accordingly.",
    overview:
      "This part of Fairfax includes some of the newer residential development in the county, which means more homes with modern building envelopes that respond well to high-efficiency variable-speed equipment. It also includes older estate-style properties in the Clifton and Great Falls areas that require thoughtful zoned systems. Our approach adapts to the home — load calculations, ductwork assessment, and equipment selection designed for what's actually there.",
    places: [
      {
        slug: "clifton",
        name: "Clifton",
        blurb:
          "Clifton is a tiny incorporated town in southwestern Fairfax — fewer than 300 residents, a historic village core, and surrounding larger-lot properties. HVAC work here often involves historic home considerations and multi-zone design for the larger surrounding properties.",
      },
      {
        slug: "wolf-trap",
        name: "Wolf Trap",
        blurb:
          "Wolf Trap is an established community known for its national park. Larger homes on wooded lots benefit from multi-zone systems; we design accordingly.",
      },
      {
        slug: "floris",
        name: "Floris",
        blurb:
          "Floris is a small community in western Fairfax near the Dulles corridor. Standard residential HVAC service applies.",
      },
      {
        slug: "mcnair",
        name: "McNair",
        blurb:
          "McNair is a newer community near Dulles with mostly 2000s-era housing. Modern HVAC standards apply; we handle installations and first-generation replacements.",
      },
      {
        slug: "fair-lakes",
        name: "Fair Lakes",
        blurb:
          "Fair Lakes is a mixed-use community with residential and commercial components. We handle residential HVAC alongside light commercial work in the surrounding office and retail footprint.",
      },
      {
        slug: "fair-oaks",
        name: "Fair Oaks",
        blurb:
          "Fair Oaks is an established community in central-western Fairfax with 1980s-90s housing. Most homes are at the replacement window for original equipment.",
      },
      {
        slug: "greenbriar",
        name: "Greenbriar",
        blurb:
          "Greenbriar is an established residential community in western Fairfax. Housing is largely mid- to late-century; standard residential HVAC work applies.",
      },
      {
        slug: "franklin-farm",
        name: "Franklin Farm",
        blurb:
          "Franklin Farm is a residential community with 1980s-90s housing. Similar replacement-cycle patterns to other same-era communities apply.",
      },
      {
        slug: "navy",
        name: "Navy",
        blurb:
          "Navy is a small community in western Fairfax. Standard residential HVAC service applies.",
      },
      {
        slug: "sully-square",
        name: "Sully Square",
        blurb:
          "Sully Square is a residential community in western Fairfax. We service it with the same responsiveness we bring to larger nearby communities.",
      },
      {
        slug: "union-mill",
        name: "Union Mill",
        blurb:
          "Union Mill is an established residential community near Centreville. Most homes are on their first or second HVAC replacement cycle.",
      },
      {
        slug: "hutchison",
        name: "Hutchison",
        blurb:
          "Hutchison is a small community in western Fairfax. Standard residential HVAC service applies.",
      },
      {
        slug: "difficult-run",
        name: "Difficult Run",
        blurb:
          "Difficult Run is a residential community near Great Falls. Larger properties benefit from multi-zone systems for whole-house comfort.",
      },
      {
        slug: "dranesville",
        name: "Dranesville",
        blurb:
          "Dranesville is a community in northern Fairfax. Housing is mixed; we match equipment to the specific home.",
      },
      {
        slug: "great-falls-crossing",
        name: "Great Falls Crossing",
        blurb:
          "Great Falls Crossing is a residential community adjacent to Great Falls. Larger homes on established lots typically benefit from zoned HVAC design.",
      },
      {
        slug: "bull-run",
        name: "Bull Run",
        blurb:
          "Bull Run is a community in western Fairfax near the Manassas battlefield area. Mixed housing ages; standard residential HVAC service applies.",
      },
    ],
  },
  // =============================
  // FREDERICK COUNTY, MD (2 pages)
  // =============================
  {
    slug: "central-communities",
    name: "Central Frederick Communities",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    countySlug: "frederick-county",
    metaDescription:
      "HVAC service across central Frederick County, MD — Adamstown, Ballenger Creek, Braddock Heights, Buckeystown, Green Valley, Jefferson, Knoxville, Linganore, Urbana.",
    intro:
      "Central Frederick County includes the CDPs and unincorporated communities surrounding the city of Frederick itself — a mix of newer suburban development, historic rural villages, and growing residential areas along the major commuter corridors. Sturrock's HVAC Solutions is Maryland-licensed (HVACR #85109) and serves the full central Frederick footprint.",
    overview:
      "Frederick's proximity to our Hillsboro base — and our Maryland license — makes this area a natural extension of our core service territory. We bring the same approach across the Potomac as we do in Loudoun: proper load calculations, thorough ductwork assessment, and equipment sized for the home as it actually exists.",
    places: [
      {
        slug: "adamstown",
        name: "Adamstown",
        blurb:
          "Adamstown is a historic railroad community in southern Frederick County near the Potomac. Housing mixes historic properties with newer homes on surrounding land.",
      },
      {
        slug: "ballenger-creek",
        name: "Ballenger Creek",
        blurb:
          "Ballenger Creek is a large CDP south of Frederick with mostly newer residential development. Modern HVAC standards apply; first-generation replacements are becoming common as equipment ages.",
      },
      {
        slug: "bartonsville",
        name: "Bartonsville",
        blurb:
          "Bartonsville is a small community in central Frederick County. Standard residential HVAC service applies.",
      },
      {
        slug: "braddock-heights",
        name: "Braddock Heights",
        blurb:
          "Braddock Heights is a community on the ridge between the Middletown Valley and Frederick. Elevation affects weather patterns slightly; we factor that in for heating system sizing.",
      },
      {
        slug: "buckeystown",
        name: "Buckeystown",
        blurb:
          "Buckeystown is a historic village south of Frederick with preserved historic homes and newer properties on surrounding land. Historic-home HVAC work often requires careful retrofit planning.",
      },
      {
        slug: "clover-hill",
        name: "Clover Hill",
        blurb:
          "Clover Hill is a residential community with newer housing. Standard modern HVAC approaches apply.",
      },
      {
        slug: "green-valley",
        name: "Green Valley",
        blurb:
          "Green Valley is a community in southern Frederick County with mostly residential housing. We service it alongside adjacent communities, combining visits efficiently when possible.",
      },
      {
        slug: "jefferson",
        name: "Jefferson",
        blurb:
          "Jefferson is a small community in southwestern Frederick County, not far across the Potomac from our Loudoun service area. Easy proximity means fast response times.",
      },
      {
        slug: "knoxville",
        name: "Knoxville",
        blurb:
          "Knoxville is a small community in southern Frederick County near the Potomac. Rural and semi-rural housing; standard residential HVAC service applies.",
      },
      {
        slug: "linganore",
        name: "Linganore",
        blurb:
          "Linganore is a residential community in eastern Frederick County, including the Lake Linganore development. Newer housing responds well to high-efficiency replacement equipment.",
      },
      {
        slug: "monrovia",
        name: "Monrovia",
        blurb:
          "Monrovia is a small community in eastern Frederick County. Standard residential HVAC service applies.",
      },
      {
        slug: "spring-ridge",
        name: "Spring Ridge",
        blurb:
          "Spring Ridge is a residential community east of Frederick with mostly newer housing. Modern HVAC approaches apply.",
      },
      {
        slug: "urbana",
        name: "Urbana",
        blurb:
          "Urbana is a large and growing community in southern Frederick County with mostly 2000s-era housing. Most homes are approaching the window for first-generation HVAC replacement.",
      },
    ],
  },
  {
    slug: "northern-towns",
    name: "Northern Frederick Towns",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    countySlug: "frederick-county",
    metaDescription:
      "HVAC service across the incorporated towns of northern Frederick County — Thurmont, Emmitsburg, Walkersville, Myersville, New Market, Mount Airy, Burkittsville, Woodsboro, Sabillasville.",
    intro:
      "The northern half of Frederick County is dotted with small incorporated towns — Thurmont, Emmitsburg, Walkersville, Myersville, and others — each with its own historic character and community identity. Sturrock's HVAC Solutions is Maryland-licensed and serves these communities, though driving distances are longer than our core Virginia territory.",
    overview:
      "Most of these towns have long histories and correspondingly older housing stock, which means HVAC work often involves retrofit planning, careful ductwork threading through original construction, and equipment sizing based on actual building envelopes. For homeowners in these communities who have been passed over by HVAC contractors focused on denser areas, we bring the same attention and thoroughness we'd apply in any Loudoun village.",
    places: [
      {
        slug: "burkittsville",
        name: "Burkittsville",
        blurb:
          "Burkittsville is a tiny incorporated town in southern Frederick County with preserved historic character. HVAC work here is almost entirely retrofit and careful replacement work in older homes.",
      },
      {
        slug: "emmitsburg",
        name: "Emmitsburg",
        blurb:
          "Emmitsburg is a small town in far northern Frederick County near the Pennsylvania border. Older housing stock and rural character define the HVAC work in this area.",
      },
      {
        slug: "mount-airy",
        name: "Mount Airy",
        blurb:
          "Mount Airy straddles the Frederick and Carroll County line with a mix of historic town-center homes and newer developments. Housing diversity means HVAC approach varies per home.",
      },
      {
        slug: "myersville",
        name: "Myersville",
        blurb:
          "Myersville is a small town in western Frederick County. Historic and newer housing mix; standard residential HVAC work applies with attention to each home's specific envelope.",
      },
      {
        slug: "new-market",
        name: "New Market",
        blurb:
          "New Market is a historic small town in eastern Frederick County. Retrofit work in older homes and standard service in the surrounding newer developments are both common.",
      },
      {
        slug: "rosemont",
        name: "Rosemont",
        blurb:
          "Rosemont is a tiny incorporated village in southern Frederick County. We service it alongside adjacent Brunswick and Point of Rocks work when possible.",
      },
      {
        slug: "sabillasville",
        name: "Sabillasville",
        blurb:
          "Sabillasville is a small community in far northern Frederick County near the Catoctin Mountains. Rural housing and longer drive distances; we combine visits when possible.",
      },
      {
        slug: "thurmont",
        name: "Thurmont",
        blurb:
          "Thurmont is one of the larger towns in northern Frederick County, near Catoctin Mountain. Mix of historic town homes and newer development on surrounding land; standard residential HVAC service applies.",
      },
      {
        slug: "walkersville",
        name: "Walkersville",
        blurb:
          "Walkersville is a town in central-northern Frederick County with a mix of housing ages. Most homes are candidates for standard residential HVAC service with attention to specific envelopes.",
      },
      {
        slug: "woodsboro",
        name: "Woodsboro",
        blurb:
          "Woodsboro is a small town in central-northern Frederick County. Historic housing predominates; retrofit and replacement work is typical.",
      },
    ],
  },
];

// =============================
// TIER 3: COUNTY OVERVIEW PAGES
// =============================

export type CountyOverview = {
  slug: CountySlug;
  name: string;
  state: "VA" | "MD";
  stateSlug: StateSlug;
  intro: string;
  overview: string;
  metaDescription: string;
};

export const countyOverviews: CountyOverview[] = [
  {
    slug: "loudoun-county",
    name: "Loudoun County",
    state: "VA",
    stateSlug: "virginia",
    metaDescription:
      "HVAC services across all of Loudoun County, VA — from Leesburg and Ashburn to Lovettsville, Purcellville, Middleburg, and every town and village in between. NATE-certified, licensed, and local.",
    intro:
      "Loudoun County is our home. Sturrock's HVAC Solutions is based in Hillsboro — one of the county's smallest incorporated towns, tucked against the Blue Ridge — and we have been serving Loudoun homeowners and businesses for over 14 years. From the county seat in Leesburg to the smallest rural village, we bring NATE-certified expertise, proper load calculations, and a local contractor's commitment to doing things right.",
    overview:
      "Loudoun's housing stock is one of the most varied in Northern Virginia — historic 18th- and 19th-century homes in villages like Waterford and Middleburg, post-war neighborhoods in Sterling, massive master-planned communities in Ashburn and Brambleton, and everything in between. A one-size-fits-all approach to HVAC doesn't work here. We take the time to understand each home — its construction era, its insulation characteristics, its ductwork condition, and its actual heating and cooling loads — and we recommend solutions that fit. Because we live in the county, we can respond faster to service calls in the western towns than contractors dispatched from east-county hubs, and we have the Maryland license (HVACR #85109) to cross the Potomac for jobs in Brunswick, Point of Rocks, and Frederick County when clients ask us to.",
  },
  {
    slug: "fairfax-county",
    name: "Fairfax County",
    state: "VA",
    stateSlug: "virginia",
    metaDescription:
      "HVAC services across Fairfax County, VA — Herndon, Vienna, Reston, McLean, Tysons, Burke, Annandale, and every community in between. NATE-certified technicians, licensed and insured.",
    intro:
      "Fairfax County is one of the most populous counties in Virginia — a vast residential landscape spanning mid-century neighborhoods, 1970s-80s suburban communities, modern master-planned developments, and increasingly urban centers like Tysons and Merrifield. Sturrock's HVAC Solutions serves the full range with NATE-certified technicians and over 14 years of experience.",
    overview:
      "The housing diversity in Fairfax means HVAC approaches vary dramatically across communities. Mid-century homes in Mantua, Annandale, and Pimmit Hills often need ductwork remediation alongside equipment replacement — decades of patched systems and accumulated sizing drift can leave comfort issues homeowners have simply learned to live with. Newer homes in planned communities like Laurel Hill and McNair respond well to modern high-efficiency equipment and smart thermostat integration. Larger homes in Great Falls and McLean often benefit from multi-zone systems designed for the actual building. We adapt to what each home needs rather than defaulting to a single approach.",
  },
  {
    slug: "frederick-county",
    name: "Frederick County",
    state: "MD",
    stateSlug: "maryland",
    metaDescription:
      "HVAC services across Frederick County, MD — Frederick, Brunswick, Middletown, Point of Rocks, Urbana, Thurmont, and surrounding communities. Maryland-licensed, NATE-certified, and local.",
    intro:
      "Frederick County, Maryland sits just across the Potomac from our Hillsboro base — which, combined with our Maryland HVACR license (#85109), makes it a natural extension of our core service footprint. Sturrock's HVAC Solutions serves the full county from the city of Frederick itself to the small towns and villages along the Catoctin and South Mountain ridges.",
    overview:
      "Frederick County housing spans nearly every imaginable era — colonial-era homes in historic town cores like Brunswick and New Market, mid-century suburban neighborhoods surrounding the city of Frederick, and modern master-planned communities in Urbana and Ballenger Creek. The weather patterns matter too: the county sits at slightly higher elevations than the Loudoun Valley, and winter temperatures can run noticeably colder. We size heating systems for those actual conditions. Because we're Maryland-licensed and close enough to respond quickly, we provide service quality and response times that out-of-area contractors often can't match in this region.",
  },
];

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
// TESTIMONIALS
// =============================
//
// First-party customer testimonials. The homepage and JSON-LD emit these
// only when the array is populated — adding fake reviews or sourcing them
// from third parties without attribution violates Google's structured-data
// guidelines and risks a manual penalty.
//
// To populate: add entries below with the customer's written permission.
// At least 3-5 entries are recommended before display; fewer can look thin.

export type Testimonial = {
  author: string;          // e.g. "Jane D." — permission should cover name display
  location: string;        // e.g. "Purcellville, VA"
  datePublished: string;   // ISO date e.g. "2026-03-15"
  rating: 1 | 2 | 3 | 4 | 5;
  serviceType?: string;    // e.g. "AC Repair" — shown as a small label if present
  body: string;            // the quote itself
  source?: {
    name: string;          // "Yelp", "Google", "Nextdoor", etc.
    url?: string;          // optional link to the original review
  };
};

// Existing public reviews from Yelp, Angi, and Nextdoor, republished here
// as social proof. Kept verbatim (minor typo fixes only) with each
// reviewer's platform-displayed name and location, attributed to the
// source platform with a link where available.
const yelpSource = {
  name: "Yelp",
  url: "https://www.yelp.com/biz/sturrocks-hvac-solutions-lovettsville",
} as const;

const angiSource = {
  name: "Angi",
  url: "https://www.angi.com/companylist/us/va/lovettsville/sturrock%27s-hvac-solutions-reviews-7828071.htm",
} as const;

const nextdoorSource = {
  name: "Nextdoor",
  url: "https://nextdoor.com/pages/sturrocks-hvac-solutions-lovettsville-va/",
} as const;

const yahooLocalSource = {
  name: "Yahoo Local",
  url: "https://local.yahoo.com/info-97804975-Sturrocks-HVAC-Solutions/",
} as const;

export const testimonials: Testimonial[] = [
  {
    author: "Holly A.",
    location: "Hamilton, VA",
    datePublished: "2025-06-09",
    rating: 5,
    body: "We have had the pleasure of Andy servicing multiple units in our house for over 15 years. He has always been prompt, efficient, trustworthy and fairly priced. I wouldn't trust anyone else to service or repair our systems.",
    source: yelpSource,
  },
  {
    author: "Brad M.",
    location: "Arlington, VA",
    datePublished: "2024-10-10",
    rating: 5,
    body: "I had another company come out for a winter check and told me I had to replace both my units for a ridiculous cost. I called Andy and he was out later in the week and all it took was a service call to get my units up and running. Highly recommend for all your heating and cooling needs!",
    source: yelpSource,
  },
  {
    author: "Leanne P.",
    location: "Virginia",
    datePublished: "2024-08-20",
    rating: 5,
    body: "Quality work. Service requested and completed in a timely manner. Great customer service. Highly recommend.",
    source: yahooLocalSource,
  },
  {
    author: "S. M.",
    location: "Frederick, MD",
    datePublished: "2023-12-18",
    rating: 5,
    body: "Andy Sturrock — Sturrock's HVAC. Very honest, dependable and fair priced.",
    source: nextdoorSource,
  },
  {
    author: "Shaun S.",
    location: "Virginia",
    datePublished: "2022-01-27",
    rating: 5,
    body: "I have been using Sturrock's for years and have been very happy. Andy is very responsive, helpful, knows his stuff, and honest. He isn't going to tell you that you need something to make a buck. In fact he has steered me away from things I asked about as he said they weren't worth it or didn't really work well. I like how he gives back to the community by sponsoring town events. It's refreshing when you find someone good. I am constantly recommending him to people. Do not hesitate to contact Sturrock HVAC.",
    source: yelpSource,
  },
  {
    author: "Russ S.",
    location: "Virginia",
    datePublished: "2021-11-18",
    rating: 5,
    body: "Don't let it even be a question. I would give 6 out of 5 stars if I could. The best of the best. Amazing personal customer service. I would never use anyone else ever after this awesome experience.",
    source: yelpSource,
  },
  {
    author: "Jack R.",
    location: "Lovettsville, VA",
    datePublished: "2021-09-19",
    rating: 5,
    body: "Andy always does great work. Very timely and responsive. Reasonable prices. Never feel like he is trying to take advantage of a bad situation. Trust him implicitly.",
    source: yelpSource,
  },
  {
    author: "Zoe T.",
    location: "Arlington, VA",
    datePublished: "2020-09-01",
    rating: 5,
    body: "After our outside heat pump stopped working Andy was out the next day after we called him and got us up and running again in less than 5 minutes. Having someone local who is an expert, honest and trustworthy is why he's earned our business forever.",
    source: yelpSource,
  },
  {
    author: "Mary R.",
    location: "Virginia",
    datePublished: "2020-06-12",
    rating: 5,
    body: "Cannot recommend highly enough. In the last few years he has worked on both our furnace and air conditioners. Prompt, honest and reliable. Thrilled we found him!",
    source: yahooLocalSource,
  },
  {
    author: "Bailey P.",
    location: "Mount Hope, KS",
    datePublished: "2020-01-20",
    rating: 5,
    body: "Excellent service. Andy was prompt and efficient. He quickly diagnosed and fixed our blown fuse, and even installed our new thermostat. Highly recommend and will definitely be using him for all future HVAC needs!",
    source: yelpSource,
  },
  {
    author: "Patricia S.",
    location: "Virginia",
    datePublished: "2019-02-15",
    rating: 5,
    body: "Andy's prices for all types of work are consistently significantly lower than others. He is honest, professional, and knowledgeable. A breath of fresh air in today's marketplace. Highly recommend.",
    source: angiSource,
  },
  {
    author: "Ryan K.",
    location: "Davie, FL",
    datePublished: "2019-01-19",
    rating: 5,
    body: "Andy did a fabulous job installing three Trane units in my home. Andy is a fair, friendly and extremely professional. I love supporting local businesses and Sturrock's HVAC is a shining example of an outstanding Lovettsville business!",
    source: yelpSource,
  },
  {
    author: "Mary G.",
    location: "Ashburn, VA",
    datePublished: "2018-10-15",
    rating: 5,
    serviceType: "Water Heater Replacement",
    body: "I like to pick a contractor based on either referral or gut instinct after speaking with the company. Andy satisfied both criteria: referred by good friends, and from his feedback on the situation with our home appliance warranty company, I could tell we should use him and stop wasting time with the awful customer service we were already getting. Our water heater had exploded all over a partially finished basement and ruined drywall, carpet, and more — and our warranty company's poor customer service and the terrible, unresponsive contractor they were demanding had us headed for a meltdown. Andy was honest, and delivered exactly the customer service and quality we were hoping for. I can't say enough good things about picking his company to do the work.",
    source: angiSource,
  },
  {
    author: "Mick G.",
    location: "Purcellville, VA",
    datePublished: "2018-09-26",
    rating: 5,
    body: "After combing through all the recommendations on Facebook, we chose to contact Sturrock's HVAC as the feedback seemed to be the best. They were correct. Andy responded quickly during a busy heatwave and had our HVAC back up and running in no time. We had a different issue recently on our upstairs system and he had the problem identified within minutes and provided us with varying cost solutions — all competitively priced. I've owned homes for 30 years and have never experienced such responsive, friendly, cost-competitive and accurate HVAC expertise. 5 stars without question!",
    source: yelpSource,
  },
  {
    author: "Mattias C.",
    location: "Hamilton, VA",
    datePublished: "2017-07-07",
    rating: 5,
    body: "Absolutely great! Called him out of the blue after I heard a strange noise in my air conditioner this morning and blew out my fuses. He came by in a couple of hours (mind you: I'm not a regular customer). He was prompt, diligent, and solved the problem in no time (a snake in my compressor). And when I got the bill, I was shocked about how good the price was. I've never had that kind of service from one of the \"big boys\" even with their \"gold\" contracts and the price is unmatched. Definitely make this place your first, second, and last call!",
    source: yelpSource,
  },
  {
    author: "Keith L.",
    location: "Virginia",
    datePublished: "2016-10-20",
    rating: 5,
    body: "He is very responsive and he has high ratings. We've known him for probably 15 years and knew where he worked before he started his own company. He was great when he worked for them. So, this was not the first time we used him. We have a couple of rental properties and we've been using him for a while.",
    source: angiSource,
  },
  {
    author: "Keith L.",
    location: "Virginia",
    datePublished: "2016-10-15",
    rating: 5,
    body: "They charged nothing. It was just a small leak in one of the plastic PVC lines where the trap is from the unit, and it was just dripping a little bit. It was very minor, but he came back out and put some RTV sealant on it to stop it from leaking.",
    source: angiSource,
  },
  {
    author: "David K.",
    location: "Sanibel, FL",
    datePublished: "2016-04-19",
    rating: 5,
    body: "Andy is a phenomenal vendor. His work is excellent. He's personable. His rates are more than fair. He's a Lovettsville local. Call him first.",
    source: yelpSource,
  },
  {
    author: "Aerohokie92",
    location: "Purcellville, VA",
    datePublished: "2016-01-16",
    rating: 5,
    body: "Andy was the only contractor who listened to me explain my problems, understood exactly what I was telling him and then provided a bid that gave us a complete solution. His proposal was fair and reasonable and we went with him. Really glad we did as our problems are completely solved and we are incredibly happy with the results. Would highly recommend him if you are looking for a great HVAC provider.",
    source: yelpSource,
  },
  {
    author: "Elen R.",
    location: "Leesburg, VA",
    datePublished: "2015-05-05",
    rating: 5,
    body: "Andy is so great. My neighbor recommended him to me 5 years ago after I was taken by 3 other HVAC companies. He knew exactly what was wrong. Got both my units working. Prices were low in comparison to the other big commercial companies. Andy is great at explaining the problems we have with our current units and he was able to keep them running 3 years longer than expected. I feel like he is one of the few honest repair specialists in the area. I highly recommend using him to anyone.",
    source: yelpSource,
  },
  {
    author: "Brenda G.",
    location: "Virginia",
    datePublished: "2013-05-15",
    rating: 5,
    body: "He is very informative and did not try to up-sell me. Gave me options for my issue. Was great at following up with additional questions. I would highly recommend him.",
    source: angiSource,
  },
  {
    author: "Shane G.",
    location: "Chantilly, VA",
    datePublished: "2012-10-03",
    rating: 5,
    body: "I live in Ashburn, VA and have used Sturrock's HVAC Solutions service twice in the past few months. In both cases the service was excellent and prompt. Andy took the time to explain our options when our A/C went out over the tail end of the summer and saved me hundreds on my heating system repair. This is important as the prior company we used was not able to assist us with our A/C and quoted us almost twice the amount Andy had repaired our system for. I'm very comfortable recommending him to my friends and neighbors in the area.",
    source: yelpSource,
  },
];

// =============================
// FINAL CTA
// =============================

export const finalCTA = {
  title: "Ready to Get Started?",
  subtitle:
    "Call us today for fast, reliable HVAC service across Loudoun, Fairfax, and Frederick counties.",
  buttonText: "Request Service",
};