"use client";

import { useState } from "react";
import { companyInfo } from "@/lib/content";
import PrimaryCTA from "./PrimaryCTA";
import ContactModal from "./ContactModal";

export default function PhoneCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const isMobile =
      typeof window !== "undefined" &&
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${companyInfo.phoneE164}`;
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <PrimaryCTA onClick={handleClick}>
        {companyInfo.phone}
      </PrimaryCTA>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}