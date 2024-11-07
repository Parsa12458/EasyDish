export function convertMinutesToHours(minutes) {
  if (minutes < 60) {
    return `${minutes} minutes`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes} minutes`;
}

export function scrollToTop() {
  window.scrollTo({ top: "", behavior: "smooth" });
}
