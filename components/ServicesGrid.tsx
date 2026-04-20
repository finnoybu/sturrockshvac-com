"use client";

// Initialize FontAwesome before any icons render. Prevents the layout
// shift caused by FA's default runtime CSS injection (see #25).
import "@/lib/fontawesome";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faSnowflake,
  faFireFlameCurved,
  faArrowsRotate,
  faScrewdriverWrench,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import { services } from "@/lib/content";
import SectionTitle from "./SectionTitle";

type Service = (typeof services)[number];

const iconMap: Record<string, IconDefinition> = {
  "air-conditioning": faSnowflake,
  heating: faFireFlameCurved,
  "heat-pumps": faArrowsRotate,
  "system-replacement": faArrowsRotate,
  maintenance: faScrewdriverWrench,
  ductwork: faWind,
};

export default function ServicesGrid() {
  const sortedServices = services;
  const mobileServices = sortedServices.slice(0, 3);

  return (
    <section className="bg-primary-50 border-t border-primary-200 pt-8 pb-14 md:pt-10 md:pb-20">
      <div className="container mx-auto px-4">

        <SectionTitle className="text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 leading-tight whitespace-nowrap">
          Our Services
        </SectionTitle>

        {/* Mobile */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {mobileServices.map((service) => (
            <ServiceTile key={service.slug} service={service} />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.slice(0, 6).map((service) => (
            <ServiceTile key={service.slug} service={service} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="text-accent-600 hover:text-accent-700 font-semibold transition-colors"
          >
            View All Services →
          </Link>
        </div>

      </div>
    </section>
  );
}

function ServiceTile({ service }: { service: Service }) {
  const Icon = iconMap[service.slug];
  const [pressed, setPressed] = useState(false);

  return (
    <Link
      href={`/services/${service.slug}`}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      className={`
        group
        bg-white
        rounded-xl
        border border-primary-200
        ${pressed ? "border-accent-500 scale-[0.98] ring-1 ring-accent-400" : ""}
        hover:border-accent-500
        hover:ring-1 hover:ring-accent-400
        shadow-[0_6px_18px_rgba(0,0,0,0.05)]
        hover:shadow-[0_12px_26px_rgba(0,0,0,0.10)]
        transition-all duration-200
        px-5 py-4
        flex flex-col
        h-full
      `}
    >
      {/* Top Row */}
      <div className="flex items-center gap-3 mb-2">
        {Icon && (
          <FontAwesomeIcon
            icon={Icon}
            className={`
              text-lg
              ${pressed ? "text-accent-500" : "text-primary-700"}
              group-hover:text-accent-500
              transition-colors
            `}
          />
        )}

        <span
          className={`
            text-base md:text-lg font-semibold
            ${pressed ? "text-accent-600" : "text-primary-900"}
            group-hover:text-accent-600
            transition-colors
          `}
        >
          {service.title}
        </span>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center text-sm">
        <span className={`${pressed ? "text-gray-700" : "text-gray-600"} truncate`}>
          {service.description}
        </span>
        <span className="text-accent-500 font-medium ml-2 whitespace-nowrap">
          More →
        </span>
      </div>

      {/* md+ */}
      <div className="hidden md:flex flex-col grow justify-between">
        <p className="text-sm lg:text-base text-gray-600 line-clamp-3 lg:line-clamp-none">
          {service.description}
        </p>

        <div className="text-right text-accent-500 font-medium text-sm lg:text-base mt-4">
          Learn More →
        </div>
      </div>

    </Link>
  );
}