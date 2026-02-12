import { trustPoints } from "@/lib/content";

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-primary-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-primary-700 font-medium text-sm md:text-base whitespace-nowrap">
                {point}
              </span>
              {index < trustPoints.length - 1 && (
                <span
                  className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-primary-300"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
