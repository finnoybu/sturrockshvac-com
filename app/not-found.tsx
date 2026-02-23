import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-50 flex flex-col">

      <main className="grow flex items-start justify-center px-6 pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* 404 Marker */}
          <h1 className="text-6xl md:text-7xl font-serif text-primary-900 mb-2">
            404
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-serif text-primary-900 mb-6">
            Page Not Found
          </h2>

          {/* Message */}
          <p className="text-md md:text-lg text-gray-700 mb-8 leading-relaxed">
            Looks like something might be missing.
            <br />
            We'll get on it as soon as possible.
          </p>

          {/* Image */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/broken-ac.webp"
              alt="Disassembled HVAC unit"
              width={300}
              height={200}
              className="object-contain max-w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
            />
          </div>

          {/* Return Button */}
          <Link
            href="/"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors"
          >
            Return Home
          </Link>

        </div>
      </main>
    </div>
  );
}