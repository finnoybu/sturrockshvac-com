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
    "Call us today for fast, reliable HVAC service across Loudoun, Fairfax, and Frederick counties.",
  buttonText: "Request Service",
};