export function extractTime(dateString) {
  const date = new Date(dateString);
  const day = padZero(date.getDate());
  const month = date.toLocaleDateString("default", { month: "2-digit" }); // Full month name
  const year = date.getFullYear();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${month}/${day}/${year}, ${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
