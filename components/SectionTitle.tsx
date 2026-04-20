// Reusable centered section title with the gradient dividers used
// throughout the site. Replaces the repeated 5-line pattern.
//
// Two variants:
//   size="lg" (default) — full responsive scale through 2xl, used on
//                         section headers across the homepage and content pages
//   size="md"           — compact, used on smaller dedicated pages

type SectionTitleProps = {
  children: React.ReactNode;
  as?: "h1" | "h2";
  size?: "lg" | "md";
  /** Override the default title classes entirely (e.g. for custom typography). */
  className?: string;
  /** Override the default mb-6 wrapper margin. */
  wrapperClassName?: string;
};

export default function SectionTitle({
  children,
  as: Tag = "h2",
  size = "lg",
  className,
  wrapperClassName,
}: SectionTitleProps) {
  const sideWidth =
    size === "lg" ? "w-20 md:w-40 2xl:w-60" : "w-16 md:w-32";

  const defaultTitleClasses =
    size === "lg"
      ? "text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 whitespace-nowrap"
      : "text-3xl md:text-4xl italic font-serif text-primary-900 whitespace-nowrap";

  return (
    <div
      className={
        wrapperClassName ?? "flex items-center justify-center gap-3 mb-6"
      }
    >
      <div
        className={`h-0.5 ${sideWidth} bg-linear-to-r from-transparent via-primary-300 to-primary-300`}
      />
      <Tag className={className ?? defaultTitleClasses}>{children}</Tag>
      <div
        className={`h-0.5 ${sideWidth} bg-linear-to-l from-transparent via-primary-300 to-primary-300`}
      />
    </div>
  );
}
