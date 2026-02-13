import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary-900 text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary-300">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg md:text-xl text-primary-200 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
