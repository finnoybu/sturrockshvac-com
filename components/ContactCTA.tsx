"use client";

import { useState } from "react";
import PrimaryCTA from "./PrimaryCTA";
import ContactModal from "./ContactModal";

export default function ContactCTA({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PrimaryCTA onClick={() => setIsOpen(true)}>
        {children}
      </PrimaryCTA>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}