export function toISODate(input: string | number | Date): string {
  const d = new Date(input);
  // Get YYYY-MM-DD in local date by adjusting timezone to UTC midnight of given date string
  // If input is like '2024-07-12', new Date will parse as UTC; slicing ISO gives stable date.
  return d.toISOString().slice(0, 10);
}

export function monthShort(input: string | number | Date): string {
  const d = new Date(input);
  const m = d.getUTCMonth();
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return MONTHS[m] ?? "";
}
