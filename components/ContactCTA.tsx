"use client";

import { useContactModal } from "./ContactModalProvider";
import PrimaryCTA from "./PrimaryCTA";

export default function ContactCTA({
  children,
}: {
  children: React.ReactNode;
}) {
  const { openModal } = useContactModal();

  return <PrimaryCTA onClick={openModal}>{children}</PrimaryCTA>;
}