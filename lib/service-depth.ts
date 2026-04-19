// =============================
// SERVICE PAGE DEPTH CONTENT
// =============================
//
// Rich supplemental content for /services/[slug] pages — adds symptom/cause
// tables, the service process, FAQ, and a pricing-approach paragraph to
// give each page real content depth (vs. thin boilerplate) for both users
// and search engines. FAQ entries are also emitted as FAQPage JSON-LD so
// Google can surface them as rich-result accordions in SERPs.
//
// Keyed by service slug. A service without an entry here still renders
// its existing short page; entries only add content, never replace.

export type ServiceSymptom = {
  symptom: string;
  likelyCauses: string[];
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceDepth = {
  symptoms: ServiceSymptom[];
  process: ServiceProcessStep[];
  faq: ServiceFAQ[];
  pricingApproach: string;
};

export const serviceDepth: Record<string, ServiceDepth> = {
  "air-conditioning": {
    symptoms: [
      {
        symptom: "AC blowing warm or room-temperature air",
        likelyCauses: [
          "Low refrigerant (often a leak somewhere in the system)",
          "Failed capacitor or contactor in the outdoor unit",
          "Frozen evaporator coil reducing heat exchange",
          "Compressor failure (the most expensive possibility)",
        ],
      },
      {
        symptom: "Weak airflow from vents",
        likelyCauses: [
          "Clogged air filter (check this first — most common cause)",
          "Blocked or collapsed ductwork",
          "Failing blower motor",
          "Closed supply vents or blocked returns in too many rooms",
        ],
      },
      {
        symptom: "Unusually high summer electric bills",
        likelyCauses: [
          "System running less efficiently with age (typical after 10–12 years)",
          "Dirty outdoor condenser coil insulated by pollen, grass, or debris",
          "Refrigerant loss causing the system to run longer to reach setpoint",
          "Duct leaks dumping cooled air into attics or crawl spaces",
        ],
      },
      {
        symptom: "AC short-cycling (turns on and off rapidly)",
        likelyCauses: [
          "Oversized equipment (common when previous installer skipped load calc)",
          "Refrigerant issue tripping the safety high- or low-pressure switch",
          "Electrical problem with the contactor or control board",
          "Thermostat placement or malfunction",
        ],
      },
      {
        symptom: "Ice on the refrigerant lines or evaporator coil",
        likelyCauses: [
          "Airflow restriction (clogged filter, blocked return, failing blower)",
          "Low refrigerant dropping the coil below freezing",
          "Dirty evaporator coil insulating the heat exchange",
        ],
      },
      {
        symptom: "Burning, musty, or chemical smells from the vents",
        likelyCauses: [
          "Mold or biological growth in ductwork or on a wet evaporator coil",
          "Burning motor windings or overheated electrical connection",
          "Refrigerant leak (rare, usually a sweet chemical smell)",
        ],
      },
    ],
    process: [
      {
        title: "Diagnose the root cause",
        description:
          "We don't jump to conclusions. We walk the system — thermostat, air handler, outdoor unit, refrigerant pressures, airflow — and identify what's actually wrong before quoting a repair.",
      },
      {
        title: "Explain findings in plain language",
        description:
          "You get a clear explanation of what's failing, why, and what your options are. No jargon, no pressure tactics, no up-sells you don't need.",
      },
      {
        title: "Quote options, not just one number",
        description:
          "For anything beyond a routine repair, we present options: a repair path, a replacement path when warranted, and the trade-offs on each. You pick what fits your situation.",
      },
      {
        title: "Complete the work and verify",
        description:
          "After repair or installation, we verify the system is operating correctly — measuring temperatures, pressures, and airflow — before we leave.",
      },
    ],
    faq: [
      {
        question: "How do I know if I need AC repair or replacement?",
        answer:
          "Rough guideline: if your system is under 10 years old, repair almost always makes sense. If it's 15+ years old and a repair would cost more than 50% of a replacement, replacement is usually the better call. Past 20 years, even a \"working\" system is probably costing you significantly more in electricity than a modern high-efficiency replacement would. We help you do the math on a visit.",
      },
      {
        question: "How long does a new AC installation take?",
        answer:
          "A standard single-system replacement (condenser + evaporator coil, existing ductwork) typically takes a full day. If we're adding a new system or replacing ductwork, it can run 2–3 days. We schedule installations to minimize the time your home is without cooling.",
      },
      {
        question: "Do you service all AC brands?",
        answer:
          "Yes. We service virtually every residential brand — Carrier, Trane, Lennox, American Standard, York, Rheem, Goodman, Bryant, Amana, and more. For new installs and replacements we work with trusted brands we stand behind — see our full brand list on the Brands page.",
      },
      {
        question: "What's the typical lifespan of an AC system in Northern Virginia?",
        answer:
          "A well-maintained AC system typically lasts 12–18 years in our climate. Heat pumps (which run year-round) tend toward the lower end; systems that only run in summer can last longer. Proper seasonal maintenance meaningfully extends that lifespan.",
      },
      {
        question: "Can you help with a frozen AC?",
        answer:
          "Yes. First, turn the system off and let it thaw for a few hours. Change the filter if it's dirty. If the system refreezes or doesn't cool properly after thawing, call us — a frozen coil usually signals an airflow issue or refrigerant problem that needs professional diagnosis.",
      },
    ],
    pricingApproach:
      "We don't publish flat prices because the honest answer depends on your system. What we do commit to: a clear diagnostic fee before the visit (applied toward the repair if you go ahead), a written estimate before any work begins, and no surprise charges once the job is quoted. For replacements, we provide itemized quotes with multiple equipment options so you can see exactly what you're paying for.",
  },
  heating: {
    symptoms: [
      {
        symptom: "Furnace won't turn on",
        likelyCauses: [
          "Thermostat issue (dead batteries, incorrect setting, wiring problem)",
          "Tripped breaker or blown fuse at the panel",
          "Blocked or dirty flame sensor on a gas furnace",
          "Failed ignitor or control board",
        ],
      },
      {
        symptom: "Cold air coming from the vents",
        likelyCauses: [
          "System running fan mode only — check thermostat setting",
          "Flame sensor failure causing the burner to shut off quickly",
          "Short-cycling from a sensor or airflow problem",
          "Heat pump in defrost mode (temporary, not a failure)",
        ],
      },
      {
        symptom: "Burning or unusual smells when heat first kicks on",
        likelyCauses: [
          "Accumulated dust burning off (normal on first use of the season)",
          "Burning electrical smell — shut off and call immediately",
          "Overheating motor or blower",
          "Gas smell — shut off and ventilate; this is an emergency",
        ],
      },
      {
        symptom: "Uneven heating from room to room",
        likelyCauses: [
          "Dirty filter reducing airflow",
          "Ductwork imbalance or leaks",
          "Closed or obstructed supply vents",
          "Zoning issue or failing zone damper",
        ],
      },
      {
        symptom: "Furnace cycles on and off rapidly",
        likelyCauses: [
          "Oversized equipment for the home's actual heating load",
          "Dirty flame sensor or pilot issue on a gas furnace",
          "Overheating from a clogged filter or blocked ductwork",
          "Faulty thermostat",
        ],
      },
      {
        symptom: "Loud banging, rumbling, or whistling",
        likelyCauses: [
          "Dirty burners causing delayed ignition (banging on startup)",
          "Ductwork expansion, loose panel, or blower imbalance",
          "Bearing failure in the blower motor",
          "Gas pressure or combustion issue — have it checked",
        ],
      },
    ],
    process: [
      {
        title: "Safety check first on gas furnaces",
        description:
          "Before anything else on a gas system, we verify the heat exchanger, combustion, and safety controls. A cracked heat exchanger can leak carbon monoxide, and we take that seriously.",
      },
      {
        title: "Diagnose the specific failure",
        description:
          "Ignitor, flame sensor, control board, blower motor, thermostat — each has a different failure signature and a different fix. We test systematically rather than guessing.",
      },
      {
        title: "Explain and quote before any work",
        description:
          "You hear what's wrong, what the fix options are, and what they cost before we pick up a tool. No surprises on the invoice.",
      },
      {
        title: "Verify safe, correct operation",
        description:
          "After the repair or install, we run combustion analysis on gas systems, verify airflow and temperature rise, and confirm every safety control is working properly.",
      },
    ],
    faq: [
      {
        question: "How long should a furnace last?",
        answer:
          "Gas furnaces typically last 15–20 years with regular maintenance in our Northern Virginia climate. Electric furnaces can last 20–30. Past the 15-year mark, a major failure often means it's time to weigh replacement against repair cost.",
      },
      {
        question: "Is my furnace safe?",
        answer:
          "Most are, but there are real safety issues to watch for — cracked heat exchangers, carbon monoxide leaks, gas supply problems. If you suspect any of these, shut the system down and call us. We do combustion analysis and safety checks on every heating service visit as standard.",
      },
      {
        question: "Should I replace my furnace before it fails?",
        answer:
          "If your furnace is 15+ years old and starting to show warning signs — rising gas bills, uneven heating, strange noises, frequent cycling — replacing it during spring or early summer is usually the right move. You avoid the emergency scenario where you're making a panicked decision in February with days of no heat.",
      },
      {
        question: "What heating systems do you install?",
        answer:
          "Gas furnaces, electric furnaces, heat pumps (air-source), and dual-fuel systems (heat pump with gas backup). We'll help you compare options based on your home, existing fuel supply, and efficiency goals.",
      },
      {
        question: "How much can a new furnace save on heating bills?",
        answer:
          "A lot depends on what you're replacing. Going from a 15-year-old 80% AFUE furnace to a modern 96% AFUE unit typically cuts gas consumption by 15–20%. Over a Northern Virginia winter that's real money, and it compounds year over year.",
      },
    ],
    pricingApproach:
      "Same approach as all our work: diagnostic fee up front (applied toward the repair), written estimate before any work, no surprise charges. For replacements — where numbers get bigger — we provide itemized quotes across efficiency tiers so you can pick the right balance of upfront cost and long-term savings for your situation.",
  },
  "heat-pumps": {
    symptoms: [
      {
        symptom: "Heat pump running constantly in winter",
        likelyCauses: [
          "Extreme cold — heat pumps work harder below 30°F (this can be normal)",
          "Low refrigerant reducing heating capacity",
          "Dirty outdoor coil or indoor evaporator coil",
          "Undersized system for the home's heating load",
        ],
      },
      {
        symptom: "Icing on the outdoor unit",
        likelyCauses: [
          "Normal short-term icing during cold weather (unit defrosts automatically)",
          "Defrost control board or sensor failure",
          "Refrigerant issue",
          "Blocked airflow at the outdoor unit",
        ],
      },
      {
        symptom: "Heat pump stuck in cooling or heating mode",
        likelyCauses: [
          "Reversing valve failure",
          "Thermostat wiring or programming issue",
          "Control board problem",
        ],
      },
      {
        symptom: "Backup auxiliary heat running too often",
        likelyCauses: [
          "Thermostat set to emergency heat instead of heat mode",
          "Defrost cycle triggering aux heat more than needed",
          "Low refrigerant causing primary heat to struggle",
          "Outdoor temperature below the system's rated heating capacity",
        ],
      },
      {
        symptom: "System not cooling or heating at all",
        likelyCauses: [
          "Tripped breaker",
          "Failed contactor or capacitor in the outdoor unit",
          "Refrigerant problem",
          "Control or thermostat failure",
        ],
      },
    ],
    process: [
      {
        title: "Verify refrigerant charge is correct",
        description:
          "Heat pumps are more sensitive to refrigerant charge than straight AC systems. We measure pressures and subcooling/superheat rather than just topping off.",
      },
      {
        title: "Test both heating and cooling modes",
        description:
          "Because heat pumps do both, we verify the reversing valve, defrost controls, and auxiliary heat all work — even if you called us for one specific issue.",
      },
      {
        title: "Present repair vs. replacement honestly",
        description:
          "Heat pumps often fail in ways that make replacement more cost-effective than repair — especially for 12+ year old units. We'll tell you when that's the case.",
      },
      {
        title: "Size replacements for actual load",
        description:
          "If you're replacing, we run a load calculation on your home. Oversized heat pumps short-cycle and heat poorly in cold weather; undersized ones run constantly and wear out early.",
      },
    ],
    faq: [
      {
        question: "Do heat pumps work in cold Northern Virginia winters?",
        answer:
          "Yes. Modern heat pumps (installed in the last 5 years) typically deliver full heating capacity down to about 5°F before backup heat kicks in meaningfully. Older systems (10+ years) have a higher backup-heat threshold. If your heat pump can't keep up during cold snaps, that's often fixable by replacement rather than repair.",
      },
      {
        question: "What's the difference between a heat pump and a furnace + AC?",
        answer:
          "A heat pump is one system that does both heating and cooling by reversing the refrigerant flow. A furnace + AC setup uses two separate systems — furnace for heat, AC for cool. Heat pumps are more efficient overall but less familiar to some homeowners. Dual-fuel systems combine a heat pump with a gas furnace backup, which is a popular choice for our climate.",
      },
      {
        question: "How long do heat pumps last?",
        answer:
          "Typically 10–15 years in our climate, shorter than a gas furnace because the heat pump runs year-round. Regular maintenance meaningfully extends that — we see well-maintained systems hit 18 years.",
      },
      {
        question: "Should I switch from gas furnace + AC to a heat pump?",
        answer:
          "Depends on your situation. Heat pumps are more efficient and eliminate a combustion source from your home. But if you have cheap natural gas and a relatively new furnace, the economic case is weaker. For all-electric homes, end-of-life system replacement, or homeowners prioritizing emissions reduction, heat pumps are usually the right call. We'll run the actual numbers on a consultation.",
      },
      {
        question: "Can a heat pump replace both my furnace and my AC?",
        answer:
          "Yes — that's the normal configuration. A heat pump replaces the outdoor AC condenser and either works with your existing air handler or replaces the furnace entirely. Dual-fuel setups keep the gas furnace as backup for the coldest days.",
      },
    ],
    pricingApproach:
      "Heat pumps vary more in installed cost than any other HVAC equipment because efficiency tiers, cold-climate performance, and inverter technology each affect price. We give itemized quotes across good/better/best tiers so you can see exactly what the efficiency and performance differences cost — and make an informed pick rather than a rushed one.",
  },
  ductwork: {
    symptoms: [
      {
        symptom: "Hot rooms in summer, cold rooms in winter",
        likelyCauses: [
          "Imbalanced ductwork — too much airflow to some rooms, too little to others",
          "Leaks in supply ducts dumping conditioned air into attics or crawl spaces",
          "Undersized duct runs to distant rooms",
          "Closed or obstructed dampers",
        ],
      },
      {
        symptom: "High energy bills with no obvious equipment problem",
        likelyCauses: [
          "Duct leakage — typical leaky system wastes 20–30% of conditioned air",
          "Uninsulated ducts in unconditioned spaces (attic, crawl, garage)",
          "Airflow restrictions forcing the system to run longer",
        ],
      },
      {
        symptom: "Excess dust throughout the home",
        likelyCauses: [
          "Return-side leaks pulling attic or crawl space air into the duct system",
          "Gaps at register connections",
          "Deteriorated duct insulation shedding fibers",
        ],
      },
      {
        symptom: "Noise from the ductwork (rattling, popping, whistling)",
        likelyCauses: [
          "Loose duct connections or unsupported runs",
          "Undersized ducts forcing high air velocity",
          "Thermal expansion on startup (some noise is normal)",
          "Blower fan speed too high for the duct design",
        ],
      },
    ],
    process: [
      {
        title: "Inspect the whole duct system",
        description:
          "We look at all accessible ductwork — supply and return — checking connections, insulation, sizing, and routing. Blower-door or pressure-pan testing when warranted.",
      },
      {
        title: "Identify specific problems",
        description:
          "Leaks, sizing mismatches, insulation gaps, dampers stuck in wrong positions — we identify what's actually causing the comfort or efficiency issue you're experiencing.",
      },
      {
        title: "Recommend fixes scoped to impact",
        description:
          "Duct sealing, minor repairs, balancing, or larger redesign — we recommend what addresses the specific problem, not a wholesale replacement when one isn't needed.",
      },
      {
        title: "Verify improvement after the work",
        description:
          "Measure airflow at registers, check temperature delivery, and confirm the comfort issue is actually resolved — not just that the work got done.",
      },
    ],
    faq: [
      {
        question: "How much air does a typical duct system lose to leaks?",
        answer:
          "Studies show the average US home loses 20–30% of its conditioned air to duct leakage. In older homes with ducts in unconditioned spaces, it can exceed 40%. Sealing existing ducts is one of the highest-ROI HVAC improvements available — cheaper than new equipment and often more impactful.",
      },
      {
        question: "Can ductwork problems cause uneven heating and cooling?",
        answer:
          "Yes — frequently. If one room runs hotter or colder than the rest of the house, the culprit is often duct sizing or leakage, not the HVAC equipment itself. Swapping in bigger equipment without addressing the duct problem doesn't fix it.",
      },
      {
        question: "Do I need all my ductwork replaced?",
        answer:
          "Usually no. Most duct problems are solved with targeted fixes — sealing specific leaks, adding a dampered branch to an underserved room, re-insulating exposed runs. Full replacement is rarely necessary unless the ductwork is genuinely deteriorated or severely undersized.",
      },
      {
        question: "Will duct cleaning help with my air quality?",
        answer:
          "Sometimes, but less often than the industry markets it. Duct cleaning makes a real difference after major renovations, rodent contamination, or visible mold. For routine dust concerns, a quality filter and addressing return-side leaks delivers more for less money.",
      },
    ],
    pricingApproach:
      "Duct work is hands-on — costs scale with access, complexity, and how much remediation is needed. We quote by the job after inspecting, with line items so you can see exactly what you're paying for and what each piece delivers in comfort or efficiency.",
  },
  thermostats: {
    symptoms: [
      {
        symptom: "Thermostat display is blank or unresponsive",
        likelyCauses: [
          "Dead batteries (on battery-powered units)",
          "Tripped breaker or blown fuse at the air handler",
          "Wiring issue",
          "Failed control board at the HVAC unit",
        ],
      },
      {
        symptom: "Room temperature doesn't match thermostat setting",
        likelyCauses: [
          "Thermostat placement in a hot or cold spot (near a vent, above a lamp, on an exterior wall)",
          "Failing thermostat sensor",
          "Actual HVAC system problem — thermostat is reporting honestly",
        ],
      },
      {
        symptom: "Smart thermostat won't connect to WiFi",
        likelyCauses: [
          "WiFi network issue (try other devices)",
          "Router reset required",
          "Thermostat firmware needing update",
          "Weak signal at thermostat location",
        ],
      },
      {
        symptom: "System short-cycling after thermostat install",
        likelyCauses: [
          "Incorrect cycle-rate setting for your equipment type",
          "Missing common (C) wire causing power issues on smart thermostats",
          "Incompatible thermostat for the HVAC system (e.g., heat pump-specific wiring)",
        ],
      },
    ],
    process: [
      {
        title: "Confirm compatibility before install",
        description:
          "Not every thermostat works with every HVAC system — heat pumps, dual-fuel systems, and zoned setups have specific requirements. We verify compatibility before recommending or installing.",
      },
      {
        title: "Address power needs",
        description:
          "Smart thermostats usually need a C (common) wire for reliable power. If yours doesn't have one, we install it properly rather than using a parasitic adapter that can cause problems.",
      },
      {
        title: "Configure for your actual system",
        description:
          "Generic defaults cause short-cycling, poor comfort, or wasted energy. We set cycle rates, swings, and heat pump settings to match your specific equipment.",
      },
      {
        title: "Walk through features",
        description:
          "You'll know how to program, adjust, and get the most out of the thermostat before we leave. Smart thermostats have real savings built in if you use them — and cost the same as a basic programmable if you don't.",
      },
    ],
    faq: [
      {
        question: "What's the best smart thermostat?",
        answer:
          "Honestly, they're all pretty good at this point. Ecobee, Nest, and Honeywell Home all have strong offerings. The right pick depends on your ecosystem (Apple Home, Google Home, Alexa), whether you want room sensors, and whether you want built-in occupancy detection. We recommend based on what fits your system and household.",
      },
      {
        question: "Will a smart thermostat actually save me money?",
        answer:
          "Most studies show 8–15% savings on heating and cooling — but only if you use the scheduling features. If you set it and forget it to hold one temperature, you'll save nothing. The ROI is good if you actually let it adapt to your schedule.",
      },
      {
        question: "Can I install a thermostat myself?",
        answer:
          "If you have simple equipment, a C wire, and reasonable DIY comfort — yes. For heat pumps, dual-fuel systems, zoned HVAC, or homes without a C wire, professional install is usually worth it to avoid miswiring that can damage your HVAC equipment.",
      },
      {
        question: "My thermostat looks fine but my house isn't comfortable. What now?",
        answer:
          "The thermostat is usually the messenger, not the cause. Uneven temperatures, long run times, or short cycling point to HVAC equipment or ductwork issues — we diagnose those.",
      },
    ],
    pricingApproach:
      "Thermostat installation is typically a flat rate plus the thermostat itself. If we need to run a new C wire or re-configure zoning, we quote that separately before starting. Simple like-for-like swaps usually take under an hour.",
  },
  plumbing: {
    symptoms: [
      {
        symptom: "No hot water or hot water runs out quickly",
        likelyCauses: [
          "Failed heating element (electric) or burner/pilot issue (gas)",
          "Thermostat failure on the water heater",
          "Tank approaching end of life (typical lifespan 8–12 years)",
          "Sediment buildup reducing effective tank capacity",
        ],
      },
      {
        symptom: "Water heater leaking",
        likelyCauses: [
          "Pressure relief valve failure (often fixable)",
          "Tank corrosion — usually means replacement time",
          "Loose supply or drain connection",
        ],
      },
      {
        symptom: "Sump pump not running during a rainstorm",
        likelyCauses: [
          "Tripped breaker or unplugged pump",
          "Float switch stuck or failed",
          "Pump motor failure",
          "Discharge line frozen or obstructed",
        ],
      },
      {
        symptom: "Sump pump running constantly",
        likelyCauses: [
          "Float switch stuck in the 'on' position",
          "Check valve failure causing water to flow back into the pit",
          "Actual high groundwater that requires a larger pump",
        ],
      },
    ],
    process: [
      {
        title: "Diagnose before recommending",
        description:
          "Some water heater problems are simple fixes. Others mean it's time for a new unit. We figure out which, and tell you honestly, before suggesting you spend on replacement.",
      },
      {
        title: "Check for safety issues",
        description:
          "Gas water heaters need combustion safety verification. Older electric units can develop wiring problems that need attention. We check these whether you asked us to or not.",
      },
      {
        title: "Size replacements correctly",
        description:
          "For water heater replacement, we size based on household use — not just matching the old tank. Undersized means running out; oversized means wasted energy.",
      },
      {
        title: "Test after service",
        description:
          "After any repair or installation, we verify the system performs correctly under realistic use before we leave.",
      },
    ],
    faq: [
      {
        question: "How long do water heaters last?",
        answer:
          "Tank water heaters typically last 8–12 years. Gas tends toward the lower end of that range due to the combustion byproducts; electric often goes longer. Tankless units can last 20+ years with proper descaling in our hard water.",
      },
      {
        question: "Tankless vs. tank water heater — which is better?",
        answer:
          "Tankless units deliver unlimited hot water, save space, and last longer — but cost more upfront and sometimes need gas line or electrical upgrades. For a small household with normal use, a tank water heater is usually still the better value. For larger households with heavy simultaneous use or for homeowners prioritizing long-term energy use, tankless pays off.",
      },
      {
        question: "How often should I test my sump pump?",
        answer:
          "Every 3–4 months, and especially before the rainy spring season. Fill the pit with water (or pour a bucket in) and verify the pump kicks on, pumps out, and shuts off cleanly. A pump that fails during an actual storm is how basements flood.",
      },
      {
        question: "Do I need a battery backup for my sump pump?",
        answer:
          "If you have a finished basement or store valuables there, yes. Power outages frequently coincide with the storms that cause flooding in the first place. Battery backups typically buy you 4–8 hours of pumping during an outage, which is usually enough.",
      },
    ],
    pricingApproach:
      "Water heater and sump pump work is priced per job. For replacements we give itemized quotes so you can see the equipment cost, installation, and any code upgrades (expansion tank, pan, relief line routing) separately. No pressure, no surprise add-ons once work starts.",
  },
  "commercial-hvac": {
    symptoms: [
      {
        symptom: "Rooftop unit (RTU) not maintaining setpoint",
        likelyCauses: [
          "Failed contactor or capacitor from continuous commercial duty cycles",
          "Refrigerant loss from vibration-induced leaks (common on rooftop equipment)",
          "Belt-drive blower issues (slipping, broken, or worn)",
          "Dirty evaporator coil from commercial kitchen grease or airborne debris",
        ],
      },
      {
        symptom: "Inconsistent temperatures across an office floor",
        likelyCauses: [
          "Ductwork imbalance — common after tenant improvements or partition changes",
          "Failed zone dampers on a zoned commercial system",
          "Thermostat placement near heat-generating equipment (servers, copiers, kitchens)",
          "Undersized equipment after business growth or expansion",
        ],
      },
      {
        symptom: "Walk-in cooler or freezer temperature drift",
        likelyCauses: [
          "Dirty condenser coil reducing heat rejection",
          "Failed defrost cycle leaving coils iced over",
          "Refrigerant charge issue",
          "Door seal failure letting warm air in",
        ],
      },
      {
        symptom: "Restaurant kitchen HVAC problems",
        likelyCauses: [
          "Makeup air unit (MAU) imbalance with kitchen exhaust",
          "Negative pressure drawing hot air or odors into dining areas",
          "Grease accumulation on coils reducing efficiency",
          "Undersized cooling for kitchen equipment load",
        ],
      },
      {
        symptom: "After-hours system failure",
        likelyCauses: [
          "Electrical faults common with 24/7-operated commercial equipment",
          "Condensate overflow triggering safety shutoff",
          "Compressor lockout from high-pressure or low-pressure fault",
          "Power interruption causing control board reset",
        ],
      },
    ],
    process: [
      {
        title: "Site assessment and documentation",
        description:
          "For new commercial clients, we start with a full walk-through of your equipment. We document what's installed, ages, serial numbers, and current condition so you have a real record and we can plan ahead instead of reacting.",
      },
      {
        title: "Response appropriate to your business impact",
        description:
          "A restaurant without cooling on a Friday night is a different priority than an office closed for the weekend. We structure response time around what the outage is actually costing you.",
      },
      {
        title: "Repair-first when it makes sense, replacement when it doesn't",
        description:
          "Commercial equipment is expensive. We diagnose honestly and recommend the approach that minimizes total cost of ownership — not the one that makes our invoice bigger.",
      },
      {
        title: "Written service reports for your records",
        description:
          "Every visit comes with documentation suitable for property management records, lease requirements, or insurance purposes. You have an audit trail.",
      },
    ],
    faq: [
      {
        question: "Do you offer after-hours or emergency commercial service?",
        answer:
          "Yes. Commercial clients on a preventative maintenance agreement get priority after-hours response; we also respond to emergencies from non-PM clients as capacity allows. Call (571) 258-7983 and the most urgent calls — restaurant walk-ins, retail cooling failures in peak season, office systems failing during operating hours — go to the top of the queue.",
      },
      {
        question: "Do you have preventative maintenance contracts for commercial properties?",
        answer:
          "Yes. Commercial PM contracts are structured around your specific equipment and operating schedule — typically quarterly visits for restaurants and retail, semi-annually for offices and light industrial. Contracts include scheduled visits, priority emergency response, documented service reports, and discounted rates on repairs and replacements.",
      },
      {
        question: "What sizes of commercial properties do you service?",
        answer:
          "Light commercial: offices up to ~10,000 sq ft, retail storefronts, restaurants, small-to-medium industrial, multi-tenant properties. Larger industrial or institutional work typically requires specialized contractors we can refer you to.",
      },
      {
        question: "Can you work with property management companies?",
        answer:
          "Yes. We have property management clients across our service area and are set up for the typical requirements: multi-property coordination, standardized billing and reporting, tenant communication protocols, and scheduling windows that minimize disruption to occupants.",
      },
      {
        question: "Do you handle walk-in cooler and freezer repair for restaurants?",
        answer:
          "Yes. We service walk-in coolers and freezers, reach-in units, and display cases for restaurant and retail food service. Because a walk-in failure means product loss on top of HVAC cost, we treat these as high-priority calls.",
      },
      {
        question: "What brands of commercial equipment do you service?",
        answer:
          "Virtually all major commercial brands — Carrier, Trane, Lennox, York, Rheem, Bryant, Goodman, and others. For restaurant refrigeration we also work with specialty refrigeration brands.",
      },
    ],
    pricingApproach:
      "Commercial HVAC work is priced per job after assessment. For PM contracts, pricing is based on equipment count, property size, and visit frequency — structured as a monthly or quarterly fee so it fits into your OpEx budget predictably. We provide itemized quotes before any work and detailed service documentation after, suitable for your records.",
  },
  "preventative-maintenance": {
    symptoms: [
      {
        symptom: "System runs but cooling or heating feels weaker than last season",
        likelyCauses: [
          "Gradual efficiency loss from dirty coils or filters",
          "Refrigerant loss from a slow leak",
          "Blower or motor wear",
        ],
      },
      {
        symptom: "Utility bills creeping up year over year",
        likelyCauses: [
          "System efficiency declining as it ages",
          "Dirty condenser coil insulated by debris",
          "Undetected duct leaks",
          "Equipment approaching end of its useful life",
        ],
      },
      {
        symptom: "Unexpected mid-season breakdowns",
        likelyCauses: [
          "Component failures that seasonal maintenance would have caught (capacitor wear, dirty flame sensor, refrigerant drift)",
          "Neglected filter changes causing airflow problems",
          "Accumulated issues that compound over time",
        ],
      },
    ],
    process: [
      {
        title: "Spring tune-up (cooling season)",
        description:
          "Refrigerant verification, coil cleaning (indoor + outdoor), capacitor and contactor inspection, condensate drain flushing, electrical connection check, thermostat calibration, filter replacement.",
      },
      {
        title: "Fall tune-up (heating season)",
        description:
          "Burner and heat exchanger inspection, combustion analysis on gas systems, ignition and safety switch testing, blower motor and belt inspection, filter replacement, ductwork visual check.",
      },
      {
        title: "Document and report",
        description:
          "You get a written record of what we checked, what we found, and what to watch for. Builds a system history that helps with future service and replacement decisions.",
      },
      {
        title: "Flag issues before they become emergencies",
        description:
          "Maintenance catches the small stuff — weak capacitor, dirty flame sensor, slow refrigerant leak — before they cause a no-heat or no-cooling breakdown mid-season.",
      },
    ],
    faq: [
      {
        question: "How often should HVAC equipment be serviced?",
        answer:
          "Twice a year in Northern Virginia — once before cooling season (spring) and once before heating season (fall). Our climate is harsher on equipment than milder zones; a single annual visit misses issues that develop between seasons.",
      },
      {
        question: "Does regular maintenance actually pay for itself?",
        answer:
          "Yes, usually within the first missed emergency call. Maintenance typically costs about as much as one emergency service call — and customers on regular maintenance schedules have meaningfully fewer emergencies. Plus equipment lasts longer, runs more efficiently, and keeps manufacturer warranties valid.",
      },
      {
        question: "Can I just change the filter myself?",
        answer:
          "You should — every 30–90 days depending on filter type and household (pets, occupants, renovations). Filter changes are basic homeowner maintenance. Everything else — refrigerant levels, combustion safety, coil cleaning, electrical component testing — needs a technician with proper tools.",
      },
      {
        question: "Do you offer maintenance plans?",
        answer:
          "We're finalizing our maintenance plan structure. Reach out and we'll walk you through what's included and priority scheduling benefits when the plan is confirmed.",
      },
    ],
    pricingApproach:
      "Per-visit maintenance is a flat rate that includes a full inspection, standard cleanings, and a written report. If we find something that needs additional work, we tell you before starting — no charges added to your invoice without your OK.",
  },
};
