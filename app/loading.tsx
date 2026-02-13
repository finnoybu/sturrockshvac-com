export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary-900">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-accent-500 border-r-transparent"></div>
        <p className="mt-4 text-primary-200 font-medium">Loading...</p>
      </div>
    </main>
  );
}
