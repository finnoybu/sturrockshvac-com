const siteContent = {
  trustItems: [
    "Licensed & insured technicians",
    "24/7 emergency response",
    "Upfront, written estimates",
    "Family-owned since 1988",
  ],
  services: [
    {
      title: "Air conditioner repair",
      highlight: "Same-day diagnostics",
      blurb: "Restore cooling fast with certified technicians and stocked parts.",
    },
    {
      title: "Heating repair",
      highlight: "No-heat priority",
      blurb: "Rapid furnace and heat pump fixes for winter comfort.",
    },
    {
      title: "HVAC maintenance",
      highlight: "Seasonal tune-ups",
      blurb: "Prevent breakdowns and keep efficiency high year-round.",
    },
    {
      title: "System replacement",
      highlight: "Custom sizing",
      blurb: "High-efficiency upgrades matched to your home and budget.",
    },
    {
      title: "Indoor air quality",
      highlight: "Health-forward",
      blurb: "Filtration, humidity control, and duct solutions for clean air.",
    },
  ],
};

const trustList = document.getElementById("trust-bar-list");
const servicesGrid = document.getElementById("services-grid");

if (trustList) {
  siteContent.trustItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    trustList.appendChild(listItem);
  });
}

if (servicesGrid) {
  siteContent.services.forEach((service) => {
    const card = document.createElement("article");
    card.className = "service-card";

    const title = document.createElement("h3");
    title.textContent = service.title;

    const highlight = document.createElement("span");
    highlight.textContent = service.highlight;

    const blurb = document.createElement("p");
    blurb.textContent = service.blurb;

    card.append(title, highlight, blurb);
    servicesGrid.appendChild(card);
  });
}
