export function formatDate(date) {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) return "Invalid Date";

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
