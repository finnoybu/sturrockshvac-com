import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryCTAProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export default function PrimaryCTA({
  href,
  onClick,
  children,
  className = "",
}: PrimaryCTAProps) {
const baseClasses = `
  inline-block
  bg-accent-500 hover:bg-accent-600
  text-white
  text-sm sm:text-base md:text-lg
  px-4 sm:px-5 md:px-6
  py-2 sm:py-2.5
  rounded-md
  shadow-md
  transition-colors
  whitespace-nowrap
`;

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}