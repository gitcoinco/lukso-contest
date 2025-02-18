// This would normally come from your backend
export const CURRENT_WEEK = 1;

// const startDate = new Date("2025-01-27");
// const today = new Date();

// // Calculate the difference in days
// const diffTime = today.getTime() - startDate.getTime();
// const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// // Calculate current week (0-based)
// export const CURRENT_WEEK = Math.min(
//   Math.max(0, Math.floor(diffDays / 7) + 1), // Add 1 since weeks are 1-based
//   4 // Cap at week 4
// );

export const weeks = [
  { id: 1, dateRange: "Jan 27 - Feb 2" },
  { id: 2, dateRange: "Feb 3 - Feb 9" },
  { id: 3, dateRange: "Feb 10 - Feb 16" },
  { id: 4, dateRange: "Feb 17 - Feb 23" },
].map((week) => ({
  ...week,
  status:
    week.id < CURRENT_WEEK
      ? "past"
      : week.id === CURRENT_WEEK
        ? "active"
        : "upcoming",
}));
