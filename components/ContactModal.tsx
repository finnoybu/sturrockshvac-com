"use client";

import { useEffect } from "react";
import { brand, companyInfo } from "@/lib/content";
import PrimaryCTA from "./PrimaryCTA";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const handleCopy = async () => {
    const fullContact = [
      `${brand.marketingName}`,
      "Andy Sturrock, Owner",
      "",
      "11592 Harpers Ferry Rd",
      "Hillsboro, VA 20132",
      "",
      `Phone: ${companyInfo.phone}`,
      `Email: ${companyInfo.email}`,
      "Web: sturrockshvac.com",
      "",
    ].join("\n");

    await navigator.clipboard.writeText(fullContact);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

return (
  <div className="fixed inset-0 z-9999">

    {/* Overlay Shield (blocks all interaction) */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    />

    {/* Centered Modal */}
    <div className="relative z-10000 flex items-center justify-center min-h-screen px-4">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-sm w-full min-h-175 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Navy Header Bar */}
        <div className="bg-linear-to-b from-primary-900 to-primary-800 py-8 flex justify-center">
          <img
            src="/logo.png"
            alt={`${brand.marketingName} Logo`}
            className="h-14 w-auto"
          />
        </div>

        {/* Body */}
        <div className="p-8 text-center">

          {/* Name */}
          <h2 className="text-4xl font-serif text-primary-900 mb-1">
            Andy Sturrock
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Owner
          </p>

          {/* Address + Contact */}
          <div className="text-xl text-gray-700 space-y-1 mb-8">
            <p>11592 Harpers Ferry Rd</p>
            <p>Hillsboro, VA 20132</p>
            <p>{companyInfo.phone}</p>
            <p>{companyInfo.email}</p>
          </div>

          {/* Buttons */}
          <div className="max-w-xs mx-auto mt-14">

            <PrimaryCTA
              href={`tel:${companyInfo.phoneE164}`}
              className="w-full py-3 text-base"
            >
              Call Now
            </PrimaryCTA>

            <div className="flex gap-4 mt-4">
              <a
                href={`mailto:${companyInfo.email}`}
                className="
                  flex-1
                  border border-primary-900
                  text-primary-900
                  py-3
                  text-base
                  rounded-md
                  text-center
                  hover:bg-primary-50
                  transition-colors
                "
              >
                Send an Email
              </a>

              <a
                href="/request-service"
                className="
                  flex-1
                  border border-primary-900
                  text-primary-900
                  py-3
                  text-base
                  rounded-md
                  text-center
                  hover:bg-primary-50
                  transition-colors
                "
              >
                Request Service
              </a>
            </div>
          </div>

          {/* Utility Row */}
          <div className="mt-14 text-xs text-gray-600 flex justify-center gap-4">
            <button
              onClick={handleCopy}
              className="hover:text-accent-500 transition-colors"
            >
              Copy Contact
            </button>

            <span>|</span>

            <button
              onClick={onClose}
              className="hover:text-accent-500 transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
);
}