export default function QueryProcessor(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (
    q.includes("andrew id") ||
    q.includes("andrewid") ||
    (q.includes("andrew") && q.includes("id"))
  ) {
    return "fengde";
  }

  if (q.includes("who am i")) {
    return "小🐷";
  }

  if (q.includes("name")) {
    return "Rohan";
  }

  return "";
}
