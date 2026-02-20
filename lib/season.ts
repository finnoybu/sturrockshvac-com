export function getSeasonalHero(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // Switch ~45 days early for Northern Virginia
  if ((month === 1 && day >= 15) || month === 2 || month === 3 || (month === 4 && day < 15)) {
    return "spring";
  }

  if ((month === 4 && day >= 15) || month === 5 || month === 6 || (month === 7 && day < 15)) {
    return "summer";
  }

  if ((month === 7 && day >= 15) || month === 8 || month === 9 || (month === 10 && day < 15)) {
    return "fall";
  }

  return "winter";
}