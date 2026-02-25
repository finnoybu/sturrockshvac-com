"use client";

import ContactModalProvider from "@/components/ContactModalProvider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContactModalProvider>{children}</ContactModalProvider>;
}