"use client";

import { useContactModal } from "@/components/ContactModalProvider";

export default function FooterPhoneLink({
  phone,
  phoneE164,
  className,
}: {
  phone: string;
  phoneE164: string;
  className?: string;
}) {
  const { openModal } = useContactModal();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (window.innerWidth >= 768) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <a
      href={`tel:${phoneE164}`}
      onClick={handleClick}
      className={className}
    >
      {phone}
    </a>
  );
}