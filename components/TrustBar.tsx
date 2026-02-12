import { trustPoints } from "@/lib/content";

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-navy-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-navy-700 font-medium text-sm md:text-base whitespace-nowrap">
                {point}
              </span>
              {index < trustPoints.length - 1 && (
                <span className="text-navy-300 hidden sm:inline" aria-hidden="true">
                  •
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
