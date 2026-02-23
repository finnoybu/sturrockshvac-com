export type Season = "spring" | "summer" | "fall" | "winter";

export function getCurrentSeason(): Season {
  const now = new Date();
  const month = now.getMonth(); // 0–11
  const day = now.getDate();

  // Spring: Feb 15 – May 14
  if (
    (month === 1 && day >= 15) || // Feb 15+
    month === 2 || // March
    month === 3 || // April
    (month === 4 && day <= 14) // May 1–14
  ) {
    return "spring";
  }

  // Summer: May 15 – Aug 14
  if (
    (month === 4 && day >= 15) || // May 15+
    month === 5 || // June
    month === 6 || // July
    (month === 7 && day <= 14) // Aug 1–14
  ) {
    return "summer";
  }

  // Fall: Aug 15 – Nov 14
  if (
    (month === 7 && day >= 15) || // Aug 15+
    month === 8 || // September
    month === 9 || // October
    (month === 10 && day <= 14) // Nov 1–14
  ) {
    return "fall";
  }

  // Winter: Nov 15 – Feb 14
  return "winter";
}