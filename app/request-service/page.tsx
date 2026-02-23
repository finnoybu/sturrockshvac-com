"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { services } from "@/lib/content";

type Service = (typeof services)[number];

const WORKER_ENDPOINT = "https://sturrocks-hvac.kenneth-tannenbaum.workers.dev";

export default function RequestServicePage() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceType, setSelectedServiceType] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (serviceParam) {
      setSelectedService(serviceParam);
      setSelectedServiceType("");
    }
  }, [serviceParam]);

  useEffect(() => {
    if (!isSuccess) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSuccess]);

  const selectedServiceObject: Service | undefined = services.find(
    (s) => s.slug === selectedService,
  );

  const validateForm = () => {
    if (!name.trim()) return "Name is required.";
    if (!phone.trim()) return "Phone number is required.";
    if (!/^\+?[0-9\s\-().]{10,}$/.test(phone))
      return "Please enter a valid phone number.";
    if (email && !/^\S+@\S+\.\S+$/.test(email))
      return "Please enter a valid email address.";
    if (!selectedService) return "Please select a service.";
    if (selectedServiceObject?.subservices?.length && !selectedServiceType)
      return "Please select a service type.";
    if (!details.trim() || details.length < 10)
      return "Please provide more details about your request.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: selectedService,
          serviceType: selectedServiceType,
          details: details.trim(),
          honeypot,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">

      <main className="container mx-auto px-4 pt-10 pb-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 whitespace-nowrap">
            Request Service
          </h1>
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

        <p className="text-center text-gray-700 max-w-xl mx-auto mb-12">
          Schedule service or request an estimate below.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT COLUMN */}
          <div className="bg-white rounded-xl border border-primary-200 shadow-sm p-7 text-center">
            <h2 className="text-xl md:text-2xl font-serif text-primary-900 mb-4">
              Need Immediate Assistance?
            </h2>

            <p className="text-gray-700 mb-6">
              Call directly for the fastest scheduling and service response.
            </p>

            <a
              href="tel:+15712587983"
              className="bg-accent-500 
              hover:bg-accent-600 
              text-white 
              text-sm sm:text-base md:text-lg
              px-4 sm:px-5 md:px-6 
              py-2 sm:py-2.5
              rounded-md shadow-md transition-colors whitespace-nowrap inline-block"
            >
              (571) 258-7983
            </a>

            <p className="text-sm text-gray-500 mt-4">
              Serving Loudoun, Fairfax, Montgomery, and Frederick counties.
            </p>

            <div className="mt-12">
              <div className="border border-primary-200 rounded-lg overflow-hidden">
                <img
                  src="/images/service-map.svg"
                  alt="Service area map"
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center items-center gap-10">
              <img
                src="/images/nate.svg"
                alt="NATE Certified"
                className="h-24 md:h-32 w-auto opacity-90"
              />
              <img
                src="/images/energy-star.svg"
                alt="ENERGY STAR Partner"
                className="h-24 md:h-32 w-auto opacity-90"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white rounded-xl border border-primary-200 shadow-[0_6px_18px_rgba(0,0,0,0.05)] p-8">
            <h2 className="text-xl md:text-2xl font-serif text-primary-900 mb-6">
              Service Request Form
            </h2>

            {isSuccess ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-serif text-primary-900 mb-4">
                  Request Received
                </h3>
                <p className="text-gray-700 mb-6">
                  Thank you. Our team will contact you shortly.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Redirecting to home in {countdown} seconds…
                </p>
                <a
                  href="/"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md shadow-md transition-colors"
                >
                  Return to Home
                </a>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="hidden">
                  <input
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block font-semibold text-primary-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Please enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-semibold text-primary-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="Please enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-semibold text-primary-900 mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="Please enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block font-semibold text-primary-900 mb-2">
                    Service Needed *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      setSelectedServiceType("");
                    }}
                    className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
                  >
                    <option value="">-- Select a service --</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block font-semibold text-primary-900 mb-2">
                    Type of Service Needed *
                  </label>
                  <select
                    value={selectedServiceType}
                    onChange={(e) => setSelectedServiceType(e.target.value)}
                    disabled={
                      !selectedServiceObject ||
                      !selectedServiceObject.subservices?.length
                    }
                    className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
                  >
                    <option value="">
                      {selectedServiceObject?.subservices?.length
                        ? "-- Select service type --"
                        : "Select a service first"}
                    </option>
                    {selectedServiceObject?.subservices?.map((sub) => (
                      <option key={sub.key} value={sub.key}>
                        {sub.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label className="block font-semibold text-primary-900 mb-2">
                    Details About Your Request *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please provide additional details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-3 rounded-md font-semibold ${
                    isSubmitting
                      ? "bg-gray-400 text-white"
                      : "bg-accent-500 hover:bg-accent-600 text-white"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Send Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
