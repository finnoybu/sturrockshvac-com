"use client";

import { useContactModal } from "./ContactModalProvider";
import { companyInfo } from "@/lib/content";
import PrimaryCTA from "./PrimaryCTA";

export default function PhoneCTA() {
  const { openModal } = useContactModal();

  const handleClick = () => {
    const isMobile =
      typeof window !== "undefined" &&
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${companyInfo.phoneE164}`;
    } else {
      openModal();
    }
  };

  return (
    <PrimaryCTA onClick={handleClick}>
      {companyInfo.phone}
    </PrimaryCTA>
  );
}