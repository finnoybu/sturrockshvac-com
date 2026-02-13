"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <main className="min-h-screen flex items-center justify-center bg-primary-900 text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent-400">Something Went Wrong</h1>
        <p className="text-lg md:text-xl text-primary-200 mb-8">
          {process.env.NODE_ENV === "development"
            ? error.message
            : "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
